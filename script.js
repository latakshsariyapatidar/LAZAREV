const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

 // Get the h1 element
 var h1Element = document.querySelector('#heading1');

 // Get the text content of the h1 element
 var h1Text = h1Element.textContent;

 // Create a new HTML string with each character wrapped in a span
 var spannedText = [...h1Text].map(letter => `<span>${letter}</span>`).join('');

 // Set the new HTML content of the h1 element
 h1Element.innerHTML = spannedText;

 var h1Element = document.querySelector('#heading2');

 // Get the text content of the h1 element
 var h1Text = h1Element.textContent;

 // Create a new HTML string with each character wrapped in a span
 var spannedText = [...h1Text].map(letter => `<span>${letter}</span>`).join('');

 // Set the new HTML content of the h1 element
 h1Element.innerHTML = spannedText;

 var main = document.querySelector("#main");


tl.from("#page1 h1 span", {
    opacity : 0,
    stagger: {
        amount: 0.6
    },
    duration: 0.5
})

tl.from("#page1 h4", {
    y : 50,
    opacity : 0,
    duration: 0.5
})