<template>
    <div class="bg-gray-100 h-screen py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row gap-4 m-10">
                <div class="md:w-1/4">
                    <center>
                        <svg class="h-40 w-40 text-red-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    </center>
                    
                    <p class="mb-2 text-xl text-center font-bold tracking-tight text-red-600 dark:text-white">Tambah Image</p>
                </div>
                <div class="md:w-3/4">
                    <section class="bg-gray-50 dark:bg-gray-900">
         
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Informasi Umum
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                     <h1>Nomor</h1>
                     <b>#16</b>
                      <div>
                          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                          <input type="text" name="name" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                      </div>
                      <div>
                          <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Types</label>
                          <input type="text" name="types" id="types"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                      </div>
                      <div>
                          <label for="clasification" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clasification</label>
                          <input type="text" name="clasifitaion" id="calsification"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                      </div>
                      <div>
                          <label for="resistant" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">resistant</label>
                          <input type="text" name="resistant" id="resistant"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                      </div>
                      
                      <button
                class="mt-4 mb-8 w-full rounded-md bg-red-600 px-6 py-3 font-medium text-white">Tambah</button>
          
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" >
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                          </div>
                      </div>
                  </form>
              </div>
    </section>
             
                </div>
                </div>
            </div>
        </div>
    
    </template>