

import {TweenMax} from 'gsap';
import {TimelineLite} from 'gsap';



let triggers=document.querySelectorAll('.js-trigger');


triggers.forEach(addClick);

function addClick(el) {

 	el.addEventListener('click', function() {
 		let parent = this.parentElement;

    chooseAnimation(parent,el);

  });

}
 





// box animation
function chooseAnimation(box,trigger) {

  let dataAnimate = box.getAttribute('data-animate');


  switch (dataAnimate) {
    case 'leftRotateBounce':
      leftRotateBounce(box,trigger);
      break;
    case 'topDropBounce':
      topDropBounce(box,trigger);
      break;
    case 'frontAppearSlowmo':
      frontAppearSlowmo(box,trigger);
      break;
    case 'growFromNowhere':
      growFromNowhere(box,trigger);
      break;
    default:
      console.log('Woops, there is no data-animate attribute!');
      break;
  }


};

function leftRotateBounce(animTarget,animTrigger) {

  console.clear();
  // Create sub timeline


  let fullbox  = animTarget.querySelectorAll('.poly');

  // to prevent bloating and collapsing of animation turn off any poinet events
  animTrigger.style.pointerEvents='none';

  var tl = new TimelineLite();
  // Add tweens to sub timeline
  TweenMax.set(animTarget,{perspective:1000});


  tl
    	.from(animTrigger, 1, { 
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
    	.to(animTrigger,0.1, {pointerEvents:'auto'});


  return tl;
}




function topDropBounce(animTarget,animTrigger) {

  console.clear();
  // Create sub timeline


  let fullbox  = animTarget.querySelectorAll('.poly');

  // to prevent bloating and collapsing of animation turn off any poinet events
  animTrigger.style.pointerEvents='none';

  var tl = new TimelineLite();
  // Add tweens to sub timeline
  TweenMax.set(animTarget,{perspective:10000});


  tl
    	.from(animTrigger, 1, { 
    		boxShadow : '10px 0px 5px 0.5px #333',
    		 rotationY: -200
    		  }, 'firstStage')
    	.staggerFromTo(fullbox, 0.5, {
    		teShadow : '10px 0px 5px 0.5px #333',
    		cycle:{
    			y:[-1000,-700,-500],
    			ease: Elastic.easeOut.config(1, 0.3),
    			rotationZ:[190,-90,20]
    		}}, {
    			cycle:{
        y:[40,40,40],rotationZ:[10,10,20],
    		},ease: Back.easeOut.config(1.7) 
    	}, 0.2,
    	 'firstStage')
    	.staggerTo(fullbox,0.5, {
    		cycle:{
        y:[0,0,0],
        rotationZ:[0,0,0]
    		},ease: Back.easeOut.config(1.7) },0.5)
    	.to(animTrigger,0.1, {pointerEvents:'auto'});


  return tl;
}




function frontAppearSlowmo(animTarget,animTrigger) {

  console.clear();
  // Create sub timeline


  let fullbox  = animTarget.querySelectorAll('.poly');
  		
  let fullboxArray=[].slice.call(fullbox).reverse();
  		console.log(fullbox);
  // to prevent bloating and collapsing of animation turn off any poinet events
  animTrigger.style.pointerEvents='none';

  var tl = new TimelineLite();
  // Add tweens to sub timeline
  TweenMax.set(animTarget,{perspective:999999});


  tl
    	.from(animTrigger, 1, { 
    		boxShadow : '10px 0px 5px 0.5px #333',
    		 rotationY: -200
    		  }, 'firstStage')
    	.staggerFromTo(fullboxArray, 1, {
    			rotation:360, transformOrigin:'50% 50%',
    		  cycle:{
    		  scale:[10,10,10],
    			x:[1000,-10000,2100],
    			rotationZ:[190,-90,20]
    		}}, {
    			cycle:{
    			scale:[0.6,0.6,0.6],
    			x:[100,-100,10],
    		}, 
    		 ease: Expo.easeOut
 				},0.2,'firstStage')
    	.staggerTo(fullbox,0.5, {
    		cycle:{
    			scale:[1,1,1],
        x:[0,0,0],
        rotationZ:[0,0,0]
       
    		},ease: Back.easeOut.config(1.7) },0.5)
    	.to(animTrigger,0.1, {pointerEvents:'auto'});


  return tl;
}





function growFromNowhere(animTarget,animTrigger) {

  console.clear();
  // Create sub timeline


  let fullbox  = animTarget.querySelectorAll('.poly');
  		
  let fullboxArray=[].slice.call(fullbox).reverse();
  		console.log(fullbox);
  // to prevent bloating and collapsing of animation turn off any poinet events
  animTrigger.style.pointerEvents='none';

  var tl = new TimelineLite();
  // Add tweens to sub timeline
  TweenMax.set(animTarget,{perspective:999999});


  tl
    	.from(animTrigger, 1, { 
    		boxShadow : '10px 0px 5px 0.5px #333',
    		 rotationY: -200
    		  }, 'firstStage')
    	.staggerFromTo(fullboxArray, 1, {
    		  cycle:{
    		  scaleY:[0,0,0],
    			rotationX:[90,-90,90],
    			x:[1000,-1000,500],
    		}}, {
    			cycle:{
    			scaleY:[0.2,0.2,0.01],
    			z:[-200,-2000,-100],
    			x:[0,0,0],
    			y:[100,200,10],
    		},ease: Elastic.easeIn.config(1, 0.3)
 				},0.2,'firstStage')
    	.staggerTo(fullbox,0.2, {
    		cycle:{
    			scaleY:[1,1,1],
        x:[0,0,0],
        y:[0,0,0],
        rotationZ:[0,0,0]
       
    		}, ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 100, taper: 'in', randomize: true, clamp: false})
    },0.2)
    	.to(animTrigger,0.1, {pointerEvents:'auto'});


  return tl;
}

