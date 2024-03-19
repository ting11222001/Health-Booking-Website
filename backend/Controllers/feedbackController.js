import Feedback from "../Models/FeedbackSchema.js"

export const createFeedback = async (req, res) => {
  const newFeedback = new Feedback(req.body)

  try {

    const savedFeedback = await newFeedback.save()

    res.status(200).json({
      success: true,
      message: 'Feedback successfully created',
      data: savedFeedback
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}