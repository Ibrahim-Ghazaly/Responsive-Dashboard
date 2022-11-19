let sideBar =document.querySelector(".sidebar");

function createSideBar(){
    sideBar.innerHTML =  `
    <div class="heading">
    <h3 class="head p-relative  c-text mt-0">Ibrahim</h3>
   <div class="cyrcle"></div>
</div> 
<ul class="links">
    <li > 
        <a class=" link d-block  c-black fs-14 rad-6 p-10 " href="index.html">
            <i class="fa-solid fa-chart-line fa-fw"></i>
            <span class="link-text">Dashboard</span>
        </a>
    </li>
    <li  >
        <a class="link d-block c-black  fs-14 rad-6 p-10 " href="setting.html">
            <i class="fa-solid fa-gear fa-fw"></i>
            <span  class="link-text">Setting</span>
        </a>
    </li>
    <li>
        <a class="link d-block c-black fs-14 rad-6 p-10" href="profile.html">
        <i class="fa-regular fa-user fa-fw"></i>
        <span  class="link-text">Profile</span> 
      </a>
    </li>
    <li >
        <a class="link d-block c-black  fs-14 rad-6 p-10 " href="projects.html">
          <i class="fa-solid fa-diagram-project fa-fw"></i>
          <span  class="link-text">Projects</span>
        </a>
    </li>
    <li >
    <a class="link d-block c-black  fs-14 rad-6 p-10" href="courses.html">
        <i class="fa-solid fa-graduation-cap fa-fw"></i>
        <span  class="link-text">Courses</span>
    </a>
    </li>
    <li  >
    <a class="link d-block c-black  fs-14 rad-6 p-10" href="friends.html">
        <i class="fa-solid fa-users fa-fw"></i>
        <span  class="link-text">Friends</span>
     </a>
    </li>
    <li  >
    <a class="link d-block c-black  fs-14 rad-6 p-10" href="files.html">
        <i class="fa-regular fa-file fa-fw"></i>
        <span  class="link-text">Files</span>
     </a>
    </li>
    <li  >
        <a class="link d-block c-black  fs-14 rad-6 p-10" href="plans.html">
             <i class="fa-solid fa-pen fa-fw"></i>
            <span  class="link-text">Plans</span>
        </a>
    </li>
</ul>
    `
}

createSideBar()





let links =document.querySelectorAll(".link");

let currentlocation=window.location.href;
for(let i = 0;i < currentlocation.length ;i++){

    
    if (links[i].href === currentlocation){
       
        links[i].classList.add("active")
   
}
}
