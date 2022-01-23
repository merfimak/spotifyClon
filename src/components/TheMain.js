import Playlist from "./Playlist";

const playlists = {
  title: 'Playlist title 1',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  coverUrl: 'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster',
}
/* const playlists = [
  {
    classes: '',
    title: 'Playlist title 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden sm:block',
    title: 'Playlist title 2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden lg:block',
    title: 'Playlist title 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden xl:block',
    title: 'Playlist title 4',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 2xl:block',
    title: 'Playlist title 5',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 3xl:block',
    title: 'Playlist title 6',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 4xl:block',
    title: 'Playlist title 7',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 5xl:block',
    title: 'Playlist title 8',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster',
  },
  {
    classes: 'hidden 6xl:block',
    title: 'Playlist title 9',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    coverUrl: 'https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster',
  },
]; */


function TheMain(){
	return(


<main class="text-white relative">
        <div class="h-[275px] bg-gradient-to-b from-[#1f1f1f] to-[#121212] absolute w-full"></div>
        <div class="relative pt-[24px] pb-[48px] px-[32px] space-y-9 max-w-screen-5xl">
          <div>
            <div class="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
              <div>
                <h2 class="text-2xl font-semibold hover:underline capitalize">
                  <a href="#">Lorem ipsum dolor sit</a>
                </h2>
              </div>
              <a href="#home" class="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6">See all</a>
            </div>
            <div class="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
             <Playlist {...playlists}
             classes="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"/>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
            </div>
          </div>
          <div>
            <div class="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
              <div>
                <h2 class="text-2xl font-semibold hover:underline capitalize">
                  <a href="#">Lorem ipsum dolor</a>
                </h2>
                <p class="text-sm text-[#b3b3b3]">Lorem ipsum dolor sit amet.</p>
              </div>
              <a href="#" class="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6">See all</a>
            </div>
            <div class="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
              <a href="#" class="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
                <ul class="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
                  <li>
                    <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library</button>
                  </li>
                  <li class="relative">
                    <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                      Share
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <ul class="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                      <li>
                        <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist</button>
                      </li>
                      <li>
                        <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist</button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations</button>
                  </li>
                  <li>
                    <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app</button>
                  </li>
                </ul>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
            </div>
          </div>
          <div>
            <div class="flex flex-wrap justify-between items-end gap-x-6 mb-[18px]">
              <div>
                <h2 class="text-2xl font-semibold hover:underline capitalize">
                  <a href="#">Lorem ipsum</a>
                </h2>
                <p class="text-sm text-[#b3b3b3]">Lorem ipsum dolor sit.</p>
              </div>
              <a href="#" class="uppercase text-xs font-semibold tracking-widest hover:underline text-[#b3b3b3] leading-6">See all</a>
            </div>
            <div class="grid sm:grid-cols-playlists-mobile md:grid-cols-playlists-tablet lg:grid-cols-playlists-desktop gap-5">
              <a href="#" class="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
                <ul class="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
                  <li>
                    <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add to Your Library</button>
                  </li>
                  <li class="relative">
                    <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                      Share
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <ul class="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
                      <li>
                        <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy link to playlist</button>
                      </li>
                      <li>
                        <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed playlist</button>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About recommendations</button>
                  </li>
                  <li>
                    <button class="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open in Desktop app</button>
                  </li>
                </ul>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden sm:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden lg:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 2xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 3xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 4xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/1e3a8a/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 5xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/365314/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
              <a href="#" class="p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group hidden 6xl:block">
                <div class="relative">
                  <img src="https://fakeimg.pl/600/164e63/fff?text=Cover&font=lobster" class="rounded shadow-lg"></img>
                  <button class="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <h3 class="mt-4 mb-1 font-semibold tracking-wide capitalize">Playlist title</h3>
                <p class="text-sm text-[#b3b3b3] line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.</p>
              </a>
            </div>
          </div>
        </div>
      </main>


		)
}

export default TheMain;