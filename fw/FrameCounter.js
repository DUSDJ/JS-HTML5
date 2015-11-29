function FrameCounter(){
    this.lastFps = 0;
    this.frameCount = 0;
    this.lastTime = 0;
    
    return this;
}

FrameCounter.prototype.countFrame = function(){
    this.frameCount++;
    var tmpDate = new Date();
    
    if(this.lastTime + 1000 < tmpDate.getTime()){
        this.lastFps = this.frameCount;
        this.frameCount = 0;
        this.lastTime = tmpDate.getTime();
    }
    
    delete tmpDate.getTime(); //is it right?
    
}

var frameCounter = new FrameCounter();