const navbar = document.querySelector("#navbar");

navbar.innerHTML = `
  <div class="flex items-center justify-between pl-10 pr-20 py-3 bg-slate-50 drop-shadow">
    <div class="flex items-center">
      <div class="text-black text-4xl font-semibold"> SHOP<span class="font-normal">LANE</span></div>
    </div>
    <div class="flex gap-4">
    <li class="text-lg font-bold">Clothing</li>
    <li class = "text-lg font-bold">Accessories</li>
    </div>
    <div class="hidden md:block">
      <form class="flex items-center">
      <div class="flex items-center bg-gray-200 rounded-md py-2 px-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input class="ml-2 outline-none bg-trand bg-gray-200 py- pr-80 text-lg" type="text" name="search" id="search" placeholder="Search..." />
    </div>
      </form>
    </div>
    <div class= "navIcon flex gap-x-5 text-4xl">
    <i class="fa-solid fa-cart-shopping"></i>
    <i class="fa-solid fa-user-circle"></i>
    </div>
  </div>`;

// Slider Section
// let x = ""
let slider_img = "";
const slider = document.getElementById("slider");
slider_img += `<button onclick="prevFun()" id="prev" class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 fixed">previous</button>
                <button onclick="nextFun()" id="next" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed">next</button>
`;
for (let i = 0; i < image.length; i++) {
  slider_img += `<div class="demo${i}"><img src="${image[i].link}"></div>`;
  slider.innerHTML = slider_img;
}


// function sliderFun() {
  //   for(let i = 0; i<image.length; i++){
//     if(currentImgIndex < image.length - 1){
//       currentImgIndex++
//     }else{
//       currentImgIndex = 0;
//     }
//   }
// }
const preBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentImgIndex = 0;

function nextFun(){
  if(currentImgIndex < image.length - 1){
    currentImgIndex++
  }else{
    currentImgIndex = 0;
  }
}

function prevFun(){
  if (currentImgIndex > 0) {
    currentImgIndex--;
  } else {
    currentImgIndex = image.length - 1;
  }
}





  // let sliderimgs = document.querySelectorAll('.demo1')
  // sliderimgs[1].classList.add('w-0')



//




const product = document.getElementById("product");

let product_img = "";
product_img += `<h2 class="absolute pt-10 text-2xl font-semibold pl-6">Clothing For Men And Women</h2>`;
for (let j = 0; j < image2.length; j++) {
  product_img += `<div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

      <div
        class="mt-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="group relative">
          <div
            class="h-100 aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-180">
            <img
              src="${image2[j].link}"
              alt="Front of men&#039;s Basic Tee in black."
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex flex-col gap-y-8">
            <h3 class="text-base font-bold text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${image2[j].name}"
              </a>
            </h3>
            <p class="mt-1">${image2[j].brand}"</p>
            <p class="text-sm font-medium text-gray-900">${image2[j].price}"</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
product.innerHTML = product_img;

//seleting section3 element
const section3 = document.getElementById("section3");
//loop through image3 to access all its elements
for (let x = 0; x < image3.length; x++) {
  //creating card container
  let card = document.createElement("div");
  card.classList.add("card-container");
  //add image, title, description and price to the card
}
