const Feedback = require('../class/feedback')
const feedback = new Feedback()


test('(Class: Feedback)Test add and remove feedback', async () => {
    const data = {
        name : 'Taksin',
        feedback : 'I need to buy tanks'
    }
    const result = await feedback.addFeedback(data)
    expect(result.return_code).toMatch('200');
    const feedbackID = result.feedbackID
    const removeResult = await feedback.removeFeedback(feedbackID)
    expect(removeResult.return_code).toMatch('200')
});

test('(Class: Feedback)Test get feedbacks', async () => {
    const result = await feedback.getFeedbacks();
    expect(result.return_code).toMatch('200');
},10000);


