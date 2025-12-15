Voltex Backend Skeleton

This folder contains a minimal Express server used for local development and testing.

Quick start:

```bash
cd backend
npm install
npm start
```

Endpoints:
- `GET /courses` — list sample courses
- `GET /courses/:id/exam` — get exam for a course
- `POST /exams/:examId/attempts` — submit answers `{ userId, answers }` and receive automatic grading
- `GET /users/:id/attempts` — list attempts for a user

This is intentionally minimal and stores data in memory. For production, replace with a proper DB and authentication.
