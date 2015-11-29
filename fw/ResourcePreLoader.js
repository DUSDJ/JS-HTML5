function ResourcePreLoader(){
    this.isLoadComplete = false;
    this.nowResourceLoadedCount = 0;
    this.intAllResourceCount = 0;
    this.arrResource = new Array();
    return this;
}

ResourcePreLoader.prototype.AddImage = function(fileName){
    for(var i=0; i<this.arrResource.length; i++){
        if(this.arrResource[i].name == fileName){
            debugSystem.Log("WARN", "overlap resource"+fileName);
            return;
        }
    }
    
    var img = new Image();
    img.src = fileName;
    img.addEventListener("load", onLoadImageResourceComplete, false);
    this.arrResource.push({name:fileName, image:img});
    this.intAllResourceCount++;
    debugSystem.Log("LOG", "add "+fileName);
}

ResourcePreLoader.prototype.GetImage = function(fileName){
    for(var i=0; i<this.arrResource.length; i++){
        if(this.arrResource[i].name == fileName){
            debugSystem.Log("LOG", "get"+fileName)
            return this.arrResource[i].image;
        }
    }
    debugSystem.Log("ERROR", "can't find resource"+fileName);
    return null;
}


var resourcePreLoader = new ResourcePreLoader();

function onLoadImageResourceComplete(){
        resourcePreLoader.nowResourceLoadedCount++;
        if(resourcePreLoader.nowResourceLoadedCount >= resourcePreLoader.intAllResourceCount)
            resourcePreLoader.isLoadComplete = true;
}

function LoadingState(){
    return this;
}

LoadingState.prototype.Render = function(){
    var theCanvas = document.getElementById("GCanvas");
    var Context = theCanvas.getContext("2d");
    
    var totalResourceCount = resourcePreLoader.intAllResourceCount;
    var nowCompleteResourceCount = resourcePreLoader.nowResourceLoadedCount;
    
    Context.fillStyle = "#ffffff"
    Context.fillText("Now Loading..."+nowCompleteResourceCount + "/" + totalResourceCount, 160, 100);
}

LoadingState.prototype.Update = function(){
    if(resourcePreLoader.isLoadComplete == true)
        ChangeGameState(after_loading_state);
}