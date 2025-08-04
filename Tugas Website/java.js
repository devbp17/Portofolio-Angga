function scrollToTop() {
    window.scrollTo({ top: 0, });
  }

  var mySong = document.getElementById("mySong");
  var icon = document.getElementById("play");

  icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src = "play.png"
    }else{
        mySong.pause();
        icon.src = "paused.png"
    }
  }