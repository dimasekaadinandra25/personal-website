<template>
  <div class="bg-white dark:text-yellow-500 dark:bg-gray-800">
    <Navbar class="z-50" />
    <transition name="router-anim" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutDown">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
