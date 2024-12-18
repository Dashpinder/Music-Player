const playList= [
  {title: "Gulabi Sadi", url: "picture/Gulabi Sadi Ani Lali_320(PagalWorld.com.sb) (1).mp3", image: "images/gulabi sadi.jpg"},

  {title:"Chuttmalle", url: "picture/Chuttamalle_320(PagalWorld.com.sb) (1).mp3", image: "images/chuttmale pic.jpg"},
  
  {title: "Happy Dreams", url: "picture/2017-04-14_-_Happy_Dreams_-_David_Fesliyan (1).mp3", image: "images/diljeet song pic.jpg"},
  
  {title: "Hor Sanu Ki Chahida", url: "picture/Hor Sanu Ki Chahida - Dilpreet Dhillon (DJJOhAL.Com) (1).mp3", image: "images/dilpreet new song.jpg"},
  
  {title: "Ho Gya Pyar", url: "picture/Ho Gya Pyar - Ranjit Bawa (DJJOhAL.Com) (1).mp3", image: "images/ranjit bawa.jpg"},
  
  {title: "Gora Rang", url: "picture/Gora Rang - SABBA (DJJOhAL.Com) (1).mp3", image: "images/diljeet song pic.jpg"},
  
  {title: "Risk Ishq", url: "picture/Risk Ishq - Chandra Brar (DJJOhAL.Com) (1).mp3", image: "images/Risk-Ishq pic.jpg"},
  
  {title: "Sade Jehe", url: "picture/Sade Jehe - R Nait (DJJOhAL.Com) (1).mp3", image: "images/r nait pic.jpeg"},
  
  {title: "Loafer", url: "picture/Loafer - Maninder Buttar (DJJOhAL.Com) (1).mp3", image: "images/loafer pic.jpeg"},
 ];
 
  let currentIndexSong= 0;
 
  let audio= new Audio(playList[currentIndexSong].url);
  let sng= document.getElementById("sng");
  let songlist= document.getElementById("song-list");
  let songTitle= document.getElementById("songTitle");
  let prevBtn= document.getElementById("prevBtn");
  let playBtn= document.getElementById("playBtn");
  let nextBtn= document.getElementById("nextBtn");
  let progressBar= document.getElementById("progressBar");
 
 
  function loadSong(song){
   audio.src= song.url;
   songTitle.innerHTML= song.title;
   pic.src= song.image;
  }
 
 
  function readySongList() {
     playList.forEach((word, index) => {
     let li = document.createElement("li");
      li.innerHTML= word.title;
      li.addEventListener("click", () => selectSong(index));
      songlist.appendChild(li);
     });
  }
 
  function selectSong(index) {
     currentIndexSong = index;
     loadSong(playList[currentIndexSong]);
     audio.play();
     playBtn.innerHTML= `<i class="fa-solid fa-pause"></i>`;
  }
 
 playBtn.addEventListener("click", function(){
   if(audio.paused){
     audio.play();
     playBtn.innerHTML= `<i class="fa-solid fa-pause"></i>`;
   } else{
     audio.pause();  
     playBtn.innerHTML= `<i class="fa-solid fa-play"></i>`;
   }
 });
 
 
 nextBtn.addEventListener("click", function(){
     currentIndexSong= (currentIndexSong + 1) % playList.length;
     loadSong(playList[currentIndexSong]);
     audio.play();
     playBtn.innerHTML= `<i class="fa-solid fa-pause"></i>`;   
 });
 
 
 prevBtn.addEventListener("click", function(){
     currentIndexSong= (currentIndexSong - 1 + playList.length) % playList.length;
     loadSong(playList[currentIndexSong]);
     audio.play();
     playBtn.innerHTML= `<i class="fa-solid fa-pause"></i>`;
 });
 
audio.addEventListener("timeupdate",function(){
   let progress= (audio.currentTime / audio.duration) * 100;
   progressBar.value= progress;

});

progressBar.addEventListener("input", function(){
   let newTime = (progressBar.value / 100) * audio.duration;
   audio.currentTime= newTime;
   
});
 
 loadSong(playList[currentIndexSong]);
 readySongList();
 


