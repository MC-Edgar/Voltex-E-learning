const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory sample data (for local dev/demo)
const courses = [
  {
    id: 'course_01',
    title: 'Motores y Automatización',
    description: 'Control y automatización de motores eléctricos industriales',
    sections: [
      { id: 's1', courseId: 'course_01', title: 'Introducción', duration: '15 min', order: 1 },
      { id: 's2', courseId: 'course_01', title: 'Motores AC/DC', duration: '45 min', order: 2 }
    ],
    exam: {
      id: 'exam_01',
      courseId: 'course_01',
      title: 'Examen Final - Motores',
      passingPercentage: 60,
      questions: [
        { id: 'q1', text: '¿Cuál es la función del rotor?', options: ['Generar campo', 'Recibir potencia', 'Convertir energía', 'Medir voltaje'], correctAnswer: 2 },
        { id: 'q2', text: "¿Qué significa 'torque'?", options: ['Velocidad', 'Fuerza de giro', 'Voltaje', 'Corriente'], correctAnswer: 1 }
      ]
    }
  }
];

const attempts = [];

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.get('/courses/:id', (req, res) => {
  const c = courses.find(x => x.id === req.params.id);
  if (!c) return res.status(404).json({ error: 'Not found' });
  res.json(c);
});

// Start an exam (returns exam payload)
app.get('/courses/:id/exam', (req, res) => {
  const c = courses.find(x => x.id === req.params.id);
  if (!c) return res.status(404).json({ error: 'Not found' });
  if (!c.exam) return res.status(404).json({ error: 'No exam for course' });
  res.json(c.exam);
});

// Submit an attempt -> automatic correction
app.post('/exams/:examId/attempts', (req, res) => {
  const { answers, userId } = req.body; // answers: { questionId: index }
  if (!answers || !userId) return res.status(400).json({ error: 'answers and userId required' });

  // find exam
  const course = courses.find(c => c.exam && c.exam.id === req.params.examId);
  if (!course) return res.status(404).json({ error: 'Exam not found' });
  const exam = course.exam;

  // verify all answered
  const allAnswered = exam.questions.every(q => typeof answers[q.id] !== 'undefined');
  if (!allAnswered) return res.status(400).json({ error: 'All questions must be answered' });

  let correctCount = 0;
  exam.questions.forEach(q => {
    if (answers[q.id] === q.correctAnswer) correctCount++;
  });

  const total = exam.questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  const passed = percentage >= (exam.passingPercentage || 60);

  const attempt = {
    id: `att_${Date.now()}`,
    examId: exam.id,
    userId,
    answers,
    correctCount,
    total,
    percentage,
    passed,
    timestamp: new Date().toISOString()
  };
  attempts.push(attempt);

  res.json({ result: attempt });
});

app.get('/users/:id/attempts', (req, res) => {
  const userAttempts = attempts.filter(a => a.userId === req.params.id);
  res.json(userAttempts);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Voltex backend skeleton listening on ${PORT}`));
