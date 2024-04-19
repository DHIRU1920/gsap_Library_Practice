 const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center")
.addEventListener("mousemove",
    throttleFunction((dets) => {

      
      var div = document.createElement("div")
      div.classList.add("imagediv");
      div.style.left = dets.clientX  + "px"
      div.style.top = dets.clientY + "px";

      var img = document.createElement("img");
      img.setAttribute("src", "./bg.jpg")
      div.appendChild(img);
      
      gsap.to(img,{
         y:"0",
         duration:.2,
      })

      gsap.to(img,{
         y:"100",
         delay:.6,
      })


      document.body.appendChild(div);
      setTimeout(() => {
         div.remove();
      }, 2000);

      
    }, 200));