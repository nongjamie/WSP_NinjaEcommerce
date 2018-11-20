const axios = require('axios')
const URL = require('../config/database')

class Feedback {
    async addFeedback(data){
        try{
            const response = await axios.post(URL.addFeedback,{},{
                headers:{
                    'name': data.name,
                    'feedback' : data.feedback,
                }
            })
            return response.data
        }catch(e){
            return e.data
        }
        
    }
    async getFeedbacks(){
        try {
            const response = await axios.get(URL.getFeedbacks)
            return response.data
        } catch (error) {
            return error.data
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
            return error.data
        }
    }
}
module.exports = Feedback