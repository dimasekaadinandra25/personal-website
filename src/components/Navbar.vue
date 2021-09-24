<template>
    <div :class="open ? 'translate-y-0 z-40': 'translate-y-full z-40'" class="dark:text-yellow-500 dark:bg-gray-800 transition duration-500 ease-in-out bg-blue-500 md:bg-transparent w-full h-18 px-6 py-2 flex flex-wrap justify-between text-gray-font fixed bottom-0 md:border-0 z-0 border-t border-gray-400 md:right-0 md:bottom-0 md:h-screen md:w-auto md:items-center md:flex-col md:justify-center md:px-1 md:opacity-100 transform md:translate-y-0">
        <NavLinks />
    </div>
    <div @click="toggle" :class="open ? '-translate-y-40 xs:-translate-y-30': '-translate-y-0'" class="dark:text-yellow-500 dark:bg-black md:hidden text-white bg-blue-500 fixed h-12 w-12 bottom-5 right-5 rounded-full p-2 z-50 transition duration-500 ease-in-out transform -translate-y-0">
        <MenuAlt1Icon v-if="open == false" class="block"/>
        <XIcon v-else class="block md:hidden"/>
    </div>
</template>

<script>
import NavLinks from './NavLinks.vue';
import {
    MenuAlt1Icon,
    XIcon
} from '@heroicons/vue/outline'

export default {
    name: 'Navbar',
    components: {
        NavLinks,
        MenuAlt1Icon,
        XIcon
    },
    data: function() {
        return {
            open: false
        }
    },
    methods: {
  	    toggle() {
              this.open = !this.open
        }
    },
}
</script>