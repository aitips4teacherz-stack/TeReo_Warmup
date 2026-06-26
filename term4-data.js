// ═══════════════════════════════════════════════════════════════
// Te Reo Māori Warm-Up — TERM 4 lesson data
// Weeks 1–10 · Coming soon
// ═══════════════════════════════════════════════════════════════

const CURRICULUM_T4W1 = null
const FRIDAY_QUIZ_T4W1 = null

const CURRICULUM_T4W2 = null
const FRIDAY_QUIZ_T4W2 = null

const CURRICULUM_T4W3 = null
const FRIDAY_QUIZ_T4W3 = null

const CURRICULUM_T4W4 = null
const FRIDAY_QUIZ_T4W4 = null

const CURRICULUM_T4W5 = null
const FRIDAY_QUIZ_T4W5 = null

const CURRICULUM_T4W6 = null
const FRIDAY_QUIZ_T4W6 = null

const CURRICULUM_T4W7 = null
const FRIDAY_QUIZ_T4W7 = null

const CURRICULUM_T4W8 = null
const FRIDAY_QUIZ_T4W8 = null

const CURRICULUM_T4W9 = null
const FRIDAY_QUIZ_T4W9 = null

const CURRICULUM_T4W10 = null
const FRIDAY_QUIZ_T4W10 = null

function getTerm4Data(week) {
  const curricula = {
    1:CURRICULUM_T4W1,   2:CURRICULUM_T4W2,   3:CURRICULUM_T4W3,
    4:CURRICULUM_T4W4,   5:CURRICULUM_T4W5,   6:CURRICULUM_T4W6,
    7:CURRICULUM_T4W7,   8:CURRICULUM_T4W8,   9:CURRICULUM_T4W9,
    10:CURRICULUM_T4W10
  }
  const quizzes = {
    1:FRIDAY_QUIZ_T4W1,  2:FRIDAY_QUIZ_T4W2,  3:FRIDAY_QUIZ_T4W3,
    4:FRIDAY_QUIZ_T4W4,  5:FRIDAY_QUIZ_T4W5,  6:FRIDAY_QUIZ_T4W6,
    7:FRIDAY_QUIZ_T4W7,  8:FRIDAY_QUIZ_T4W8,  9:FRIDAY_QUIZ_T4W9,
    10:FRIDAY_QUIZ_T4W10
  }
  return { curriculum: curricula[week] || null, quiz: quizzes[week] || null }
}
