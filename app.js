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
    y:100,
    opacity:0,
    duration:1.5,
    stagger:0.2
})