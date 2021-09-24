<template>
    <div class="min-h-screen p-2 flex justify-center flex-col items-center relative overflow-hidden lg:-left-20 ">
        <div class="shape">
            <div class="blob bg-blue-200 dark:bg-yellow-100 absolute w-60 h-60 md:right-32 md:top-12 md:w-64 md:h-64 lg:right-16 top-7 -right-10">
            </div>
            <div class="blob bg-blue-300 dark:bg-yellow-200 absolute w-60 h-60 md:right-32 md:top-12 md:w-64 md:h-64 lg:right-16 top-7 -right-10">
            </div>
            <div class="blob bg-blue-500 dark:bg-yellow-500 absolute w-60 h-60 md:right-32 md:top-12 md:w-64 md:h-64 lg:right-16 top-7 -right-10">
            </div>
        </div>
        <div class="relative md:left-2 lg:left-20 md:w-5/12 h-auto w-auto text-center z-20">
            <p class="md:text-7xl lg:text-8xl text-5xl dark:text-yellow-600">Dimas Eka Adinandra</p>
            <p class="text-gray-500 md:text-xl dark:text-yellow-300">Web Developer & Web Designer</p>
        </div>
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_tb8ugi81.json"  background="transparent" class="absolute bottom-6 lg:-left-20 h-auto lg:w-7/12 md:w-10/12 md:-bottom-10 w-auto flex justify-center items-center sm:-bottom-18 sm:w-9/12 xs:w-10/12"  speed="1"  loop  autoplay></lottie-player>
    </div>
</template>

<script>
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default {
    name: "Home",
    setup(){
        return{
            LottiePlayer
        }
    }
}
</script>