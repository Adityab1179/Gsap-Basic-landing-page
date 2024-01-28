let tl=gsap.timeline()
tl.from(".nav-logo,.nav-links,.nav-right",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.5
})
tl.from(".content",{
    x:-100,
    opacity:0,
    duration1:1
})
tl.from(".images img",{
    y:30,
    opacity:0,
    duration:1.5,
    stagger:0.2
})
tl.from(".scroll-btn p",{
    scale:0,
    opacity:0,
    y:-20

})
tl.to(".scroll-btn p",{
    y:-20,
    repeat:-1,
    yoyo:true,
    duration:.5
})
