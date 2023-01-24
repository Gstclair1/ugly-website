

const linksEl = document.querySelectorAll('aside');
linksEl.forEach( (element) => {
    element.addEventListener('click', ()=>{
        console.log('yay');
        alert('WHY DID YOU CLICK THIS???\n GO BACK TO TIK TOK!!')
    })
});


