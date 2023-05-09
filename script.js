// jogo da memória
keys = ["q","w","e","a","s","d","z","x","c","v","b","n"]
// retornar um item aleatório do array keys
function randomizer (){
    let index = Math.floor(Math.random() *keys.length);
    return keys[index];
}
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())

})
document.querySelector('.composer button.guess').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
        };
    }
)
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
let easy = document.querySelector('.composer button.easy').addEventListener('click', () => {
     playEasyComposition(randomizer() + randomizer() + randomizer());
})
function playEasyComposition(easy){
    let wait = 0;
    for(let easy of songArray){

        setTimeout(() => {
            playSound(`key${easy}`);
            
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
    playComposition(randomizer() + randomizer() + randomizer() + randomizer() + randomizer());
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
    playComposition(randomizer() + randomizer() + randomizer() + randomizer() + randomizer() + randomizer() + randomizer() );
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
