// function pageTransition() {

//   var tl = gsap.timeline();

//   tl.to('ul.transition li', {
//     duration: .5,
//     scaleY: 0.6,
//     transformOrigin: "bottom left",
//     backgroundColor: "#21bf73",
//     stagger: .2
//   })
//   tl.to('ul.transition li', {
//     duration: .5,
//     scaleY: 0,
//     transformOrigin: "bottom left",
//     stagger: .1,
//     delay: .2
//   })
// }

function pageTransition() {

  var tl = gsap.timeline();
  
  tl.to('.go', {
    duration: 1.3,
    scaleY: 1,
    transformOrigin: "bottom left",
    backgroundColor: "#21bf73",
    opacity: 1,
    ease: "power3"
  })
  tl.from('.go div ul li', {
    duration: 1.2,
    opacity: 0,
    y: 50,
    ease: "elastic.out",
    stagger: .1
  })
  tl.to('.go', {
    duration: 1.3,
    scaleY: 0,
    transformOrigin: "bottom left",
    opacity: 0,
    ease: "power.in"
  })
}


function contentAnimation() {

  var tl = gsap.timeline();
  tl.from('.title', {
    duration: 1.5,
    translateY: 50,
    opacity: 0,
    delay: 2.2
  })
}

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}


barba.init({
  sync: true,

  transitions: [{

    async leave(data) {
      const done = this.async();

      pageTransition();
      await delay(1400);
      done()
    },
    async enter(data) {
      contentAnimation();
    },
    async once(data) {
      contentAnimation();
    },
  }]

})