<template>
    <div as="template" v-for="(menu, index) in menuLinks" :key="index">
        <router-link :to="{name: menu.link}" >
            <span class="hover-trigger text-white font-bold md:text-black transition duration-500 ease-in-out relative cursor-pointer hover:bg-blue-100 hover:text-gray-500 text-sm flex flex-col items-center text-center text-primary md:my-5 md:hover:bg-blue-500 md:hover:text-white md:rounded-full md:p-2 rounded-md px-3 py-3 w-24 md:w-12 dark:text-yellow-500 dark:hover:text-yellow-300 dark:hover:bg-gray-600">
                <component :is="menu.icon" class="w-8 p-1"/>
                <span class="transition duration-300 ease-in-out md:right-14 md:top-3 md:font-bold hover-target mx-1 opacity-100 md:opacity-0 md:absolute md:text-black dark:text-yellow-500 z-40">{{menu.name}}</span>
            </span>
        </router-link>
    </div>
    <div @click="darkMode">
        <span class="dark:text-yellow-500 hover-trigger text-white font-bold transition duration-500 ease-in-out relative cursor-pointer text-sm flex flex-col items-center text-center text-primary md:my-5 md:bg-black md:text-white md:rounded-full md:p-2 rounded-md px-3 py-3 w-24 md:w-12 dark:bg-gray-600">
            <SunIcon v-if="toggleDarkMode" class="w-8 p-1"/>
            <MoonIcon v-else class="w-8 p-1 "/>
            <span class="transition duration-300 ease-in-out md:right-14 md:top-3 md:font-bold hover-target mx-1 opacity-100 md:opacity-0 md:absolute md:text-black dark:text-yellow-500">Mode</span>
        </span>
    </div>
</template>

<script>
import {
    HomeIcon,
    UserIcon,
    AcademicCapIcon,
    PresentationChartLineIcon,
    MenuAlt1Icon,
    SunIcon,
    MoonIcon,
    InboxInIcon
} from '@heroicons/vue/outline'

const menuLinks = [
    {
        name: 'Home',
        link: 'home',
        icon: HomeIcon
    },
    {
        name: 'Profile',
        link: 'profile',
        icon: UserIcon
    },
    {
        name: 'Skills',
        link: 'skills',
        icon: AcademicCapIcon
    },
    {
        name: 'Project',
        link: 'project',
        icon: PresentationChartLineIcon
    },
    {
        name: 'Contact',
        link: 'contact',
        icon: InboxInIcon
    }
]
export default {
    name: "NavLinks",
    components: {
        MenuAlt1Icon,
        SunIcon,
        MoonIcon
    },
    data: function() {
        return {
            toggleDarkMode: localStorage.getItem('theme') === 'light' ? false : true
        }
    },
    methods: {
  	    darkMode() {
            this.toggleDarkMode = !this.toggleDarkMode
            let toggle = localStorage.getItem('theme') == '' ? localStorage.getItem('theme') : 'light'
            if(this.toggleDarkMode){
                toggle = 'dark'
            }else{
                toggle = 'light'
            }
            localStorage.setItem('theme', toggle)
            const html = document.querySelector('html')
            html.classList.add(localStorage.getItem('theme'))
            if(toggle == "dark"){
                html.classList.remove('light')
            }else{
                html.classList.remove('dark')
            }
        }
    },
    beforeCreate(){
        localStorage.setItem('theme', localStorage.getItem('theme') === null || undefined ? 'light' : localStorage.getItem('theme'))
    },
    mounted() {
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
    },
    setup(){
        return{
            menuLinks
        }
    }
}
</script>