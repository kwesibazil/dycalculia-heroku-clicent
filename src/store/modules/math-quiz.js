export default{
  state: {
    index: 0, 
    length: 12,
    submit: false, 
    tempAnswer: {},
    quizAnswers: {},
    errAlert: false,
    cancelBtn: true,
    submitBtn: false,
    cluster:{mentalMath: null, mathFluency: null, appliedProblems: null,}
  },

  getters: {
    getQuizState: state => payload => state[payload], 
    getClusterFill: state => payload => state.cluster[payload],
  },
  
  mutations: {

    /* reset value in lifecycle hook beforeUnmount */
    resetQuizValues(state){
      state.index = 0
      state.tempAnswer = {}
      state.errAlert= false
      state.submitBtn = false
      state.cluster.mentalMath = null
      state.cluster.mathFluency = null
      state.cluster.appliedProblems = null
    },


    setQuizLength(state, length){
      state.length = length
    },

    setQuizAnswers(state, payload){
      state.tempAnswer = payload
    },


    updateAptitudeProgressBar(state, payload){
      state[payload.object][payload.property] = payload.value
    },

    updateQuizIndex(state, payload){
      if( (payload == 'next') && (Object.keys(state.tempAnswer).length !== 0)) {
        state.index++
        state.errAlert = state.cancelBtn = false
        state.submitBtn = (state.index+1 == state.length) ? true : false
        state.quizAnswers[state.tempAnswer.name] = state.tempAnswer.value
        state.tempAnswer = {}
        return
      }

      if( (payload == 'next') && (Object.keys(state.tempAnswer).length === 0)){
        state.errAlert = true
      }
      else {
        state.index--
        state.tempAnswer = {}
        state.submitBtn = false
        state.submitBtn = state.errAlert = false

        if(state.index == 0)
          state.cancelBtn = true
      }
    }
  }
}
// use to access state in another module console.log(this.state.<module>.<state>)
//state.quiz.index = (payload == 'next') ? state.quiz.index++ : state.quiz.index--
//👉️