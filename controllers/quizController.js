const Quiz = require('../models/quizModel');

// Create a Quiz
exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json({ status: 'success', data: quiz });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

// Get All Quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json({ status: 'success', data: quizzes });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

// Get Quiz by ID
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.status(200).json({ status: 'success', data: quiz });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

// Take a Quiz
exports.takeQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctOption) score++;
    });

    res.status(200).json({ status: 'success', score, total: quiz.questions.length });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};
