<template>
    <div class="min-h-screen p-5 md:p-32 flex flex-wrap justify-center flex-col md:flex-row items-center relative overflow-hidden">
        <div class="flex-1">
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_V9t630.json"  background="transparent"  class="w-auto flex justify-center items-center lg:w-10/12 h-auto" speed="1"  loop  autoplay></lottie-player>
        </div>
        <div class="flex-1 w-full text-justify -mt-20 md:mt-0 h-auto">
            <p class="text-6xl font-bold dark:text-yellow-600 underline mb-5">About Me</p>
            <p class="text-2xl dark:text-yellow-300 secondary-font">Hello!! My Name is Dimas Eka Adinandra I'm From Indonesia, I work as a Web Developer. I Love Playing MMORPG Games and Learning New Things. I'm Currently Learning Some Programming Language Such a Vue Js and Django.</p>
            <div class="flex justify-center mt-2 w-full bg-blue-300 rounded-md dark:bg-gray-600">
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
</template>

<script>
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default {
    name: "Profile",
    setup(){
        return{
            LottiePlayer
        }
    }
}
</script>