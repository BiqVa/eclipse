moon = document.querySelector('.moon')
screen = document.querySelector('.screen')
sun = document.querySelector('.sun')
html = document.querySelector('.html')

moon.addEventListener('click',function(){
  screen.style.background = 'black'
  //   anime({
  //     targets: '.screen',
  //     color:'#fff',
  //     background: "hsl(0°, 0%, 100%)",
  //     duration: 2000,
  //     // delay: 1000,
  // });
})

// setTimeout(function(){
  // screen.style.background = 'white'
  // anime({
  //   targets: '.screen',
  //   color:'#fff',
  //   background: "hsl(0°, 0%, 100%)",
  //   duration: 2000,
  //   // delay: 1000,
  // })
// },2000)
