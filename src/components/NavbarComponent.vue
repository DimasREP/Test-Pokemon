<template>
  <nav
    class="bg-grey-600 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <img src="../assets/img/Logo.png" class="h-8 mr-3" alt="Flowbite Logo" />
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      <div class="flex md:order-2">
        <router-link to="/tambah">
        <button
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" >+</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

