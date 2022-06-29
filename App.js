const btnJoke = document.querySelector('#changeJoke');
const generateJoke = document.querySelector('.generate');


const API_address = "https://icanhazdadjoke.com";

btnJoke.addEventListener('click',() => {
        fetch(API_address, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then (response => response.json())
        .then (data => generateJoke.innerText = data.joke)

    })
    
   
