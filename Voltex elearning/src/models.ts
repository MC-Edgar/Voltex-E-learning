export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  createdAt?: string;
}

export interface Section {
  id: string;
  courseId: string;
  title: string;
  duration: string; // e.g. "30 min"
  order: number;
  content?: string;
}

export interface Question {
  id: string;
  examId?: string;
  text: string;
  options: string[];
  correctAnswer: number; // index in options
  order?: number;
  score?: number;
}

export interface Exam {
  id: string;
  courseId: string;
  title?: string;
  questions: Question[];
  passingPercentage?: number;
  createdAt?: string;
}

export interface Course {
  id: string;
  title: string;
  description?: string;
  content?: string;
  sections?: Section[];
  exam?: Exam | null;
  createdBy?: string;
  createdAt?: string;
}

export interface Attempt {
  id: string;
  examId: string;
  userId: string;
  answers: { [questionId: string]: number };
  correctCount: number;
  total: number;
  percentage: number;
  passed: boolean;
  timestamp: string;
  durationSeconds?: number;
}

export interface Enrollment {
  id: string;
  courseId: string;
  userId: string;
  enrolledAt?: string;
  progress?: number;
}

export default {};
