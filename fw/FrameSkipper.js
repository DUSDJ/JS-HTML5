function FrameSkipper(delay){
    this.timer = new Timer();
    this.delay = delay;
}

FrameSkipper.prototype.isWork = function(){
    if(this.timer.nowFrame > this.delay){
        this.timer.Reset();
        return this;
    }
    
    return false;
}