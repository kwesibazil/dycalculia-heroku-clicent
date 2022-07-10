<template>
  <div class="d-flex flex-column h-100 px-1 px-md-4">
    <section class="shadow-sm bg-white d-flex flex-column justify-content-center align-items-center py-2">
      <h1 class="fs-5 fw-bold text-center mt-1">Aptitude test</h1>
      <div class=" w-75  ">
        <ProgressBar />
      </div>
    </section>
    <section class="d-flex flex-column justify-content-center mt-4">
      <h2 class="fw-bold text-center px-2 px-md-5 fs-5 text-muted mb-1">{{clusterName}}</h2>
      <p :class="{ invisible: !getQuizState('errAlert') }" class="text-center text-danger text-capitalize fs-xs-8 fs-7 ">Please Answer questions</p> 
      <div id="quizContainer" ref="quizContainer" >
        <Quiz />
      </div>

      <div class="d-flex my-4 justify-content-center">
        <div>
          <button v-if="getQuizState('cancelBtn')" @click="cancelQuiz"  class="btn btn-danger mb-3 px-3 me-4" type="button">Cancel</button>
          <button v-else @click="updateQuiz('back')" class="btn btn-outline-secondary mb-3 px-4 me-4" type="button">Back</button>
        </div>
        <div>
          <button v-if="getQuizState('submitBtn')" @click="submitQuiz"  class="btn btn-warning text-white mb-3 px-4" type="submit">Submit</button>
          <button v-else @click="updateQuiz('next')" class="btn btn-dark  mb-3 px-4" type="button">Next</button>
        </div>
      </div>
    </section>

  </div><!-- root container ends here -->
</template>


<script>
  import { useRouter } from 'vue-router'
  import { ref, reactive, toRefs } from 'vue'


  import { mapGetters, mapMutations} from '@/libs/vuex'
 
  import Quiz from '@/components/forms/quiz.vue'
  import ProgressBar from '@/components/misc/cluster-progress'


  export default{
    name: 'math-test',
    components:{ProgressBar, Quiz},
    setup(){
      const router = useRouter()
      const {getQuizState} = mapGetters()
      const clusterName = ref('Computation Skills')
      const {updateQuizIndex, resetQuizValues} = mapMutations()
      
      const cluster = reactive({                //👈cut off point 
        mathFluency: 3,
        mentalMath: 6,
        appliedProblems:9,
      })

      function cancelQuiz(){
        router.push({name:'dashboard'})
      } 

      return{
        cancelQuiz,
        getQuizState, 
        clusterName, 
        updateQuizIndex, 
        resetQuizValues,
        ...toRefs(cluster),
      }
    },

    methods:{
      submitQuiz(){
        const tempAnswer =  this.$store.state.mathQuiz.tempAnswer

        if(Object.keys(tempAnswer).length === 0){
          this.$store.state.mathQuiz.showAlert = true
          return
        }

        this.$store.state.mathQuiz.quizAnswers[tempAnswer.name] = tempAnswer.value
        this.$store.dispatch('submitQuiz')
      },


      async updateQuiz(btn){
        await this.$store.commit('updateQuizIndex', btn)
        const index = await this.$store.state.mathQuiz.index

        if(index < this.mathFluency){
          this.clusterName = 'Computation Skills'
          this.$store.commit('updateAptitudeProgressBar', {object:'cluster', property:'mathFluency', value: false})
        }
        else if(index >= this.mathFluency && index < this.mentalMath){
          this.clusterName = 'Math Fluency'
          this.$store.commit('updateAptitudeProgressBar', {object:'cluster', property:'mathFluency', value: true})
          this.$store.commit('updateAptitudeProgressBar', {object:'cluster', property:'mentalMath', value: false})
        }
        else if(index >=this.mentalMath && index < this.appliedProblems){
          this.clusterName = 'Mental Math'
          this.$store.commit('updateAptitudeProgressBar', {object:'cluster', property:'mentalMath', value: true})
          this.$store.commit('updateAptitudeProgressBar', {object:'cluster', property:'appliedProblems', value: false})
        }else{
          this.clusterName = 'Applied Problems'
          this.$store.commit('updateAptitudeProgressBar', {object:'cluster', property:'appliedProblems', value: true})
        }
      }
    },

    async created(){
      const { quizzes } = this.$store.state

      if(!quizzes.length)
        await this.$store.dispatch('fetchQuiz')
    }, 

    beforeUnmount(){
      this.$store.commit('resetQuizValues')
    }
  }
</script>




