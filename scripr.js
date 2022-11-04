gsap.registerPlugin(ScrollTrigger);
var t1 = gsap;
t1.to(".sq",{
    x:700,
    duration:2,
    scrollTrigger:{
        trigger:".sq",
        start:"top 50%",
        markers:true,
        scroller: "body",
        end:"bottom 10%",
        scrub:true,
        pin:true

    }
})