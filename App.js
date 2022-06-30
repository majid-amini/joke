const btnJoke = document.querySelector('#changeJoke');
const generateJoke = document.querySelector('.generate');
const spinner = document.querySelector('.img_svg');

const API_address = "https://icanhazdadjoke.com";


btnJoke.addEventListener('click',generateJokeFunc)

function generateJokeFunc() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch(API_address,config)
    .then (response => response.json())
    .then (data => generateJoke.innerText = data.joke)
    .catch ((err) => (generateJoke.textContent = "Failed to fetch data please try later"))

    spinner.style.display = "none";
}

    

window.addEventListener('DOMContentLoaded', (event) => {

    btnJoke.setAttribute("disabled", "true");
    spinner.classList.remove(".hidden");
    setTimeout(function () {
      btnJoke.removeAttribute("disabled");
      
    }, 2000);
})

   
