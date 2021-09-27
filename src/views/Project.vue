<template>
    <div class="min-h-screen p-7 md:py-10 md:px-20 overflow-hidden">
        <div class="flex">
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_moe1l8ie.json"  background="transparent"  speed="1"  loop  autoplay class="fixed top-60 left-0 md:top-20 md:left-96 w-auto md:w-8/12 h-auto opacity-20"></lottie-player>
        </div>
        <div class="text-center text-4xl font-bold">Project</div>
        <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mt-10">
            <!-- <div v-for="(project, index) in CompletedProject" :key="index">
                <div class="flex items-center md:items-end flex-col dark:bg-gray-700 bg-blue-300 opacity-90 p-5 rounded h-full md:flex-row md:bg-transparent md:dark:bg-transparent">
                    <img :src="project.image" alt="image" class="w-full md:w-8/12 md:bg-blue-300 rounded md:dark:bg-gray-600 md:p-1" :class="{'md:order-last' : index % 2 !== 0}">
                    <div class="flex flex-col items-center md:h-auto h-full md:bg-blue-500 md:dark:bg-gray-700 text-white md:px-20 md:py-5 md:mb-5 w-full rounded text-center opacity-95 dark:text-yellow-500" :class="{'md:-mr-40' : index % 2 !== 0, 'md:-ml-40' : index % 2 === 0}">
                        <p class="py-5 flex items-center h-full text-xl font-extrabold">{{project.name}}</p>
                        <p class="dark:opacity-100 flex items-end h-full">Stack : {{project.stack}}</p>
                        <div class="mt-3 w-full justify-evenly items-end h-full flex text-center text-black font-bold dark:text-yellow-500">
                            <a :href="project.github" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100" v-if="project.github !== ''">Github</a>
                            <a :href="project.link" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100" v-if="project.link !== ''">Demo</a>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="flex items-center md:items-end flex-col dark:bg-gray-700 bg-blue-300 opacity-90 p-5 rounded h-full md:flex-row md:bg-transparent md:dark:bg-transparent">
                <img src="../assets/rainforest.png" alt="image" class="w-full md:w-8/12 md:bg-blue-300 rounded md:dark:bg-gray-600 md:p-1">
                <div class="flex flex-col items-center md:h-auto h-full md:bg-blue-500 md:dark:bg-gray-700 text-white md:px-20 md:py-5 md:mb-5 w-full rounded text-center opacity-95 dark:text-yellow-500 md:-ml-40" >
                    <p class="py-5 flex items-center h-full text-xl font-extrabold">Rain Forest</p>
                    <p class="dark:opacity-100 flex items-end h-full">Stack : Html, Scss, Javascript</p>
                    <div class="mt-3 w-full justify-evenly items-end h-full flex text-center text-black font-bold dark:text-yellow-500">
                        <a href="https://github.com/dimascapella/RainForest" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100">Github</a>
                        <a href="https://dimascapella.github.io/RainForest/" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100">Demo</a>
                    </div>
                </div>
            </div>
            <div class="flex items-center md:items-end flex-col dark:bg-gray-700 bg-blue-300 opacity-90 p-5 rounded h-full md:flex-row md:bg-transparent md:dark:bg-transparent">
                <img src="../assets/python.png" alt="image" class="w-full md:w-8/12 md:bg-blue-300 rounded md:dark:bg-gray-600 md:p-1 md:order-last">
                <div class="flex flex-col items-center md:h-auto h-full md:bg-blue-500 md:dark:bg-gray-700 text-white md:px-20 md:py-5 md:mb-5 w-full rounded text-center opacity-95 dark:text-yellow-500 md:-mr-40" >
                    <p class="py-5 flex items-center h-full text-xl font-extrabold">Recognition and Identification Military Aircraft using Backpropagation and Information Fusion</p>
                    <p class="dark:opacity-100 flex items-end h-full">Stack : Python, Flask, MySQL</p>
                    <div class="mt-3 w-full justify-evenly items-end h-full flex text-center text-black font-bold dark:text-yellow-500">
                        <a href="" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100">Github</a>
                        <a href="https://dimasvalor.pythonanywhere.com/" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100">Demo</a>
                    </div>
                </div>
            </div>
            <div class="flex items-center md:items-end flex-col dark:bg-gray-700 bg-blue-300 opacity-90 p-5 rounded h-full md:flex-row md:bg-transparent md:dark:bg-transparent">
                <img src="../assets/utsman.png" alt="image" class="w-full md:w-8/12 md:bg-blue-300 rounded md:dark:bg-gray-600 md:p-1">
                <div class="flex flex-col items-center md:h-auto h-full md:bg-blue-500 md:dark:bg-gray-700 text-white md:px-20 md:py-5 md:mb-5 w-full rounded text-center opacity-95 dark:text-yellow-500 md:-ml-40" >
                    <p class="py-5 flex items-center h-full text-xl font-extrabold">Company Profile Utsman Foundation</p>
                    <p class="dark:opacity-100 flex items-end h-full">Stack : Html, Css, Javascript</p>
                    <div class="mt-3 w-full justify-evenly items-end h-full flex text-center text-black font-bold dark:text-yellow-500">
                        <a href="https://github.com/dimascapella/UtsmanFoundation" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100">Github</a>
                        <a href="https://dimascapella.github.io/UtsmanFoundation/" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100">Demo</a>
                    </div>
                </div>
            </div>
            <div class="flex items-center md:items-end flex-col dark:bg-gray-700 bg-blue-300 opacity-90 p-5 rounded h-full md:flex-row md:bg-transparent md:dark:bg-transparent">
                <img src="../assets/bee.png" alt="image" class="w-full md:w-8/12 md:bg-blue-300 rounded md:dark:bg-gray-600 md:p-1 md:order-last">
                <div class="flex flex-col items-center md:h-auto h-full md:bg-blue-500 md:dark:bg-gray-700 text-white md:px-20 md:py-5 md:mb-5 w-full rounded text-center opacity-95 dark:text-yellow-500 md:-mr-40" >
                    <p class="py-5 flex items-center h-full text-xl font-extrabold">Company Profile Bee Enterprise (Not full content)</p>
                    <p class="dark:opacity-100 flex items-end h-full">Stack : Html, Css, Javascript</p>
                    <div class="mt-3 w-full justify-evenly items-end h-full flex text-center text-black font-bold dark:text-yellow-500">
                        <a href="https://github.com/dimascapella/Bee" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100">Github</a>
                        <a href="https://dimascapella.github.io/Bee/" target="_blank" class="px-4 py-2 bg-white dark:bg-gray-800 w-full mx-5 rounded hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-200 transform scale-95 hover:scale-100">Demo</a>
                    </div>
                </div>
            </div>
            <div class="flex items-center md:items-end flex-col dark:bg-gray-700 bg-blue-300 opacity-90 p-5 rounded h-full md:flex-row md:bg-transparent md:dark:bg-transparent">
                <img src="../assets/store_1.png" alt="image" class="w-full md:w-8/12 md:bg-blue-300 rounded md:dark:bg-gray-600 md:p-1">
                <div class="flex flex-col items-center md:h-auto h-full md:bg-blue-500 md:dark:bg-gray-700 text-white md:px-20 md:py-5 md:mb-5 w-full rounded text-center opacity-95 dark:text-yellow-500 md:-ml-40" >
                    <p class="py-5 flex items-center h-full text-xl font-extrabold">Management Stock Toko Bunga Cengkeh</p>
                    <p class="dark:opacity-100 flex items-end h-full">Stack : CodeIgniter 3, MySQL</p>
                    <div class="mt-3 w-full justify-evenly items-end h-full flex text-center text-black font-bold dark:text-yellow-500">
                        <p class="px-4 py-2 dark:text-yellow-500 rounded bg-white dark:bg-gray-800">Link Not Available</p>
                    </div>
                </div>
            </div>
            <div class="flex items-center md:items-end flex-col dark:bg-gray-700 bg-blue-300 opacity-90 p-5 rounded h-full md:flex-row md:bg-transparent md:dark:bg-transparent">
                <img src="../assets/store_2.png" alt="image" class="w-full md:w-8/12 md:bg-blue-300 rounded md:dark:bg-gray-600 md:p-1 md:order-last">
                <div class="flex flex-col items-center md:h-auto h-full md:bg-blue-500 md:dark:bg-gray-700 text-white md:px-20 md:py-5 md:mb-5 w-full rounded text-center opacity-95 dark:text-yellow-500 md:-mr-40" >
                    <p class="py-5 flex items-center h-full text-xl font-extrabold">Management Store Warung Nasi Goreng</p>
                    <p class="dark:opacity-100 flex items-end h-full">Stack : CodeIgniter 4, MySQL</p>
                    <div class="mt-3 w-full justify-evenly items-end h-full flex text-center text-black font-bold dark:text-yellow-500">
                        <p class="px-4 py-2 dark:text-yellow-500 rounded bg-white dark:bg-gray-800">Link Not Available</p>
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
        image: 'src/assets/rainforest.png',
        link: 'https://dimascapella.github.io/RainForest/',
        github: 'https://github.com/dimascapella/RainForest',
        stack: 'Html, Scss, Javascript'
    },
    {
        name: 'Recognition and Identification Military Aircraft using Backpropagation and Information Fusion',
        image: 'src/assets/python.png',
        link: 'https://dimasvalor.pythonanywhere.com/',
        github: '',
        stack: 'Python, Flask, MySQL'
    },
    {
        name: 'Company Profile Utsman Foundation',
        image: 'src/assets/utsman.png',
        link: 'https://dimascapella.github.io/UtsmanFoundation/',
        github: 'https://github.com/dimascapella/UtsmanFoundation',
        stack: 'Html, Css, Javascript'
    }
    ,
    {
        name: 'Company Profile Bee Enterprise (Not full content)',
        image: 'src/assets/bee.png',
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