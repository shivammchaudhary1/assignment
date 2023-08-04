const mongoose = require("mongoose");

const comprehensionSchema = new mongoose.Schema({
  passage: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [
        {
          type: String,
          required: true,
        },
      ],
      correctOption: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Comprehension = mongoose.model("Comprehension", comprehensionSchema);

module.exports = Comprehension;
