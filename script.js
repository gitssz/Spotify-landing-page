let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let masterProgressBar = document.getElementById("masterProgressBar");
let songItems = Array.from(document.getElementsByClassName("song-item"));

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
    songName: "young forever",
    artists: "BTS",
    filePath: "songs/Butte.mp3",
    coverPath: "images/young_forever.jpeg",
  },
  {
    songName: "I am",
    artists: "IVE",
    filePath: "songs/iam.mp3",
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
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("song-name")[0].textContent =songs[i].songName;
//   element.getElementsByClassName("artist")[0].textContent= songs[i].artists;
});

let audioElement = new Audio("songs/Butter.mp3");
// audioElement.play();

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

audioElement.addEventListener("timeupdate", () => {
  // console.log('timeupdate');

  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  console.log("progress  ", progress);

  masterProgressBar.value = progress;
});

//m=a.c/a.d*100
masterProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (masterProgressBar.value * audioElement.duration) / 100;
  console.log("audio ", audioElement.currentTime);
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
      //  console.log(e.target);
      let index = e.target.id;
      makeAllPlay();
      // if(audioElement.paused || audioElement.currentTime<=0){
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      e.target.style.fontSize = "1.4rem";
      e.target.style.padding = "10px";
      e.target.style.color = "white";
      audioElement.src = `songs/${index}.mp3`;
      currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");

      // }
    });
  }
);
