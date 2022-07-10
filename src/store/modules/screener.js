``
export default{
  state: {
    answers: {},
    progressBar:{ endValue: 0, progressValue: 0 },
  },

  getters: {
    getProgressEndValue: state => state.progressBar.endValue, 
  },

  mutations: {
    setAnswers(state, payload){
      state.answers[payload.name] = payload.value
    },
    progress(state){
      const size =  12                                    //number of questions
      const temp =  state.progressBar.endValue
      state.progressBar.progressValue =  (temp == 0) ? 0 : temp 
      state.progressBar.endValue =  Math.round((Object.keys(state.answers).length / size) * 100)
    }
  },
  
}//export ends here