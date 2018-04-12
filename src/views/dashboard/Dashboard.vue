<template>
  <div class="animated fadeIn">
    <h5>{{ text }}</h5>
  </div>
</template>



<script>
  export default {
    name: 'dashboard',

    data () {
      return {
        text: 'Dashboard 입니다.  /router/index.js에서 첫화면으로 설정되어 있어요.'
      }
    },

    computed: {
    },

    created () {
      // Rendering 이전에 실행됩니다.
    },

    mounted () {
      // Rendering 직후에 실행됩니다.
    },

    beforeDestroy (){
      // Component 삭제되기 전에 실행됩니다 (여기에서는 다른메뉴로 이동 하기 전)
    },

    methods: {
    }
  }
</script>
