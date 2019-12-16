


// navigation /////////////////////////
const mobileNavButton= document.querySelector('.nav-button');
const mobileNav= document.querySelector('.mobile-header nav');
const mobileNavLinks= document.querySelector('.mobile-header ul');

mobileNavButton.addEventListener('click', (event) => {
        if( mobileNav.style.height <= '0px' ){
                gsap.to( mobileNav, {duration: 0.5, height: '235px'} );
                gsap.to( mobileNav, { duration: 0.6, ease: 'power3.in', opacity: 1 } );

        }else{
                console.log('wth');
                gsap.to( mobileNav, {duration: 0.5, height: 0} );
                gsap.to( mobileNav, { duration: 0.3, ease: 'circ.out', opacity: 0 } );

        }//end if
        
});//end event




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


        

// function toggleFade(element){
//         if(element.style.opacity == '0'){
//                 console.log('no opacity');
//                 gsap.to( element, { duration: 1, opacity: 1 } );
//         }else{
//                 gsap.to( element, { duration: 1, opacity: 0 } );      
//         }//end if
// }//end func