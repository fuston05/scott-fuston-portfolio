
// portfolio section /////////////////////////
const imgConts= document.querySelectorAll('.imgCont');
const animationTimer1= 0.5;
const animationTimer2= 0.6;

//upper span element image overlay
imgConts.forEach( ele => {
        let upperSpan1= ele.querySelector('.upperSpan');
        ele.addEventListener('mouseenter', (event) => {
                gsap.to( upperSpan1, { duration: animationTimer1, height: '86.5%' } );
                gsap.to( upperSpan1, { duration: animationTimer2, opacity: '0.8' } );
        });//end event
} );//end foreach

imgConts.forEach( ele => {
        let upperSpan2= ele.querySelector('.upperSpan');
        ele.addEventListener('mouseleave', (event) => {
                gsap.to( upperSpan2, { duration: animationTimer1, height: '0' } );
                gsap.to( upperSpan2, { duration: animationTimer2, opacity: '0' } );
        });//end event
} );//end foreach

//lower span element image overlay
imgConts.forEach( ele => {
        let lowerSpan= ele.querySelector('.lowerSpan');
        ele.addEventListener('mouseenter', (event) => {
                gsap.to( lowerSpan, { duration: animationTimer1, height: '13%' } );
        });//end event
} );//end foreach

imgConts.forEach( ele => {
        let lowerSpan= ele.querySelector('.lowerSpan');
        ele.addEventListener('mouseleave', (event) => {
                gsap.to( lowerSpan, { duration: animationTimer1, height: '0' } );
        });//end event
} );//end foreach


// navigation /////////////////////////

const mobileNavButton= document.querySelector('.nav-button');
const mobileNav= document.querySelector('.mobile-header nav');
const mobileNavLinks= document.querySelector('.mobile-header nav li');

// mobileNavButton.addEventListener('click', (evnet) => {
//         gsap.to( mobileNav, {duration: 1, width: 0} );
// });//end event

