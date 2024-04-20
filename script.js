window.addEventListener("mousemove",(datails)=>{

    var valX = gsap.utils.mapRange(0, window.innerWidth, 100+rect.getBoundingClientRect().width/2, window.innerWidth-(rect.getBoundingClientRect().width/2),datails.clientX);
    gsap.to("#rect",{
        left : valX + "px",
    });
})