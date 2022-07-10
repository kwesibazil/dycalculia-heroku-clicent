<template>
  <transition name="fade" mode="out-in">
    <div class="h-100 px-4 py-2" >
      <section class="my-1">
        <div class="d-flex justify-content-between ">
          <h2 class="fs-5 fw-bold">Dyscalculia</h2>
          <button @click="toggleModal('screener')" class="btn btn-sm py-0 btn-warning fs-7 me-1 text-white hvr-pulse-grow" type="button">screener</button>
        </div>
        <div class=" d-flex my-2 align-items-center">
          <Testimony />
        </div>
      </section>
      <section class="d-flex flex-column pb-3 mt-2 pt-2">
        <div class="d-flex justify-content-between px-1 mb-3 mb-sm-0">
          <h2 class="fs-5 fw-bold mb-lg-0">Math Practice</h2>
          
          <button @click="toggleModal('mathQuiz')" class="btn btn-sm  py-1 btn-primary fs-7 text-white hvr-pulse-grow" type="button">Math quiz</button>
        </div>
        <p class="text-muted text-center mb-3 py-">What do you want to practice today?</p>
        <GameCard />
      </section>
    </div><!-- container ends here -->
  </transition>
</template>

<script>
  import {mapMutations} from '@/libs/vuex'
  import Testimony from '@/components/cards/testimony.vue'
  import GameCard from '@/components/cards/game-card.vue'
  export default{
    name: 'dashboard-layout',
    components:{ Testimony, GameCard },
    setup(){
      const {toggleModal } = mapMutations()
      return {toggleModal}
    }
  }
</script>


<style scoped>
  .fade-enter-active {
    transition: opacity .5s ease;
  }
  .fade-leave-active {
    transition: opacity .2s linear;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0
  }
</style>