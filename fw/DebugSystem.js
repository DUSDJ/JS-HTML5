function DebugSystem(){
    this.debugMode = false;
    this.useAlert = false;
    return this;
}

DebugSystem.prototype.Log = function(type, msg){
    if(this.debugMode == false)
    return;
    
    if(typeof console == "undefined")
    return;
    
    switch (type) {
        case 'LOG':
            console.log(msg);
            break;
            
        case 'WARN':
            console.warn(msg);
            break;
            
        case 'ERROR':
            console.error(msg);
            break;
    }
}

DebugSystem.prototype.UseDebugMode = function(){
    /*global inputSystem*/
    if(inputSystem.isKeyDown(27) && inputSystem.isKeyDown(32)){
    this.debugMode = !this.debugMode;
    inputSystem.isKeyPressed[27] = !inputSystem.isKeyPressed[27]
    inputSystem.isKeyPressed[32] = !inputSystem.isKeyPressed[32]
    }
}

DebugSystem.prototype.Render = function(){
    var theCanvas = document.getElementById("GCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.fillStyle = "#ffffff";
    Context.font = "15px Arial";
    Context.textBaseline = "top";
    Context.fillText("fps : "+frameCounter.lastFps, 10, 10);
    Context.fillText("mouseX : "+inputSystem.mouseX, 10, 25);
    Context.fillText("mouseY : "+inputSystem.mouseY, 10, 45);
    Context.fillText("Key : "+inputSystem.isKeyPressed, 10, 60);
    
}

var debugSystem = new DebugSystem();