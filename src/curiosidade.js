const buttonInformation = document.getElementById("chikorita");
const newInformation = document.getElementById("boxcuriosities");

buttonInformation.addEventListener("click", function () {
  return newInformation.innerHTML = `

    <div id="poke-ball" class"ball"> 
      <img src="imagens/pokeball.png" id="pokeBall"/>
      <p> <strong>Pokeball: </strong>Usada para capturar qualquer tipo de Pokémon, porém é aconselhável que o Pokémon esteja em um nível baixo. </p>
    </div>
    
    <div id="great-ball" class"ball">
      <img src="imagens/greatball.png" id="greatBall"/>
      <p><strong>Great Ball: </strong>Usada para capturar qualquer tipo de Pokémon, porém é aconselhável que o Pokémon esteja em um nível de baixo a médio. </p>
    </div>
    
    <div id="ultra-ball" class"ball">
      <img src="imagens/ultraball.webp" id="ultraBall"/>
      <p> <strong>Ultra Ball: </strong>Usada para capturar qualquer tipo de Pokémon, tem boas chances de captura mesmo que o Pokémon esteja em um nível alto. </p>
    </div>
    
    <div id="master-ball" class"ball">
      <img src="imagens/mastelball.png" id="masterBall"/>
      <p><strong>Master Ball: </strong>Master Ball tem 100% de chance de captura de qualquer Pokémon, sem exceções. </p>
    </div>
`;
});

