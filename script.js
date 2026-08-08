const joke = document.getElementById('joke');
const btn = document.getElementById('btn');
const apiUrl = "https://icanhazdadjoke.com/";

async function getJoke(){
    try{
        joke.textContent = "Loading a joke...";
        const response = await fetch(apiUrl, {
            headers : {'Accept' : 'application/json'}
        });
        const data = await response.json();

        joke.textContent = data.joke;

    }catch(error){
        joke.textContent = "Oops! Your pc sucks. I can't fetch the joke.";
        console.log("Error: Fetching Joke" , error);
    }
}

btn.addEventListener('click', getJoke);