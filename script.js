var tl1 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start: "50% 50%",
    end: "100% 50%",
    scrub: true,
    pin: true,
    // markers: true,
}})

tl1.to(".text-part-2",{
    top: "20vh",    
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-3",
    start: "50% 50%",
    end: "150% 50%",
    scrub: true,
    pin: true,
    // markers: true,
}})

tl2.to(".cntr-cir",{
   width: "200vw",
   height: "200vw",
})
tl2.to(".cntr-cir h1",{
    opacity: "1",
 })

var tl3 = gsap.timeline({scrollTrigger:{
    trigger: "#main2",
    start: "30% 30%",
    end: "70% 90%",
    scrub: true,
    // markers: true,
}})

tl3.to("#imgTwo",{
    rotateX: "0deg",
})
.to("#imgThree",{
    rotateX: "0deg",
})
.to(".resume",{
    marginTop: "30vh",
    scale: "0.8"
}, 'sa')
.to(".img",{
    filter: "grayscale(0.6)",
}, 'sa')
.to(".text",{
    marginTop: "-100vh",
}, 'sa')