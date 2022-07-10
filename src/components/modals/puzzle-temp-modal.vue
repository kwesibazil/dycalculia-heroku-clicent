<template>
  <div class="d-flex flex-column justify-content-center align-items-center h-100">
    <h2 class="fw-bold text-start fs-5 mt-0">How to Play.</h2>
    <div class="flex-grow-1 content-box px-2 px-sm-3 overflow-auto h-25 w-100 py-1">
    
      <h3 class="fs-6 mb-1 fw-bold ">Drag and Drop </h3>
      <p class="fs-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, amet! Maiores quis ullam facere quia maxime, molestias voluptas facilis velit ut in dolore porro natus delectus</p>
      
      <h3 class="fs-6 mb-1 fw-bold">Understand the objective</h3>
      <p class="fs-7 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam ducimus</p>
      <p class="fs-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore est accusamus a cupiditate officia enim dolores maxime  </p>
      
      <h3 class="fs-6 mb-1 fw-bold">Review the game board. </h3>
      <p class="fs-7 mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore totam atque labore ab sequi temporibus voluptas consequuntur at vitae qui!</p>
      <p class="fs-7 mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur magni voluptatibus laboriosam sit at modi iste, </p>
    </div>
    <button @click="toggleModal(null)" type="button"  class="align-self-md-center btn btn-warning text-white px-5 py-1 my-3 hvr-pulse-grow">Start Game</button>
  </div>
</template>

<script>
  import {mapMutations} from '@/libs/vuex'

  export default {
    name: 'temp-modal',
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