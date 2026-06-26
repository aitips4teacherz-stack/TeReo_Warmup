// ═══════════════════════════════════════════════════════════════
// Te Reo Māori Warm-Up — TERM 3 lesson data
// Weeks 1–10 · Coming soon
// ═══════════════════════════════════════════════════════════════

const CURRICULUM_T3W1 = null
const FRIDAY_QUIZ_T3W1 = null

const CURRICULUM_T3W2 = null
const FRIDAY_QUIZ_T3W2 = null

const CURRICULUM_T3W3 = null
const FRIDAY_QUIZ_T3W3 = null

const CURRICULUM_T3W4 = null
const FRIDAY_QUIZ_T3W4 = null

const CURRICULUM_T3W5 = null
const FRIDAY_QUIZ_T3W5 = null

const CURRICULUM_T3W6 = null
const FRIDAY_QUIZ_T3W6 = null

const CURRICULUM_T3W7 = null
const FRIDAY_QUIZ_T3W7 = null

const CURRICULUM_T3W8 = null
const FRIDAY_QUIZ_T3W8 = null

const CURRICULUM_T3W9 = null
const FRIDAY_QUIZ_T3W9 = null

const CURRICULUM_T3W10 = null
const FRIDAY_QUIZ_T3W10 = null

function getTerm3Data(week) {
  const curricula = {
    1:CURRICULUM_T3W1,   2:CURRICULUM_T3W2,   3:CURRICULUM_T3W3,
    4:CURRICULUM_T3W4,   5:CURRICULUM_T3W5,   6:CURRICULUM_T3W6,
    7:CURRICULUM_T3W7,   8:CURRICULUM_T3W8,   9:CURRICULUM_T3W9,
    10:CURRICULUM_T3W10
  }
  const quizzes = {
    1:FRIDAY_QUIZ_T3W1,  2:FRIDAY_QUIZ_T3W2,  3:FRIDAY_QUIZ_T3W3,
    4:FRIDAY_QUIZ_T3W4,  5:FRIDAY_QUIZ_T3W5,  6:FRIDAY_QUIZ_T3W6,
    7:FRIDAY_QUIZ_T3W7,  8:FRIDAY_QUIZ_T3W8,  9:FRIDAY_QUIZ_T3W9,
    10:FRIDAY_QUIZ_T3W10
  }
  return { curriculum: curricula[week] || null, quiz: quizzes[week] || null }
}
