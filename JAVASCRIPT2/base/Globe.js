var Globe = function(div, size, x, y, color, newGlobeName) {
    if(typeof div == "string") {
        this.div = document.getElementById(div);
    }else{
        this.div = div;
    }
    // Doit créer une nouvelle div
    if(newGlobeName){
        var tmp = document.createElement("div");
        this.div.appendChild(tmp);
        this.div = tmp;
        if(typeof newGlobeName == "string"){
            this.div.id = newGlobeName;
        }
    }
    this.div.object = this;

    this.posX = 0;
    this.posY = 0;

    this.div.style.width  = size+"px";
    this.div.style.height = size+"px";
    this.div.style.backgroundColor = color;

    this.div.style.position = "absolute";
    this.div.style.top = x+"px";
    this.div.style.left = y+"px";
    this.div.style.cursor = "move";
    this.div.style.borderRadius = "50%";


    // Doit être appelé depuis une instance de Globe
    this.move = function(event){
        //console.log("move"+event);
        this.posX += event.movementX;
        this.posY += event.movementY;
    };
    // Doit être appelé depuis l'élément du dom
    this.grab = function(event){
        // Evite le drag & drop par défaut
        event.preventDefault ? event.preventDefault() : event.returnValue = false;

        console.log("grab "+this.id);
        this.object.posX = this.offsetLeft;
        this.object.posY = this.offsetTop;
        Globe.toMove = this.object;
        document.addEventListener("mousemove", Globe.mouseMoveListener);
        Globe.startRefresh();
    };
    // Doit être appelé depuis l'élément du dom
    this.release = function(event){
        console.log("release"+event);
        document.removeEventListener("mousemove", Globe.mouseMoveListener);
        Globe.stopRefresh();
        Globe.refresh();
        Globe.toMove = null;
    };

    this.div.onmousedown = this.grab;
    this.div.onmouseup = this.release;
};
Globe.toMove = null;
Globe.mouseMoveListener = function(event){
    if(Globe.toMove){
        Globe.toMove.move(event);
    }
};
// Eviter que ça parte en nawak si on sort de la fenêtre
document.addEventListener("click", function(){Globe.toMove = null;});

Globe.refreshFrequency = 30;
Globe.refreshInterval = null;
Globe.startRefresh = function(){
    Globe.stopRefresh();
    Globe.refreshInterval = setInterval(Globe.refresh, Globe.refreshFrequency);
};
Globe.stopRefresh = function(){
    clearInterval(Globe.refreshInterval);
};
Globe.refresh = function(toRefresh){
    if(!toRefresh)
        toRefresh = Globe.toMove;

    if(toRefresh) {
        toRefresh.div.style.left = toRefresh.posX+"px";
        toRefresh.div.style.top = toRefresh.posY+"px";
    }
};