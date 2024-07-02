//===================================================================
// Rh3t's Attribute Element.
// This'll append to the bottom of the body, and when clicked
// will redirect you to my webpage and features some cool CSS.
//===================================================================
document.addEventListener('DOMContentLoaded', () => {

    // Manifest
    let manifest = {
        name: 'Attribute',
        version: '1.0'
    }

    console.log(`[${manifest.name} v${manifest.version}] Launched Successfully.`);

    const element = document.createElement('p');

    element.width = '50';
    element.innerHTML = 'By <b>Rh3t</b>, With Love 💖'

    element.style.left = '30px';
    element.style.bottom = '-35px';
    element.style.position = 'fixed';
    element.style.borderRadius = '10px';
    element.style.padding = '10px 10px 30px';
    element.style.backgroundColor = '#353535';
    element.style.transition = 'all ease-in-out 0.1s';
    
    // Events
    element.addEventListener('click', function(){
        window.open('https://rhet0rical.dev')
    });
        
    element.addEventListener('mouseover', function(){
        element.style.bottom = '-30px';
        element.style.cursor = 'pointer';
        element.style.filter = 'brightness(1.2)';
    })
        
    element.addEventListener('mouseout', function(){
        element.style.bottom = '-35px';
        element.style.cursor = 'normal';
        element.style.filter = 'brightness(1)';
    })

    // Append to DOM
    document.body.appendChild(element);

})
