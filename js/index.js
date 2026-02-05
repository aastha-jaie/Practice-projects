// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const btn = document.getElementById('btn');
const emailInput = document.getElementById('input')

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const url = 'https://www.greatfrontend.com/api/projects/challenges/newsletter'

async function subscribeUser(email) {
    try{
      const response  = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        if(!response.ok){
             throw new Error(`HTTP error! status: ${response.status}`);
        }
       const data = await response.json();
       console.log('data')
       return data
    }
    catch(e){
        console.error('Subscription failed',e);
    }
}
btn.addEventListener('click',()=>{
    const email = emailInput.value.trim();
    console.log('email',email);
    const errorDiv = document.querySelector('.error');

    if(!isValidEmail(email)){
        console.log('valid email')
        errorDiv.style.display = 'block'
        //api request
        
    }   
    else{
        subscribeUser(email);
        errorDiv.style.display = 'none'

    }

})