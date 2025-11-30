"before"

let engineLoaded = false;
let gameLoaded = false;

let currentGameName = "";
let tkDirectorRef = null;

let verify = setInterval(() => {
    if(window && window.cc && window.cc.director){
        engineLoaded = true;
        tkDirectorRef = cc.director;
        clearInterval(verify);
    }
}, 1000)