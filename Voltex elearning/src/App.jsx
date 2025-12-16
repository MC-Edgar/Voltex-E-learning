import React, { useState } from 'react';
import { BookOpen, Plus, Trash2, LogOut } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userType, setUserType] = useState(null);
  const [currentView, setCurrentView] = useState('courses'); // 'courses' o 'available'
  const [tutorials, setTutorials] = useState([
    {
      id: 1,
      title: 'Fundamentos de Electricidad Industrial',
      description: 'Conceptos esenciales de electricidad aplicados a la industria',
      content: 'Contenido del tutorial...',
      sections: [
        { id: 1, title: 'Introducción', duration: '15' },
        { id: 2, title: 'Conceptos Básicos', duration: '30' },
        { id: 3, title: 'Aplicaciones Prácticas', duration: '45' }
      ],
      progress: 0,
      exam: {
        id: 'exam-1',
        questions: [
          {
            id: 'q1',
            text: '¿Cuál es la unidad de voltaje?',
            options: ['Amperio', 'Voltio', 'Ohmio', 'Vatio'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            text: '¿Qué es la corriente eléctrica?',
            options: ['Flujo de voltaje', 'Flujo de electrones', 'Resistencia', 'Potencia'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Cableado y Canalización',
      description: 'Métodos profesionales de instalación y montaje de cables',
      content: 'Contenido del tutorial...',
      sections: [
        { id: 1, title: 'Tipos de Cable', duration: '20' },
        { id: 2, title: 'Instalación Segura', duration: '35' },
        { id: 3, title: 'Normativa y Estándares', duration: '40' }
      ],
      progress: 0,
      exam: {
        id: 'exam-2',
        questions: [
          {
            id: 'q1',
            text: '¿Cuál es el calibre más común para instalaciones residenciales?',
            options: ['AWG 2', 'AWG 10', 'AWG 14', 'AWG 20'],
            correctAnswer: 2
          },
          {
            id: 'q2',
            text: '¿Cuál es la profundidad mínima de canalización?',
            options: ['10 cm', '15 cm', '20 cm', '25 cm'],
            correctAnswer: 1
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Tableros Eléctricos y Protecciones',
      description: 'Diseño, montaje y protecciones en tableros industriales',
      content: 'Contenido del tutorial...',
      sections: [
        { id: 1, title: 'Componentes Básicos', duration: '25' },
        { id: 2, title: 'Diseño de Tableros', duration: '40' },
        { id: 3, title: 'Dispositivos de Protección', duration: '35' }
      ],
      progress: 0,
      exam: {
        id: 'exam-3',
        questions: [
          {
            id: 'q1',
            text: '¿Cuál es la función principal de un interruptor diferencial?',
            options: ['Cortar voltaje', 'Detectar fugas a tierra', 'Limitar corriente', 'Estabilizar voltaje'],
            correctAnswer: 1
          },
          {
            id: 'q2',
            text: '¿Qué es un breaker?',
            options: ['Un cable', 'Un protector de sobrecorriente', 'Un transformador', 'Un fusible mejorado'],
            correctAnswer: 1
          }
        ]
      }
    }
  ]);

  const [availableCourses] = useState([
    {
      id: 101,
      title: 'Seguridad Eléctrica Básica',
      description: 'Principios fundamentales de seguridad en instalaciones eléctricas',
      image: '🔒',
      sections: [
        { id: 1, title: 'Riesgos Eléctricos', duration: '20' },
        { id: 2, title: 'Equipos de Protección', duration: '25' },
        { id: 3, title: 'Procedimientos Seguros', duration: '30' }
      ]
    },
    {
      id: 102,
      title: 'NTC 2050 - Código Eléctrico',
      description: 'Normativa y cumplimiento de estándares eléctricos colombianos',
      image: '📋',
      sections: [
        { id: 1, title: 'Introducción a NTC', duration: '30' },
        { id: 2, title: 'Requisitos de Instalación', duration: '35' },
        { id: 3, title: 'Inspección y Pruebas', duration: '25' }
      ]
    },
    {
      id: 103,
      title: 'Transformadores Industriales',
      description: 'Funcionamiento, instalación y mantenimiento de transformadores',
      image: '⚡',
      sections: [
        { id: 1, title: 'Principios Básicos', duration: '25' },
        { id: 2, title: 'Tipos de Transformadores', duration: '30' },
        { id: 3, title: 'Mantenimiento Preventivo', duration: '40' }
      ]
    },
    {
      id: 104,
      title: 'Sistemas de Puesta a Tierra',
      description: 'Diseño e instalación de sistemas de puesta a tierra efectivos',
      image: '🌍',
      sections: [
        { id: 1, title: 'Conceptos Fundamentales', duration: '20' },
        { id: 2, title: 'Cálculo de Resistencia', duration: '35' },
        { id: 3, title: 'Instalación Práctica', duration: '40' }
      ]
    },
    {
      id: 105,
      title: 'Motores Eléctricos AC/DC',
      description: 'Funcionamiento y control de motores eléctricos trifásicos',
      image: '🔄',
      sections: [
        { id: 1, title: 'Principios de Operación', duration: '25' },
        { id: 2, title: 'Control de Velocidad', duration: '30' },
        { id: 3, title: 'Troubleshooting', duration: '35' }
      ]
    },
    {
      id: 106,
      title: 'Luminotecnia y Eficiencia Energética',
      description: 'Diseño de sistemas de iluminación eficientes y sostenibles',
      image: '💡',
      sections: [
        { id: 1, title: 'Conceptos de Luz', duration: '20' },
        { id: 2, title: 'Tecnologías LED', duration: '25' },
        { id: 3, title: 'Cálculo de Niveles', duration: '30' }
      ]
    },
    {
      id: 107,
      title: 'Sistemas de Respaldo (UPS)',
      description: 'Instalación y configuración de sistemas ininterrumpibles de potencia',
      image: '🔋',
      sections: [
        { id: 1, title: 'Tipos de UPS', duration: '25' },
        { id: 2, title: 'Cálculo de Autonomía', duration: '30' },
        { id: 3, title: 'Instalación y Pruebas', duration: '35' }
      ]
    },
    {
      id: 108,
      title: 'Medición Eléctrica Avanzada',
      description: 'Uso de instrumentos y análisis de calidad de energía',
      image: '📊',
      sections: [
        { id: 1, title: 'Multímetros Digitales', duration: '20' },
        { id: 2, title: 'Analizadores de Redes', duration: '30' },
        { id: 3, title: 'Análisis de Armónicos', duration: '35' }
      ]
    },
    {
      id: 109,
      title: 'Energías Renovables - Solar',
      description: 'Diseño e instalación de sistemas fotovoltaicos',
      image: '☀️',
      sections: [
        { id: 1, title: 'Tecnología Solar', duration: '25' },
        { id: 2, title: 'Cálculo de Sistemas', duration: '35' },
        { id: 3, title: 'Conexión a Red', duration: '30' }
      ]
    },
    {
      id: 110,
      title: 'Automatización y Control Industrial',
      description: 'PLC, SCADA y sistemas de automatización moderna',
      image: '🤖',
      sections: [
        { id: 1, title: 'Introducción a PLC', duration: '30' },
        { id: 2, title: 'Programación Básica', duration: '40' },
        { id: 3, title: 'Proyectos Prácticos', duration: '45' }
      ]
    }
  ]);
  const [showAddTutorial, setShowAddTutorial] = useState(false);
  const [editingTutorial, setEditingTutorial] = useState(null);
  const [newTutorial, setNewTutorial] = useState({
    title: '',
    description: '',
    content: '',
    sections: []
  });

  // Estados para exámenes
  const [currentExam, setCurrentExam] = useState(null);
  const [examAnswers, setExamAnswers] = useState({});
  const [examResults, setExamResults] = useState(null);
  const [examHistory, setExamHistory] = useState([]);
  const [showExamEditor, setShowExamEditor] = useState(false);
  const [editingExam, setEditingExam] = useState(null);
  const [newExam, setNewExam] = useState({
    questions: []
  });

  const handleLogin = (email, password) => {
    // Validar credenciales específicas
    if (email === 'Administrador' && password === 'admin') {
      setCurrentUser({ email, name: 'Administrador' });
      setUserType('instructor');
    } else if (email === 'ecoronel' && password === '1234') {
      setCurrentUser({ email, name: 'Edgar Coronel' });
      setUserType('student');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleAddTutorial = () => {
    if (newTutorial.title && newTutorial.description) {
      if (editingTutorial) {
        // Actualizar tutorial existente
        setTutorials(tutorials.map(t => 
          t.id === editingTutorial 
            ? { ...t, ...newTutorial }
            : t
        ));
        setEditingTutorial(null);
      } else {
        // Crear nuevo tutorial
        setTutorials([...tutorials, {
          id: Date.now(),
          ...newTutorial,
          progress: 0
        }]);
      }
      setNewTutorial({
        title: '',
        description: '',
        content: '',
        sections: []
      });
      setShowAddTutorial(false);
    }
  };

  const handleDeleteTutorial = (id) => {
    setTutorials(tutorials.filter(t => t.id !== id));
  };

  // Funciones para exámenes
  const handleStartExam = (tutorialId) => {
    const tutorial = tutorials.find(t => t.id === tutorialId);
    if (tutorial && tutorial.exam) {
      setCurrentExam({ ...tutorial.exam, tutorialId, id: tutorial.exam.id });
      setExamAnswers({});
      setExamResults(null);
    }
  };

  const handleSubmitExam = () => {
    if (!currentExam) return;
    
    // Verificar que todas las preguntas estén respondidas
    const allAnswered = currentExam.questions.every(q => examAnswers[q.id] !== undefined);
    if (!allAnswered) {
      alert('Por favor responde todas las preguntas antes de enviar');
      return;
    }

    // Calcular resultados
    let correctCount = 0;
    currentExam.questions.forEach(question => {
      if (examAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / currentExam.questions.length) * 100);
    const passed = percentage >= 60;

    const result = {
      examId: currentExam.id,
      tutorialId: currentExam.tutorialId,
      passed,
      percentage,
      correctCount,
      totalQuestions: currentExam.questions.length,
      timestamp: new Date().toLocaleString(),
      answers: examAnswers
    };

    // Actualizar progreso del tutorial si pasó
    if (passed) {
      const updatedTutorials = tutorials.map(t => {
        if (t.id === currentExam.tutorialId) {
          return { ...t, progress: 100 };
        }
        return t;
      });
      setTutorials(updatedTutorials);
    }

    setExamResults(result);
    setExamHistory([...examHistory, result]);
  };

  const handleRetryExam = () => {
    setExamAnswers({});
    setExamResults(null);
  };

  const handleCloseExam = () => {
    setCurrentExam(null);
    setExamAnswers({});
    setExamResults(null);
  };

  const handleAddExam = (tutorialId) => {
    if (newExam.questions.length === 0) {
      alert('Agrega al menos una pregunta');
      return;
    }

    const updatedTutorials = tutorials.map(t => {
      if (t.id === tutorialId) {
        return { ...t, exam: newExam };
      }
      return t;
    });

    setTutorials(updatedTutorials);
    setNewExam({ questions: [] });
    setShowExamEditor(false);
    setEditingExam(null);
  };

  if (!currentUser) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a2a4a 0%, #1a3a5a 50%, #0a1a3a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui',
        padding: '20px'
      }}>
        <div style={{
          background: 'rgba(20, 35, 55, 0.95)',
          padding: '50px 40px',
          borderRadius: '15px',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
          maxWidth: '450px',
          width: '100%',
          border: '1px solid rgba(0, 217, 255, 0.2)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '800',
              color: '#00d9ff',
              margin: '0 0 8px 0',
              textShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
              letterSpacing: '2px'
            }}>
              VOLTEX
            </h1>
            <p style={{
              fontSize: '13px',
              color: '#888',
              margin: '0 0 15px 0',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Power Engineers
            </p>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '300',
              color: '#bbb',
              margin: '0'
            }}>
              E-Learning
            </h2>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            handleLogin(email, password);
          }}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '600',
                color: '#ddd',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Usuario
              </label>
              <input
                type="text"
                name="email"
                placeholder="Administrador o ecoronel"
                required
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ddd',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.borderColor = 'rgba(0, 217, 255, 0.6)';
                  e.target.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: '35px' }}>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '600',
                color: '#ddd',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  boxSizing: 'border-box',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ddd',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.borderColor = 'rgba(0, 217, 255, 0.6)';
                  e.target.style.boxShadow = '0 0 15px rgba(0, 217, 255, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(0, 217, 255, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '13px',
                background: 'linear-gradient(135deg, #0066cc 0%, #0080ff 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '15px',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                transition: 'all 0.3s',
                boxShadow: '0 8px 20px rgba(0, 102, 204, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 12px 30px rgba(0, 102, 204, 0.5)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 8px 20px rgba(0, 102, 204, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (userType === 'student') {
    // Si hay un examen activo, mostrar el examen
    if (currentExam && !examResults) {
      return (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a2a4a 0%, #1a3a5a 100%)',
          fontFamily: 'system-ui',
          padding: '20px'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              background: 'rgba(0, 102, 204, 0.1)',
              borderRadius: '12px',
              padding: '30px',
              border: '1px solid rgba(0, 102, 204, 0.3)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
                <h1 style={{
                  color: '#00d9ff',
                  margin: 0,
                  fontSize: '28px',
                  fontWeight: 'bold'
                }}>
                  Examen del Curso
                </h1>
                <button
                  onClick={handleCloseExam}
                  style={{
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '600'
                  }}
                >
                  Cerrar
                </button>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '30px',
                borderLeft: '4px solid #00d9ff'
              }}>
                <p style={{ color: '#ddd', margin: 0, fontSize: '14px' }}>
                  <strong>Instrucciones:</strong> Responde todas las preguntas. La corrección será automática al enviar.
                </p>
              </div>

              <div style={{ display: 'grid', gap: '25px', marginBottom: '30px' }}>
                {currentExam.questions.map((question, idx) => (
                  <div
                    key={question.id}
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '10px',
                      padding: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h3 style={{
                      color: '#00d9ff',
                      margin: '0 0 15px 0',
                      fontSize: '16px',
                      fontWeight: '600'
                    }}>
                      Pregunta {idx + 1} de {currentExam.questions.length}
                    </h3>
                    <p style={{
                      color: '#fff',
                      margin: '0 0 15px 0',
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}>
                      {question.text}
                    </p>
                    <div style={{ display: 'grid', gap: '10px' }}>
                      {question.options.map((option, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => setExamAnswers({
                            ...examAnswers,
                            [question.id]: optIdx
                          })}
                          style={{
                            padding: '12px 15px',
                            background: examAnswers[question.id] === optIdx
                              ? 'linear-gradient(135deg, #0066cc 0%, #0080ff 100%)'
                              : 'rgba(255, 255, 255, 0.08)',
                            border: examAnswers[question.id] === optIdx
                              ? '2px solid #00d9ff'
                              : '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '8px',
                            color: 'white',
                            cursor: 'pointer',
                            textAlign: 'left',
                            fontSize: '14px',
                            transition: 'all 0.3s',
                            fontWeight: examAnswers[question.id] === optIdx ? '600' : '400'
                          }}
                        >
                          <span style={{
                            display: 'inline-flex',
                            width: '24px',
                            height: '24px',
                            background: examAnswers[question.id] === optIdx ? '#00d9ff' : 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            marginRight: '10px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSubmitExam}
                style={{
                  width: '100%',
                  padding: '15px',
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Enviar Examen
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Si hay resultados, mostrar resultados
    if (examResults) {
      const passed = examResults.passed;
      const percentage = examResults.percentage;
      
      let badgeColor, badgeText, badgeEmoji;
      if (percentage >= 90) {
        badgeColor = '#fbbf24';
        badgeText = 'Excelente';
        badgeEmoji = '⭐';
      } else if (percentage >= 75) {
        badgeColor = '#10b981';
        badgeText = 'Muy Bueno';
        badgeEmoji = '✨';
      } else if (percentage >= 60) {
        badgeColor = '#3b82f6';
        badgeText = 'Aprobado';
        badgeEmoji = '✓';
      } else {
        badgeColor = '#ef4444';
        badgeText = 'Reprobado';
        badgeEmoji = '✗';
      }

      return (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a2a4a 0%, #1a3a5a 100%)',
          fontFamily: 'system-ui',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ maxWidth: '600px', width: '100%' }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '15px',
              padding: '40px',
              textAlign: 'center',
              border: `2px solid ${badgeColor}`
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                background: `linear-gradient(135deg, ${badgeColor} 0%, ${badgeColor}cc 100%)`,
                borderRadius: '50%',
                margin: '0 auto 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px'
              }}>
                {badgeEmoji}
              </div>

              <h1 style={{
                color: badgeColor,
                fontSize: '36px',
                fontWeight: 'bold',
                margin: '0 0 10px 0'
              }}>
                {badgeText}
              </h1>

              <div style={{
                background: 'rgba(0, 102, 204, 0.2)',
                borderRadius: '10px',
                padding: '30px',
                marginBottom: '30px'
              }}>
                <div style={{
                  color: '#00d9ff',
                  fontSize: '48px',
                  fontWeight: 'bold',
                  margin: '0 0 10px 0'
                }}>
                  {percentage}%
                </div>
                <p style={{
                  color: '#bbb',
                  margin: '0 0 20px 0',
                  fontSize: '16px'
                }}>
                  Respuestas Correctas
                </p>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '15px',
                  marginTop: '15px'
                }}>
                  <p style={{ color: '#ddd', margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
                    {examResults.correctCount} de {examResults.totalQuestions} preguntas
                  </p>
                </div>
              </div>

              <p style={{
                color: '#aaa',
                fontSize: '12px',
                margin: '0 0 30px 0'
              }}>
                Realizado: {examResults.timestamp}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  onClick={handleRetryExam}
                  style={{
                    padding: '12px',
                    background: '#0066cc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  Reintentar
                </button>
                <button
                  onClick={handleCloseExam}
                  style={{
                    padding: '12px',
                    background: '#666',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a2a4a 0%, #1a3a5a 100%)',
        fontFamily: 'system-ui'
      }}>
        <nav style={{
          background: 'linear-gradient(90deg,#08345a 0%, #0b5ed7 100%)',
          padding: '14px 22px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 14px rgba(11,78,150,0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h1 style={{ color: '#00d9ff', margin: 0, fontSize: '20px', fontWeight: '800', letterSpacing: '1px' }}>
              VOLTEX E-Learning
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <button 
              onClick={() => setCurrentView('courses')}
              style={{ background: currentView === 'courses' ? '#0b5ed7' : 'transparent', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}
            >
              Mis Cursos
            </button>
            <button 
              onClick={() => setCurrentView('available')}
              style={{ background: currentView === 'available' ? '#0b5ed7' : 'transparent', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}
            >
              Tutoriales Disponibles
            </button>
            <button
              onClick={() => { setCurrentUser(null); setUserType(null); }}
              style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.08)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
              Cerrar Sesión
            </button>
          </div>
        </nav>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
          <h2 style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '30px',
            letterSpacing: '-0.5px'
          }}>
            {currentView === 'courses' ? 'Mis Cursos' : 'Tutoriales Disponibles'}
          </h2>

          {currentView === 'courses' ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '16px'
            }}>
              {tutorials.map(tutorial => {
                const totalModules = tutorial.sections?.length || 0;
                const totalDuration = tutorial.sections?.reduce((acc, s) => {
                  const min = parseInt(s.duration) || 0;
                  return acc + min;
                }, 0) || 0;
                
                // Buscar resultado del examen para este usuario (simulado)
                const examResult = examHistory.find(a => a.examId === tutorial.exam?.id);
                
                return (
                  <div key={tutorial.id} style={{
                    background: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0'
                  }}>
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ 
                            margin: '0 0 6px 0', 
                            fontSize: '15px', 
                            fontWeight: '700', 
                            color: '#1a1a1a',
                            lineHeight: '1.3'
                          }}>
                            {tutorial.title}
                          </h3>
                          <p style={{ 
                            margin: 0, 
                            fontSize: '13px', 
                            color: '#666666',
                            lineHeight: '1.4'
                          }}>
                            {tutorial.description}
                          </p>
                        </div>
                        {examResult && (
                          <div style={{
                            background: examResult.passed ? '#d4edda' : '#f8d7da',
                            color: examResult.passed ? '#155724' : '#721c24',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: '700',
                            whiteSpace: 'nowrap',
                            marginLeft: '12px'
                          }}>
                            {examResult.passed ? '✓ APROBADO' : '✗ REPROBADO'}
                          </div>
                        )}
                      </div>

                      <div style={{
                        display: 'flex',
                        gap: '20px',
                        fontSize: '13px',
                        color: '#666666',
                        marginBottom: '14px',
                        paddingBottom: '14px',
                        borderBottom: '1px solid #f0f0f0'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '16px' }}>📚</span>
                          <span><strong>{totalModules} módulos</strong></span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '16px' }}>⏱️</span>
                          <span><strong>{totalDuration} min</strong></span>
                        </div>
                        {examResult && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '16px' }}>⭐</span>
                            <span><strong>{examResult.percentage}%</strong></span>
                          </div>
                        )}
                      </div>

                      <div style={{ marginBottom: '14px' }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          color: '#999999',
                          marginBottom: '6px',
                          fontWeight: '600'
                        }}>
                          <span>Progreso</span>
                          <span>{Math.round((tutorial.progress || 0) * 100) / 100}% completado</span>
                        </div>
                        <div style={{
                          background: '#e8e8e8',
                          borderRadius: '4px',
                          height: '6px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            background: 'linear-gradient(90deg, #0080ff 0%, #00b4ff 100%)',
                            height: '100%',
                            width: `${(tutorial.progress || 0) * 100}%`,
                            transition: 'width 0.3s ease'
                          }} />
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          if (tutorial.exam) {
                            handleStartExam(tutorial.id);
                          } else {
                            alert('Este curso aún no tiene examen disponible');
                          }
                        }}
                        style={{
                          width: '100%',
                          padding: '12px',
                          background: 'linear-gradient(90deg, #0080ff 0%, #00b4ff 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: '700',
                          fontSize: '14px',
                          letterSpacing: '0.5px'
                        }}
                      >
                        Iniciar Curso
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {availableCourses.map(course => {
                const totalModules = course.sections?.length || 0;
                const totalDuration = course.sections?.reduce((acc, s) => {
                  const min = parseInt(s.duration) || 0;
                  return acc + min;
                }, 0) || 0;

                return (
                  <div key={course.id} style={{
                    background: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid #f0f0f0',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    hover: {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
                    }
                  }}>
                    <div style={{
                      height: '120px',
                      background: 'linear-gradient(135deg, #0080ff 0%, #00b4ff 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '48px'
                    }}>
                      {course.image}
                    </div>
                    <div style={{ padding: '16px' }}>
                      <h3 style={{
                        margin: '0 0 8px 0',
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        lineHeight: '1.3'
                      }}>
                        {course.title}
                      </h3>
                      <p style={{
                        margin: '0 0 12px 0',
                        fontSize: '12px',
                        color: '#666666',
                        lineHeight: '1.4'
                      }}>
                        {course.description}
                      </p>
                      <div style={{
                        display: 'flex',
                        gap: '12px',
                        fontSize: '12px',
                        color: '#999999',
                        marginBottom: '12px',
                        paddingBottom: '12px',
                        borderBottom: '1px solid #f0f0f0'
                      }}>
                        <span>📚 {totalModules}</span>
                        <span>⏱️ {totalDuration}m</span>
                      </div>
                      <button
                        onClick={() => {
                          // Aquí puede agregarse la lógica de inscripción
                          alert('¡Curso agregado a tus cursos!');
                        }}
                        style={{
                          width: '100%',
                          padding: '10px',
                          background: 'linear-gradient(90deg, #0080ff 0%, #00b4ff 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: '700',
                          fontSize: '13px'
                        }}
                      >
                        Inscribirse
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Vista de Instructor
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg,#667eea 0%,#764ba2 100%)',
      fontFamily: 'system-ui'
    }}>
      <nav style={{
        background: 'linear-gradient(90deg,#08345a 0%, #0b5ed7 100%)',
        padding: '12px 22px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 14px rgba(11,78,150,0.15)'
      }}>
        <div style={{ color: '#00d9ff', textShadow: '0 0 10px rgba(0,217,255,0.12)', margin: 0, fontSize: '20px', fontWeight: '800' }}>
          VOLTEX E-Learning
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button onClick={() => setShowAddTutorial(!showAddTutorial)} style={{ background: 'white', color: '#0b5ed7', padding: '8px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: '700' }}>+ Nuevo</button>
          <button
            onClick={() => { setCurrentUser(null); setUserType(null); }}
            style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.08)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
          >
            Cerrar Sesión
          </button>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '15px',
          padding: '30px',
          color: 'white'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              margin: 0
            }}>
              Gestión de Tutoriales
            </h2>
            <button
              onClick={() => setShowAddTutorial(!showAddTutorial)}
              style={{
                background: 'linear-gradient(135deg,#0066cc 0%,#00d9ff 100%)',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Plus size={20} /> Nuevo Tutorial
            </button>
          </div>

          {showAddTutorial && (
            <div style={{
              background: '#ffffff',
              borderRadius: '10px',
              padding: '24px',
              marginBottom: '30px',
              color: '#222',
              border: '1px solid #e6eefc',
              boxShadow: '0 6px 18px rgba(11, 77, 150, 0.06)'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: '18px',
                color: '#0b5ed7',
                margin: '0 0 18px 0'
              }}>
                {editingTutorial ? 'Editar Curso' : 'Nuevo Tutorial'}
              </h3>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#2b2b2b' }}>
                  Título
                </label>
                <input
                  type="text"
                  placeholder="Título"
                  value={newTutorial.title}
                  onChange={(e) => setNewTutorial({ ...newTutorial, title: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #e6e6e6',
                    borderRadius: '6px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    background: '#fbfdff'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                  Descripción *
                </label>
                <textarea
                  placeholder="Describe el contenido y objetivos del curso..."
                  value={newTutorial.description}
                  onChange={(e) => setNewTutorial({ ...newTutorial, description: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    minHeight: '80px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#333' }}>
                  Contenido Principal
                </label>
                <textarea
                  placeholder="Contenido principal del curso..."
                  value={newTutorial.content}
                  onChange={(e) => setNewTutorial({ ...newTutorial, content: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxSizing: 'border-box',
                    fontSize: '14px',
                    minHeight: '100px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{
                background: '#f7fbff',
                borderRadius: '8px',
                padding: '18px',
                marginBottom: '18px',
                border: '1px solid #e3f0ff'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <h4 style={{ margin: 0, color: '#0066cc', fontSize: '16px', fontWeight: '600' }}>
                    Secciones/Módulos ({newTutorial.sections.length})
                  </h4>
                  <button
                    onClick={() => setNewTutorial({
                      ...newTutorial,
                      sections: [...newTutorial.sections, { id: Date.now(), title: '', duration: '30 min' }]
                    })}
                    style={{
                      background: '#28a745',
                      color: 'white',
                      padding: '8px 14px',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '700'
                    }}
                  >
                    + Sección
                  </button>
                </div>

                {newTutorial.sections.length === 0 ? (
                  <p style={{ color: '#666', margin: '10px 0', fontSize: '13px', fontStyle: 'italic' }}>
                    No hay secciones. Haz clic en "+ Agregar Sección" para comenzar.
                  </p>
                ) : (
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {newTutorial.sections.map((section, idx) => (
                      <div
                        key={section.id}
                        style={{
                          background: 'white',
                          borderRadius: '8px',
                          padding: '15px',
                          border: '1px solid #ddd',
                          display: 'grid',
                          gridTemplateColumns: '1fr auto auto',
                          gap: '10px',
                          alignItems: 'center'
                        }}
                      >
                          <div>
                          <input
                            type="text"
                            placeholder={`Título de la sección ${idx + 1}`}
                            value={section.title}
                            onChange={(e) => {
                              const updated = [...newTutorial.sections];
                              updated[idx].title = e.target.value;
                              setNewTutorial({ ...newTutorial, sections: updated });
                            }}
                            style={{
                              width: '100%',
                              padding: '10px',
                              border: '1px solid #e6e6e6',
                              borderRadius: '6px',
                              fontSize: '13px',
                              marginBottom: '8px',
                              boxSizing: 'border-box',
                              background: '#fbfdff'
                            }}
                          />
                        </div>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <input
                            type="text"
                            placeholder="Duración (ej: 30 min, 1 h)"
                            value={section.duration}
                            onChange={(e) => {
                              const updated = [...newTutorial.sections];
                              updated[idx].duration = e.target.value;
                              setNewTutorial({ ...newTutorial, sections: updated });
                            }}
                            style={{
                              width: '120px',
                              padding: '10px',
                              border: '1px solid #ddd',
                              borderRadius: '6px',
                              fontSize: '13px',
                              boxSizing: 'border-box',
                              fontFamily: 'inherit'
                            }}
                          />
                          <button
                            onClick={() => {
                              const updated = newTutorial.sections.filter((_, i) => i !== idx);
                              setNewTutorial({ ...newTutorial, sections: updated });
                            }}
                            style={{
                              background: '#dc3545',
                              color: 'white',
                              border: 'none',
                              padding: '8px 12px',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '12px',
                              fontWeight: '700'
                            }}
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Upload area similar to design */}
              <div style={{
                border: '1px dashed #cfe9ff',
                borderRadius: '8px',
                padding: '22px',
                textAlign: 'center',
                color: '#6c757d',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '22px', color: '#0b5ed7', marginBottom: '8px' }}>↑</div>
                <div>Subir Videos/PDFs/Imágenes desde PC</div>
              </div>

              <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'flex-end'
              }}>
                <button
                  onClick={() => {
                    setShowAddTutorial(false);
                    setEditingTutorial(null);
                    setNewTutorial({
                      title: '',
                      description: '',
                      content: '',
                      sections: []
                    });
                  }}
                  style={{
                    padding: '12px 24px',
                    background: '#999',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddTutorial}
                  style={{
                    padding: '12px 24px',
                    background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  {editingTutorial ? 'Actualizar Curso' : 'Crear Curso'}
                </button>
              </div>
            </div>
          )}

          <div style={{ display: 'grid', gap: '15px' }}>
            {tutorials.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '14px'
              }}>
                <p>No hay cursos aún. Haz clic en "+ Nuevo Curso" para crear uno.</p>
              </div>
            ) : (
              tutorials.map(tutorial => (
                <div
                  key={tutorial.id}
                  style={{
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '12px',
                    padding: '20px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '15px'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 'bold', color: '#fff' }}>
                        {tutorial.title}
                      </h4>
                      <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                        {tutorial.description}
                      </p>
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      marginLeft: '15px'
                    }}>
                      <button
                        onClick={() => {
                          setNewTutorial(tutorial);
                          setEditingTutorial(tutorial.id);
                          setShowAddTutorial(true);
                        }}
                        style={{
                          padding: '8px 16px',
                          background: '#0066cc',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        ✎ Editar
                      </button>
                      <button
                        onClick={() => handleDeleteTutorial(tutorial.id)}
                        style={{
                          padding: '8px 16px',
                          background: '#ef4444',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        <Trash2 size={16} /> Eliminar
                      </button>
                    </div>
                  </div>

                  {tutorial.sections && tutorial.sections.length > 0 && (
                    <div style={{
                      background: 'rgba(0, 102, 204, 0.08)',
                      borderRadius: '8px',
                      padding: '12px',
                      marginTop: '15px',
                      border: '1px solid rgba(0, 102, 204, 0.2)'
                    }}>
                      <p style={{
                        margin: '0 0 10px 0',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#0066cc',
                        textTransform: 'uppercase'
                      }}>
                        Secciones/Módulos ({tutorial.sections.length}):
                      </p>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {tutorial.sections.map((section, idx) => (
                          <div
                            key={section.id || idx}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: '8px 12px',
                              background: 'rgba(255,255,255,0.05)',
                              borderRadius: '6px',
                              fontSize: '13px',
                              color: 'rgba(255,255,255,0.9)'
                            }}
                          >
                            <span>
                              <strong>{idx + 1}.</strong> {section.title || `Módulo ${idx + 1}`}
                            </span>
                            <span style={{
                              background: 'rgba(0, 102, 204, 0.3)',
                              padding: '4px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '600'
                            }}>
                              {section.duration || '—'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Sección de Gestión de Exámenes */}
        <div style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '15px',
          padding: '30px',
          color: 'white',
          marginTop: '30px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              margin: 0
            }}>
              Gestión de Exámenes
            </h2>
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>
            {tutorials.map(tutorial => (
              <div
                key={tutorial.id}
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid rgba(0, 102, 204, 0.2)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', color: '#00d9ff', fontSize: '18px', fontWeight: 'bold' }}>
                      {tutorial.title}
                    </h3>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>
                      {tutorial.exam ? `${tutorial.exam.questions.length} preguntas` : 'Sin examen'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingExam(tutorial.id);
                      if (tutorial.exam) {
                        setNewExam(tutorial.exam);
                      } else {
                        setNewExam({ questions: [] });
                      }
                      setShowExamEditor(tutorial.id);
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #0066cc 0%, #0080ff 100%)',
                      color: 'white',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '600'
                    }}
                  >
                    {tutorial.exam ? '✎ Editar Examen' : '+ Crear Examen'}
                  </button>
                </div>

                {showExamEditor === tutorial.id && (
                  <div style={{
                    background: 'rgba(0, 102, 204, 0.1)',
                    borderRadius: '10px',
                    padding: '20px',
                    marginTop: '15px',
                    border: '1px solid rgba(0, 102, 204, 0.3)'
                  }}>
                    <h4 style={{ margin: '0 0 20px 0', color: '#00d9ff', fontSize: '16px', fontWeight: '600' }}>
                      {newExam.questions.length > 0 ? 'Editar Preguntas' : 'Agregar Preguntas'}
                    </h4>

                    {newExam.questions.map((question, qIdx) => (
                      <div
                        key={qIdx}
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          borderRadius: '8px',
                          padding: '15px',
                          marginBottom: '15px',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      >
                        <div style={{ marginBottom: '10px' }}>
                          <label style={{ display: 'block', fontSize: '12px', color: '#bbb', marginBottom: '5px' }}>
                            Pregunta {qIdx + 1}
                          </label>
                          <input
                            type="text"
                            placeholder="Texto de la pregunta"
                            value={question.text}
                            onChange={(e) => {
                              const updated = [...newExam.questions];
                              updated[qIdx].text = e.target.value;
                              setNewExam({ questions: updated });
                            }}
                            style={{
                              width: '100%',
                              padding: '10px',
                              background: 'rgba(255,255,255,0.08)',
                              border: '1px solid rgba(255,255,255,0.2)',
                              borderRadius: '6px',
                              color: 'white',
                              fontSize: '13px',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                          <label style={{ display: 'block', fontSize: '12px', color: '#bbb', marginBottom: '5px' }}>
                            Opciones (separadas por | )
                          </label>
                          <input
                            type="text"
                            placeholder="Opción A | Opción B | Opción C | Opción D"
                            value={question.options.join(' | ')}
                            onChange={(e) => {
                              const updated = [...newExam.questions];
                              updated[qIdx].options = e.target.value.split('|').map(o => o.trim());
                              setNewExam({ questions: updated });
                            }}
                            style={{
                              width: '100%',
                              padding: '10px',
                              background: 'rgba(255,255,255,0.08)',
                              border: '1px solid rgba(255,255,255,0.2)',
                              borderRadius: '6px',
                              color: 'white',
                              fontSize: '13px',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                          <label style={{ display: 'block', fontSize: '12px', color: '#bbb', marginBottom: '5px' }}>
                            Respuesta Correcta (0-3)
                          </label>
                          <select
                            value={question.correctAnswer}
                            onChange={(e) => {
                              const updated = [...newExam.questions];
                              updated[qIdx].correctAnswer = parseInt(e.target.value);
                              setNewExam({ questions: updated });
                            }}
                            style={{
                              width: '100%',
                              padding: '10px',
                              background: 'rgba(255,255,255,0.08)',
                              border: '1px solid rgba(255,255,255,0.2)',
                              borderRadius: '6px',
                              color: 'white',
                              fontSize: '13px',
                              boxSizing: 'border-box'
                            }}
                          >
                            {[0, 1, 2, 3].map(i => (
                              <option key={i} value={i} style={{ background: '#333', color: 'white' }}>
                                Opción {String.fromCharCode(65 + i)}
                              </option>
                            ))}
                          </select>
                        </div>

                        <button
                          onClick={() => {
                            const updated = newExam.questions.filter((_, i) => i !== qIdx);
                            setNewExam({ questions: updated });
                          }}
                          style={{
                            background: '#ef4444',
                            color: 'white',
                            border: 'none',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: '600'
                          }}
                        >
                          Eliminar Pregunta
                        </button>
                      </div>
                    ))}

                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      marginTop: '15px'
                    }}>
                      <button
                        onClick={() => {
                          const newQuestion = {
                            id: Date.now(),
                            text: '',
                            options: ['', '', '', ''],
                            correctAnswer: 0
                          };
                          setNewExam({
                            questions: [...newExam.questions, newQuestion]
                          });
                        }}
                        style={{
                          background: '#0066cc',
                          color: 'white',
                          padding: '8px 16px',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: '600'
                        }}
                      >
                        + Agregar Pregunta
                      </button>

                      <button
                        onClick={() => {
                          handleAddExam(tutorial.id);
                        }}
                        style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                          color: 'white',
                          padding: '8px 16px',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: '600'
                        }}
                      >
                        Guardar Examen
                      </button>

                      <button
                        onClick={() => {
                          setShowExamEditor(false);
                          setEditingExam(null);
                          setNewExam({ questions: [] });
                        }}
                        style={{
                          background: '#666',
                          color: 'white',
                          padding: '8px 16px',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: '600'
                        }}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
