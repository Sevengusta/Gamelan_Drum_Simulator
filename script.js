// jogo da memória
keys = ["q","w","e","a","s","d","z","x","c","v","b","n"]
// retornar um item aleatório do array keys
function randomizer (){
    let index = Math.floor(Math.random() *keys.length);
    return keys[index];
}
// ações com o botão de tocar a música
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
})
document.querySelector('.composer button.guess').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    
    if (song == document.querySelector('.game_result').innerHTML){
        playComposition(song);
        document.querySelector('h5').innerHTML = 'right combination!';
        document.querySelector('.image_area').classList.remove('hide');
        document.querySelector('.treasure').classList.remove('hide');
        document.querySelector('.death').classList.add('hide');

    } else if (song !== '' && song !== document.querySelector('.game_result').innerHTML){
        playComposition(song);
        document.querySelector('h5').innerHTML = 'wrong combination!'
        document.querySelector('.image_area').classList.remove('hide');
        document.querySelector('.death').classList.remove('hide');
        document.querySelector('.treasure').classList.add('hide');
    }
})
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    
    if (audioElement){
        audioElement.currentTime = 0;
        audioElement.play()
    }
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    console.log(keyElement)
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300)
    }
}

function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){

        setTimeout(() => {
            playSound(`key${songItem}`);
            
        }, wait)
        
        wait += 350;
    }
}

// composição fácil
easy = document.querySelector('.composer button.easy').addEventListener('click', () => {
    result = randomizer() + randomizer() + randomizer()
    playEasyComposition(result);
    document.querySelector('.game_result').innerHTML = result
})
function playEasyComposition(songArray  ){
    let wait = 0;
    for(let songItem of songArray){

        setTimeout(() => {
            playSound(`key${songItem}`);
            
        }, wait)

        wait += 350;
    }
}
function playEasyComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){

        setTimeout(() => {
            playSound(`key${songItem}`);
            
        }, wait)

        wait += 350;
    }
}
// composição normal
document.querySelector('.composer button.normal').addEventListener('click', () => {
    result = randomizer() + randomizer() + randomizer() + randomizer() + randomizer()
    playEasyComposition(result);
    document.querySelector('.game_result').innerHTML = result
})
function playNormalComposition(normal){
    let wait = 0;
    for(let normal of songArray){

        setTimeout(() => {
            playSound(`key${normal}`);
            
        }, wait)

        wait += 350;
    }
}
// composição normal
document.querySelector('.composer button.hard').addEventListener('click', () => {
    result = randomizer() + randomizer() + randomizer() + randomizer() + randomizer() + randomizer() + randomizer()
    playEasyComposition(result);
    document.querySelector('.game_result').innerHTML = result
})
function playHardComposition(hard){
    let wait = 0;
    for(let hard of songArray){

        setTimeout(() => {
            playSound(`key${hard}`);
            
        }, wait)

        wait += 350;
    }
}
