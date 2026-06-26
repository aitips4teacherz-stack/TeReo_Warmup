// ═══════════════════════════════════════════════════════════════
// Te Reo Māori Warm-Up — TERM 2 lesson data
// Weeks 1–10 · Coming soon
// ═══════════════════════════════════════════════════════════════

const CURRICULUM_T2W1 = null
const FRIDAY_QUIZ_T2W1 = null

const CURRICULUM_T2W2 = null
const FRIDAY_QUIZ_T2W2 = null

const CURRICULUM_T2W3 = null
const FRIDAY_QUIZ_T2W3 = null

const CURRICULUM_T2W4 = null
const FRIDAY_QUIZ_T2W4 = null

const CURRICULUM_T2W5 = null
const FRIDAY_QUIZ_T2W5 = null

const CURRICULUM_T2W6 = null
const FRIDAY_QUIZ_T2W6 = null

const CURRICULUM_T2W7 = null
const FRIDAY_QUIZ_T2W7 = null

const CURRICULUM_T2W8 = null
const FRIDAY_QUIZ_T2W8 = null

const CURRICULUM_T2W9 = null
const FRIDAY_QUIZ_T2W9 = null

const CURRICULUM_T2W10 = null
const FRIDAY_QUIZ_T2W10 = null

function getTerm2Data(week) {
  const curricula = {
    1:CURRICULUM_T2W1,   2:CURRICULUM_T2W2,   3:CURRICULUM_T2W3,
    4:CURRICULUM_T2W4,   5:CURRICULUM_T2W5,   6:CURRICULUM_T2W6,
    7:CURRICULUM_T2W7,   8:CURRICULUM_T2W8,   9:CURRICULUM_T2W9,
    10:CURRICULUM_T2W10
  }
  const quizzes = {
    1:FRIDAY_QUIZ_T2W1,  2:FRIDAY_QUIZ_T2W2,  3:FRIDAY_QUIZ_T2W3,
    4:FRIDAY_QUIZ_T2W4,  5:FRIDAY_QUIZ_T2W5,  6:FRIDAY_QUIZ_T2W6,
    7:FRIDAY_QUIZ_T2W7,  8:FRIDAY_QUIZ_T2W8,  9:FRIDAY_QUIZ_T2W9,
    10:FRIDAY_QUIZ_T2W10
  }
  return { curriculum: curricula[week] || null, quiz: quizzes[week] || null }
}
