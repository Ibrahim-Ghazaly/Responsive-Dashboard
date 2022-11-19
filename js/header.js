let header =document.querySelector("#header");

function createHeader(){
    header.innerHTML =  `
    <div class="search p-relative ">
      <i class="fa-solid fa-magnifying-glass  fa-lg p-absolute "></i>
      <input type="search" class="search-inpt p-10" placeholder="type a keyword">
   </div>
   <div class="user d-flex align-c">
    <div class="notification p-relative">
        <i class="fa-regular fa-bell  "> </i>
        <span class="p-absolute">3</span>
    </div>
    <img src="imgs/avatar.png" alt="" > 
    </div>
    `
}

createHeader()

