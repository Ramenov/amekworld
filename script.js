const displayEloMordo = () => {
    const audio = document.getElementById("background-audio");
    if (audio.paused === true) {
        audio.play();
    } else audio.pause();
    console.log("Elo Mordo!");
}