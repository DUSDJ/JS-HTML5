window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function InputSystem(){
    this.mouseX = 0;
    this.mouseY = 0;
    this.isKeyPressed = [];
    
    return this;
}

InputSystem.prototype.isKeyDown = function(keyCode){
    if(this.isKeyPressed[keyCode] == true)
        return true;
    else
        return false;
}

function onMouseMove(e){
    var theCanvas = document.getElementById("GCanvas");
    inputSystem.mouseX = e.clientX - theCanvas.offsetLeft;
    inputSystem.mouseY = e.clientY - theCanvas.offsetTop;
}

function onKeyDown(e){
    inputSystem.isKeyPressed[e.keyCode] = true;
}

function onKeyUp(e){
    inputSystem.isKeyPressed[e.keyCode] = false;
}

var inputSystem = new InputSystem();