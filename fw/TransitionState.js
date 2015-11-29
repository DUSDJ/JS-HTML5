function TransitionFadeOut(prevState, nextState, delay){
    this.prevState = prevState;
    this.nextState = nextState;
    this.delay = delay;
    this.alpha = 0;
}

TransitionFadeOut.prototype.Render = function(){
    var theCanvas = document.getElementById("GCanvas");
    var Context = theCanvas.getContext("2d");
    
    this.prevState.Render();
    
    var oldAlpha = Context.globalAlpha;
    var oldFillStyle = Context.fillStyle;
    
    Context.globalAlpha = this.alpha / 255;
    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 400, 300);
    Context.globalAlpha = oldAlpha;
    Context.fillStyle = oldFillStyle;
}

TransitionFadeOut.prototype.Update = function(){
    this.alpha += this.delay;
    if(this.alpha >= 255)
        ChangeGameState(this.nextState);
}

/*-------------------------------------------------------------*/


function TransitionFadeIn(prevState, nextState, delay){
    this.prevState = prevState;
    this.nextState = nextState;
    this.delay = delay;
    this.alpha = 255;
}

TransitionFadeIn.prototype.Render = function(){
    var theCanvas = document.getElementById("GCanvas");
    var Context = theCanvas.getContext("2d");
    
    this.nextState.Render();
    
    var oldAlpha = Context.globalAlpha;
    var oldFillStyle = Context.fillStyle;
    
    Context.globalAlpha = this.alpha / 255;
    Context.fillStyle = "#000000";
    Context.fillRect(0, 0, 400, 300);
    Context.globalAlpha = oldAlpha;
    Context.fillStyle = oldFillStyle;
}

TransitionFadeIn.prototype.Update = function(){
    this.alpha += this.delay;
    if(this.alpha >= 255)
        ChangeGameState(this.nextState);
}