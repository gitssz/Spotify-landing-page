let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let masterProgressBar = document.getElementById("masterProgressBar");
let songItems = Array.from(document.getElementsByClassName("song-item"));
let currentSongName = document.getElementsByClassName("curretnSongName");
let songImage = document.getElementsByClassName("songImage");
let artist = document.getElementsByClassName("artist");

let songs = [
  {
    songName: "Butter",
    artists: "BTS",
    filePath: "songs/Butter.mp3",
    coverPath: "images/butter.png",
  },
  {
    songName: "Cupid",
    artists: "Fifty Fifty",
    filePath: "songs/Fifty-Fifty-Cupid.mp3",
    coverPath: "images/cupid.jpeg",
  },
  {
    songName: "Dynamite",
    artists: "BTS",
    filePath: "songs/Dynamite.mp3",
    coverPath: "images/dynamite.jpeg",
  },
  {
    songName: "On the Street",
    artists: "J hope",
    filePath: "songs/onthestreet.mp3",
    coverPath: "images/young_forever.jpeg",
  },
  {
    songName: "Go-Go",
    artists: "BTS",
    filePath: "songs/Go-Go.mp3",
    coverPath: "images/young_forever.jpeg",
  },
  {
    songName: "I am",
    artists: "IVE",
    filePath: "songs/Iam.mp3",
    coverPath: "images/kpop.jpg",
  },
  {
    songName: "Psycho",
    artists: "Red velvet",
    filePath: "songs/Butter.mp3",
    coverPath: "images/pyscho.jpeg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("song-name")[0].textContent =
  songs[i].songName;
  // element.getElementsByClassName("artist")[0].textContent = songs[i].artists;
});

let audioElement = new Audio("songs/Iam.mp3");

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    masterPlay.style.fontSize = "2rem";
    masterPlay.style.color = "white";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
});

audioElement.addEventListener("timeupdate", () => { //progresbar update
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );

  masterProgressBar.value = progress;
});

//m=a.c/a.d*100
masterProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (masterProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");

      element.style.fontSize = "1.4rem";
      element.style.padding = "10px";
      element.style.color = "white";
    }
  );
};



Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      let song = e.target.id;
      makeAllPlay();
      
      if (audioElement.paused) {
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");

        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        masterPlay.style.fontSize = "2rem";
        masterPlay.style.padding = "10px";
        masterPlay.style.color = "white";
        audioElement.src = `songs/${song}.mp3`;
        audioElement.play();
      
      } else {    //if music is playing
        audioElement.pause();
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");        
      

        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");

      }
    });
  }
);

const nextSong = () => {
  document.getElementById("next").addEventListener("click", () => {
    console.log(songIndex);
    if (songIndex == songItems.length - 1) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }

    audioElement.src = `songs/${songs[songIndex].textContent}.mp3`;
    audioElement.play();
  });
};


// const playConsistency=()=>{

//   songItems.forEach((element)=>{
//     element.addEventListener("click",()=>{
      
//       // console.log(element);
//       songId=element.target.id;
//       // console.log(songId);
//       if(songId.paused){
//         element.classList.remove("fa-circle-play");
//         element.classList.add("fa-circle-pause");

//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause");
//       }
//       else{ //song is playing
//         element.classList.remove("fa-circle-pause");
//         element.classList.add("fa-circle-play");        
    
//         masterPlay.classList.remove("fa-circle-pause");
//         masterPlay.classList.add("fa-circle-play");

//       }

//     })

//   })

// }
