<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100">
    <h2 class="fw-bold text-start fs-5 mt-0">How to Play.</h2>
    <div class="flex-grow-1 content-box px-2 px-sm-3 overflow-auto h-25 w-100 py-1">
    
      <h3 class="fs-6 mb-1 fw-bold ">Match sets of 3</h3>
      <p class="fs-7">The game is played by swiping coins in any direction (so long as it is not blocked), to create sets of 3 to match the target amount. When matched, the coins will crush and shift the coins above them, allowing you to accomplish a series of different goals.</p>
      
      <h3 class="fs-6 mb-1 fw-bold">Understand the objective</h3>
      <p class="fs-7 mb-1">The initial objective of Math Crush is to earn a certain number of points within a certain number of moves.</p>
      <p class="fs-7">As you proceed through Math Crush, other objectives (such as reaching a certain score within a time limit or clearing all of a type of coin from the board) will become more common.</p>

      <h3 class="fs-6 mb-1 fw-bold">Review the game board. </h3>
      <p class="fs-7 mb-1">The "Target" number in the upper-right corner of the screen determines your current objective.</p>
      <p class="fs-7 mb-1">The score tab in the upper-left corner of the screen displays your current score.</p>
    </div>
    <button @click="toggleModal(null)" type="button"  class="align-self-md-center btn btn-warning text-white px-5 py-1 my-3 hvr-pulse-grow">Start Game</button>
  </div>
</template>

<script>
  import {mapMutations} from '@/libs/vuex'

  export default {
    name: 'rules-modal',
    setup(){
      const {toggleModal } = mapMutations()
      return {toggleModal}
    }
  }
</script>


<style scoped>
  .content-box::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  .content-box::-webkit-scrollbar-track {
    background: rgb(187, 185, 185); ;
  }

  /* Handle*/
  .content-box::-webkit-scrollbar-thumb, .content-box::-webkit-scrollbar-thumb:hover {
    background: var(--bs-warning);
  }
</style>