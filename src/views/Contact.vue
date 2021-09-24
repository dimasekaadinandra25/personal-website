<template>
    <div class="min-h-screen p-5 md:p-12 flex flex-wrap justify-center flex-col md:flex-row items-center relative overflow-hidden">
        <div class="flex-initial md:flex-1 bg-blue-500 dark:bg-gray-700 rounded-lg">
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_88z2psap.json"  background="transparent"  speed="1"  loop  autoplay class="w-auto flex justify-center items-center md:w-11/12 h-auto" />
        </div>
        <div class="w-full md:flex-1 p-5 md:p-20">
            <h1 class="text-2xl md:text-4xl font-bold">Get in Touch With Me</h1>
            <div class="mt-6">
               <input type='text' placeholder="Name" class="px-3 w-full border rounded py-2 text-gray-700 focus:outline-none items-center ring dark:ring-yellow-500"/>
            </div>
            <div class="mt-4">
               <input type='text' placeholder="Email" class="px-3 w-full border rounded py-2 text-gray-700 focus:outline-none items-center ring dark:ring-yellow-500"/>
            </div>
            <div class="mt-4">
               <textarea type='text' placeholder="Message" class="px-3 w-full border rounded py-2 text-gray-700 focus:outline-none items-center ring dark:ring-yellow-500"/>
            </div>
            <div class="mt-4">
                <button class="bg-blue-500 text-white px-10 py-4 rounded-lg hover:bg-blue-400 duration-200 transition dark:text-yellow-500 dark:bg-gray-700 dark:hover:bg-gray-600 w-full md:w-auto">Submit</button>
            </div>
            <div class="mt-4 flex text-white dark:text-yellow-500 justify-center flex-col items-center py-2 w-full bg-blue-500 rounded-md dark:bg-gray-700">
                <div class="flex-1 font-bold text-sm">
                    <p>My Social Media</p>
                </div>
                <div class="flex-1 mt-2">
                    <a href="https://www.facebook.com/dimas.capella" class="mx-6 my-3">
                        <fa class="text-5xl transition duration-300 hover:text-blue-800 dark:hover:text-blue-500" :icon="['fab', 'facebook']"  />
                    </a>
                    <a href="https://github.com/dimascapella" class="mx-6 my-3">
                        <fa class="text-5xl transition duration-300 hover:text-gray-600 dark:hover:text-gray-300" :icon="['fab', 'github']" />
                    </a>
                    <a href="https://www.instagram.com/dimascapella/" class="mx-6 my-3">
                        <fa class="text-5xl transition duration-300 hover:text-purple-600 dark:hover:text-purple-400" :icon="['fab', 'instagram-square']" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default {
    name: "Contact",
    setup(){
        return{
            LottiePlayer
        }
    }
}
</script>