

import {TweenMax} from 'gsap';
import {TimelineLite} from 'gsap';



let boxFirst=document.querySelector('.js-box-1'),
  boxSecond=document.querySelector('.js-box-2'),
  boxThird=document.querySelector('.js-box-3'),
  boxFourth=document.querySelector('.js-box-4');






// First box animation
(function animateBox() {
  let trigger=document.querySelector('.js-trigger-1');

  let fullbox  = boxFirst.querySelectorAll('polygon'),
  		main     = boxFirst.querySelector('.js-main'),
  		shadow   = boxFirst.querySelector('.js-shadow'),
  		small    = boxFirst.querySelector('.js-small');

  		// console.log(main);
  		// console.log(shadow);
  		// console.log(small);


  trigger.addEventListener('click', function getTimeline() {
    console.clear();
    // Create sub timeline

    trigger.style.pointerEvents='none';

    var tl = new TimelineLite();
    // Add tweens to sub timeline
    TweenMax.set(boxFirst,{perspective:1000});

    tl
    	.from(trigger, 1, { 
    		boxShadow : '10px 0px 5px 0.5px #333',
    		 rotationY:-200
    		  }, 'firstStage')
    	.staggerFrom(fullbox, 1, {
    		cycle:{
    			x:[-1000,-700,-500],
    		}, 
    	 ease: Back.easeOut.config(1.7) 
    	},0.1, 'firstStage')
    	.staggerFrom(fullbox, 1, {
    		cycle:{
    			rotationZ:[190,-90,20],
    			y:[-40,-30,0],
    		}, 
    	 ease: Back.easeOut.config(1.7)

    	},0.1)
    	.to(trigger,0.1, {pointerEvents:'auto'});


    return tl;
  });



})();

