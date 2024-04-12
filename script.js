var rect = document.querySelector("#center");

rect.addEventListener("mousemove",(details)=>{

    var rectangleLocation = rect.getBoundingClientRect();
    var insideRectVal = details.clientX - rectangleLocation.left;

    if (insideRectVal<rectangleLocation.width/2){
        var redColour = gsap.utils.mapRange(0, rectangleLocation.width/2,255,0,insideRectVal);
        gsap.to(rect,{
            backgroundColor :`rgb(${redColour},0,0)`,
           
        });
    }
    else{
        var blueColour = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insideRectVal);
        gsap.to(rect,{
            backgroundColor :`rgb(0,0,${blueColour})`,
            
        });
    }
    rect.addEventListener("mouseleave",()=>{
        gsap.to(rect,{
            backgroundColor: "white"
        });
    })
});

