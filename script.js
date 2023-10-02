var crsr=document.querySelector("#cursur");
var blur=document.querySelector("#cursur-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true
    }
})

gsap.from(".card",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:-50,
    x:-30,
    duration:1,
    scrollTrigger:{
        trigger:"page4 h1",
        scroller:"body",
        scrub:2
    }
})

var h4all = querySelectorAll("#nav h4")

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
})