const buttonInformation = document.getElementById("chikorita");
const newInformation = document.getElementById("boxcuriosities");


buttonInformation.addEventListener("click", function () {
  return newInformation.innerHTML = `
  <div id="poke-ball"> 
        <img src="imagens/pokeball.png" id="pokeBall"/>
        <h3>Pokeball</h3>
        <p> Usada para capturar qualquer tipo de Pokémon, porém é aconselhável que o Pokémon esteja em um nível baixo. </p>
      </div>
    
      <div id="great-ball">
        <img src="imagens/greatball.png" id="greatBall"/>
        <h3>Gret Ball</h3>
         <p>Usada para capturar qualquer tipo de Pokémon, porém é aconselhável que o Pokémon esteja em um nível de baixo a médio. </p>
      </div>
    
      <div id="ultra-ball">
        <img src="imagens/ultraball.webp" id="ultraBall"/>
        <h3>Ultra Ball</h3>
        <p> Usada para capturar qualquer tipo de Pokémon, tem boas chances de captura mesmo que o Pokémon esteja em um nível alto. </p>
      </div>
    
      <div id="master-ball">
        <img src="imagens/mastelball.png" id="masterBall"/>
        <h3>Master Ball</h3>
        <p>Master Ball tem 100% de chance de captura de qualquer Pokémon, sem exceções. </p>
      </div>
`;
});


