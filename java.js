let clickedLink = false

const getPokemon = async() =>{
    try{
        const rs = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const data = await rs.json();
        
        const totalPokemon = data.results;
        //totalPokemon = name and url
        render(totalPokemon);
        addLinkEventListeners();
        
    } catch (err){
        console.log(err);
    }

}


const render=(pokemonArr)=>{
    const ul = document.querySelector(`ul`);
    const pokemonList =pokemonArr.map((singlePokemon)=>{      
        const urlLink= singlePokemon.url.split(`/`);    
        const pokemonNum = urlLink[6];
        return `<li><a href="" data-number="${pokemonNum}">${singlePokemon.name}</a></li>`;
        
        
    });

    ul.innerHTML = pokemonList.join(``);
    ul.style.font=`bold`
    ul.style.fontSize =`20px`
    ul.style.fontFamily = `cursive`
    
    
}   

const addLinkEventListeners = ()=>{
        const linkArray = document.querySelectorAll(`a`)
        console.log(linkArray)
        
        for(let i=0; i <linkArray.length; i++){
            const link = linkArray[i];
            console.log(link)

            
            link.addEventListener(`click`,async(event)=>{
                
                event.preventDefault();
                clickedLink = true;
        
                await gotPokemon(link.attributes[1].value);
                removePokemonLinks();
        
            });
        }
    const returnBtn = document.querySelector(`button`);
    returnBtn.innerText = `Return`
    returnBtn.addEventListener(`click`,(event)=>{
        event.preventDefault();
        clickedLink = false;
        addPokemonLinks();
        removePokemonImg();
    });


};
const addPokemonLinks =()=>{
    const linkArray = document.querySelectorAll(`li`)

        for(let i =0; i<linkArray.length; i++){
            const link = linkArray[i];
            link.style.display =`block`;
        };
};
const removePokemonImg =()=>{
    
    const img = document.querySelector(`img`)
    
         img.src = ``
        }

const removePokemonLinks =()=>{
    console.log(clickedLink)
    const linkArray = document.querySelectorAll(`li`)
    if(clickedLink){
        for(let i =0; i<linkArray.length; i++){
            const link = linkArray[i];
            link.style.display =`none`;
    
        }  
    }
}


   const gotPokemon = async(pokemonNum)=>{
        const rs = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`);
        const data = await rs.json();
        
        const img = document.querySelector (`img`)
        img.src = data.sprites.front_default;

}
/* const root = document.querySelector(`#root`);
root.innerHTML =``;

const img =document.createElement(`img`);
img.src = pokemonNum.sprites.front_default; */



    getPokemon();