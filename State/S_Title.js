function TitleState(){
    this.imgDummy = resourcePreLoader.GetImage("img/dummy.png");
    this.text = "Press Enter";
    return this;
}

TitleState.prototype.Render = function(){
    var theCanvas = document.getElementById("GCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgDummy, 0, 0);
    Context.fillText(this.text, 140, 150);
}

TitleState.prototype.Update = function(){
    if(inputSystem.isKeyDown(13)){
        this.text = "Yes";
    }
}
