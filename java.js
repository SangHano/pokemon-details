const getPokemon = async() =>{
    try{
        const rs = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const data = await rs.json();
        const totalPokemon = data.results;
        render(totalPokemon)
        addLinkEventListeners()
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
                //grab data-number
                await gotPokemon(link.attributes[1].value);
        
            });
        }
    }

   const gotPokemon = async(pokemonNum)=>{
        const rs = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`);
        const data = await rs.json();

        const pTag = document.querySelector(`p`)
            pTag.innerText = JSON.stringify(data,null,2);
            pTag.style.font=`bold`

    }

    getPokemon();