// var styles=`
//     .fa-circle-pause
//     {
//         font-size:2rem;
//     }`



var songIndex=0;
var masterPlay=document.getElementById('masterPlay') ;
var masterProgressBar=document.getElementById('masterProgressBar');

let songs=[
    {
        songName: "Butter", filePath: "songs/Butter.mp3", coverPath: "butter.png" },
    {    songName: "Butter", filePath: "songs/Butter.mp3", coverPath: "butter.png" },
    {    songName: "Butter", filePath: "songs/Butter.mp3", coverPath: "butter.png" },
    {    songName : "Butter", filePath : "songs/Butter.mp3", coverPath : "butter.png" },
    {    songName : "Butter", filePath : "songs/Butter.mp3", coverPath : "butter.png" },
    {    songName : "Butter", filePath : "songs/Butter.mp3", coverPath : "butter.png" },
    {    songName : "Butter", filePath : "songs/Butter.mp3", coverPath : "butter.png" }         
    
]


let audioElement = new Audio("songs/Fifty-Fifty-Cupid.mp3")
// audioElement.play();

masterPlay.addEventListener("click",()=>{

  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    masterPlay.style.fontSize="2rem";
    masterPlay.style.color="white";
  }

  else{
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
})











audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');

    var progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log("progress ",progress);

    masterProgressBar.value=progress;

});

//m=a.c/a.d*100
masterProgressBar.addEventListener("change",()=>{

    audioElement.currentTime = ((masterProgressBar.value *audioElement.duration)/100);
    console.log("audio ",audioElement.currentTime);

})


