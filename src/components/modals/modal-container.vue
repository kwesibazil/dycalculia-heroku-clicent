<template>
  <transition mode="out-in" name="nested">
    <div v-if="getObjState({obj:'modal', prop:'isActive'})" @click="shakeX"  class="overlay">
      <div :class="{'animate__shakeX  border border-2 border-dark': disabled }" class="animate__animated modal-container d-flex flex-column shadow bg-light px-3 px-sm-4 rounded-3 h-100">
        <button @click="toggleModal" class="btn-close align-self-end pt-3 pb-2  my-2" type="button" aria-label="Close"></button>
        <div class="flex-grow-1 mb-3 h-75  modal-slot">
          <slot></slot>
        </div><!-- modal content ends here -->
      </div><!-- modal container ends here -->
    </div><!-- overlay ends here -->
  </transition>
</template>

<script>
  import { ref } from 'vue'
  import {mapGetters, mapMutations } from '@/libs/vuex'

  export default{
    name: 'modal-container',
    setup(){
      const {toggleModal} = mapMutations()
      const {getObjState} = mapGetters()
      const disabled = ref(false)

      function shakeX(e){
        if(e.target === e.currentTarget){
          this.disabled = true
          setTimeout(_ => this.disabled = false, 1000 )
        }
      }

      return { shakeX, getObjState, disabled, toggleModal }
    },
    
    beforeUnmount(){
      this.$store.commit('resetModal')
    }
  }
</script>

<style scoped>

  .modal-slot::-webkit-scrollbar {
    display: none;
  }
  .overlay{
    top: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-container{
    top: 10%;
    z-index: 4;
    max-width: 90%;
    max-height: 75%;
    min-height: 500px; 
    position: relative;
    margin-left: auto;
    margin-right: auto
  }

  @media (min-width:576px){
    .modal-container{
      top: 5%;
      max-height: 75%;
      max-width: 490px;
    }
  }


  .nested-enter-active, .nested-leave-active {
    transition: all .3s ease-in-out;
  }.nested-enter-from, .nested-leave-to {
    opacity: 0;
  }

  /* delay leave of parent element and  delay enter of nested element */ 
  .nested-leave-active, .nested-enter-active .modal-container{ 
    transition-delay: 0.25s;
  }.nested-enter-active .modal-container, .nested-leave-active .modal-container { /* transition nested elements */
    transition: all 0.3s ease-in-out;
  }.nested-enter-from .modal-container, .nested-leave-to .modal-container {
    transform: translateY(-115%);
    opacity: .1;
  }

</style>