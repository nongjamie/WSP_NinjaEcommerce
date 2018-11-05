const axios = require('axios')
const URL = require('../config/database')

class Feedback {
    async addFeedback(data){
        try{
            console.log(data.name)
            console.log(data.feedback)
            const response = await axios.post(URL.addFeedback,{},{
                headers:{
                    'name': data.name,
                    'feedback' : data.feedback,
                }
            })
            return response.data
        }catch(e){
            console.log('add feedback error')
            return e.data
        }
        
    }
    async getFeedbacks(){
        try {
            const response = await axios.get(URL.getFeedbacks)
            return response.data
        } catch (error) {
            console.log('get feedbacks error')
        }
    }

    async removeFeedback(feedbackID){
        try {
            const response = await axios.post(URL.removeFeedback, {}, {
                headers:{
                    'feedbackID' : feedbackID
                }
            })
            return response.data
        } catch (error) {
            console.log('remove feedbacks error')
            return error.data
        }
    }
}
module.exports = Feedback