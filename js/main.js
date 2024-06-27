function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();

function imgconAnimation() {
    var imgcon = document.querySelector("#img-container");
    var playbtn = document.querySelector("#play");
    document.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
          left: dets.x-470,
          top: dets.y-200,
        });
      });

    imgcon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    imgcon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    
}
imgconAnimation();

function navbarAnimation() {
    // gsap.to(".nav-part1>.material-symbols-outlined", {
    //   transform: "translateY(-100%)",
    //   scrollTrigger: {
    //     trigger: "#page1",
    //     scroller: "#main",
    //     start: "top 0",
    //     end: "top -5%",
    //     scrub: true,
    //   },
    // });
    gsap.to(".nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
}
navbarAnimation()

function loadinganimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.3,
        duration:0.5,
        stagger:0.3
    })
    gsap.from("#page1 #img-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,
      });
      gsap.from("#page2 .elem", {
        scale: 0.9,
        opacity: 0,
        delay: 3.3,
        duration: 1,
      });
    //   gsap.from("#page3 .child", {
    //     scale: 0.9,
    //     opacity: 0,
    //     delay: 5.3,
    //     duration: 0.5,
    //   });
}
loadinganimation();

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    document.querySelector("#child1").addEventListener("mouseenter",function(){
        gsap.to("#cursor1", {
          transform: "translate(-50%,-50%) scale(1)",
        });
    })
  
    document.querySelector("#child1").addEventListener("mouseleave",function(){
      gsap.to("#cursor1",{
        transform: 'translate(-50%,-50%) scale(0)'
      })
    })
    document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to("#cursor2", {
          transform: "translate(-50%,-50%) scale(1)",
        });
    })
  
    document.querySelector("#child2").addEventListener("mouseleave",function(){
      gsap.to("#cursor2",{
        transform: 'translate(-50%,-50%) scale(0)'
      })
    })
    document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to("#cursor3", {
          transform: "translate(-50%,-50%) scale(1)",
        });
    })
  
    document.querySelector("#child3").addEventListener("mouseleave",function(){
      gsap.to("#cursor3",{
        transform: 'translate(-50%,-50%) scale(0)'
      })
    })
    document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to("#cursor4", {
          transform: "translate(-50%,-50%) scale(1)",
        });
    })
  
    document.querySelector("#child4").addEventListener("mouseleave",function(){
      gsap.to("#cursor4",{
        transform: 'translate(-50%,-50%) scale(0)'
      })
    })
    document.querySelector("#child5").addEventListener("mouseenter",function(){
        gsap.to("#cursor5", {
          transform: "translate(-50%,-50%) scale(1)",
        });
    })
  
    document.querySelector("#child5").addEventListener("mouseleave",function(){
      gsap.to("#cursor5",{
        transform: 'translate(-50%,-50%) scale(0)'
      })
    })
    document.querySelector("#child6").addEventListener("mouseenter",function(){
        gsap.to("#cursor6", {
          transform: "translate(-50%,-50%) scale(1)",
        });
    })
  
    document.querySelector("#child6").addEventListener("mouseleave",function(){
      gsap.to("#cursor6",{
        transform: 'translate(-50%,-50%) scale(0)'
      })
    })
  }
cursorAnimation();