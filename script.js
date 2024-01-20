let password = document.getElementById('password');
let piano = document.querySelector('.piano');
let pianoKeys = document.querySelectorAll('.key');
let audio = new Audio();
let box = document.querySelector(".box");
let arr =['a','w','s','e','d','f','t','g','y','h','u','j','k','o','l','p',';'];

password.addEventListener('click', () => {
    password.style.height = "50vh";
    setTimeout(() => {
        piano.style.display = "flex";
    }, 300);
})

pianoKeys.forEach(key => {
    key.addEventListener('click', (event) => playSound(event.target.dataset.key, event.target));
});
function playSound(key, value) {
    if(arr.includes(key)){
        audio.src = `tunes/${key}.wav`;
        audio.play();
        animateNoteIcon(value);
    }
}
document.addEventListener('keydown', (event) => {
    playSound(event.key);
});