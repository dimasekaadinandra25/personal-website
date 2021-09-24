<template>
    <div class="min-h-screen p-7 md:py-10 md:px-20 overflow-hidden">
        <div class="flex">
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_moe1l8ie.json"  background="transparent"  speed="1"  loop  autoplay class="fixed top-60 left-0 md:top-20 md:left-96 w-auto md:w-8/12 h-auto opacity-20"></lottie-player>
        </div>
        <div class="text-center text-4xl font-bold">Project</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div v-for="(project, index) in CompletedProject" :key="index">
                <div class="flex items-center flex-col dark:bg-gray-700 bg-blue-300 opacity-90 p-5 rounded h-full transform hover:-translate-y-2 transition duration-200 font-bold">
                    <img :src="project.image" >
                    <p class="text-center py-5 flex items-center h-full">{{project.name}}</p>
                    <p class="opacity-80 dark:opacity-100 dark:text-yellow-300 flex items-end h-full">Stack : {{project.stack}}</p>
                    <div class="mt-3 w-full flex justify-evenly items-end h-full text-center">
                        <a :href="project.github" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100" v-if="project.github !== ''">Github</a>
                        <a :href="project.link" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100" v-if="project.link !== ''">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as LottiePlayer from "@lottiefiles/lottie-player";

const CompletedProject = [
    {
        name: 'Rain Forest',
        image: 'static/RainForest.png',
        link: 'https://dimascapella.github.io/RainForest/',
        github: 'https://github.com/dimascapella/RainForest',
        stack: 'Html, Scss, Javascript'
    },
    {
        name: 'Recognition and Identification Military Aircraft using Backpropagation and Information Fusion',
        image: 'static/Python.png',
        link: 'https://dimasvalor.pythonanywhere.com/',
        github: '',
        stack: 'Python, Flask, MySQL'
    },
    {
        name: 'Company Profile Utsman Foundation',
        image: 'static/Utsman.png',
        link: 'https://dimascapella.github.io/UtsmanFoundation/',
        github: 'https://github.com/dimascapella/UtsmanFoundation',
        stack: 'Html, Css, Javascript'
    }
    ,
    {
        name: 'Company Profile Bee Enterprise (Beberapa Content Masih Belum Ada Dari Perusahaan)',
        image: 'static/Bee.png',
        link: 'https://dimascapella.github.io/Bee/',
        github: 'https://github.com/dimascapella/Bee',
        stack: 'Html, Css, Javascript'
    }
]

export default {
    name: "Project",
    setup(){
        return{
            LottiePlayer,
            CompletedProject,
        }
    }
}
</script>