import { createStore } from 'vuex'
import {vuexSession} from  '@/libs/vuex-persistence'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

//modules
import auth from './modules/auth'
import screener from './modules/screener'
import mathQuiz from './modules/math-quiz'
export default createStore({
  state,
  actions,
  getters,
  mutations,
  modules: {
    auth,
    mathQuiz,
    screener
  },
  plugins:[vuexSession.plugin]
})



