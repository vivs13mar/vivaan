// let animate = gsap.timeline()
// animate.from('#navpage', {
//     duration: 10, 
//     opacity: 0
// 
let background = document.querySelector('#background')
let hamburger = document.querySelector('#hamburger')
let navpage = document.querySelector('#navpage')
let close = document.querySelector('#close')
hamburger.addEventListener('click' , function(){

background.style.transform ='scale(0.55) translateX(-200px) rotateY(7deg) skewY(-6deg)'
// background.style.transform ='scale(0.55)'
navpage.style.right = '0'

})
close.addEventListener('click' , function(){
    background.style.transform ='scale(1) translateX(0) rotateY(0deg) skewY(0deg)'
    navpage.style.right = '-23%'
})
gsap.to("#circle",{
    duration:4,
    delay : 7.5,
    scale: 22
    
})

gsap.from("#background",{
    duration:.5,
    delay : 9.5,
    height: "0",
    width : "0",
  
})

let animate = gsap.timeline()

animate.from("#logo",{
    duration:1,
    delay:10,
    opacity:0,
    x:50

   
})
animate.from("#hamburger",{
    duration:0.6,
    opacity:0,
    delay:0.4,
    x:50   
})


animate.from("#image",{
    duration:0.6,
    opacity:0,
    delay:0.5,
    y:-50

   
})

animate.from("#background h1",{
    duration:0.5,
    opacity:0,
    delay:0.6,
    y:-50

   
})
animate.from("#button",{
    duration:0.5,
    opacity:0,
    delay:0.6, 
    y:-50
})

