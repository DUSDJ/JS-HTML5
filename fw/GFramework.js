window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);

var game_FPS = 30;
var game_state = new LoadingState();
var after_loading_state;

function onMouseDown(e){
    if(game_state.onMouseDown != undefined)
    game_state.onMouseDown(e);
}

function onMouseUp(e){
    if(game_state.onMouseUp != undefined)
    game_state.onMouseUp(e);
}

function ChangeGameState(nextGameState){
    if(nextGameState.Update == undefined)
    return;
    
    if(nextGameState.Render == undefined)
    return;
    
    game_state = nextGameState;
}

function Update(){
    timerSystem.Update();
    
    game_state.Update();
    
    debugSystem.UseDebugMode(); // ongame, remove this.
}

function Render(){
    var theCanvas = document.getElementById("GCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 400, 300);
    
    game_state.Render();
    
    if(debugSystem.debugMode){
        debugSystem.Render();
    }
}

function gameLoop(){
    Update();
    Render();
    
    frameCounter.countFrame();
}