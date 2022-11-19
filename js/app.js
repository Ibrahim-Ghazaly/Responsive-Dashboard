let wrapper = document.querySelector(".wrapper")
let secondSpan = document.querySelectorAll(".progres .second");
let firstSpan = document.querySelectorAll(".progres .first");




let firstSpanWidth = 0;


window.onscroll = function () {

    if (window.scrollY >= wrapper.offsetTop) {
      console.log("Reached Section Three");
      secondSpan.forEach((span) => {
        span.style.width = span.dataset.width;
      });
      firstSpan.forEach((span) => {
        firstSpanWidth =span.dataset.width;
        span.innerHTML=span.dataset.width;
        span.style.opacity=1;
        span.style.setProperty('left',`calc(${firstSpanWidth} - ${3}%)`);
      });
    }
}



