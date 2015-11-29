function onGameInit(){
    document.title = "Just RPG";
    game_FPS = 30;
    debugSystem.debugMode = true; //ongame, remove this code.
    
    resourcePreLoader.AddImage("img/dummy.png");
    
    after_loading_state = new TitleState();
    setInterval(gameLoop, 1000 / game_FPS);
}
window.addEventListener("load", onGameInit, false);


