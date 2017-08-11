/**
 * Created by Administrator on 2017/6/18.
 */
var oDetail=document.getElementById("detail");
var tLeft=oDetail.getElementsByClassName("left");
var sPic=tLeft.getElementsByClassName("others");

var aLeft=document.getElementById("left");
var aRight=document.getElementById("right");

var lPic=tLeft.getElementsByClassName("large-pic");
var pSelect=sPic.getElementsByTagName("img");

var nowIndex=0;

aRight.onclick=aLeft.onclick=function(){
    if(this==aRight){
        nowIndex++;
        if(nowIndex==pSelect.length){
            nowIndex=0;
        }
    }
    else{
        nowIndex--;
        if(nowIndex==-1){
            nowIndex=pSelect.length-1;
        }
    }
    changeImg();
};

aRight.onselectstart=aLeft.onselectstart=function(){
    return false;
};

function changeImg(){
    for(var i=0;i<pSelect.length;i++){
        pSelect[nowIndex]=i;
        for(var j=0;j<pSelect.length;j++){
            pSelect[j].className="";
        }
        pSelect[nowIndex].className="select";
        lPic.style.src=pSelect[nowIndex].style.src;
    }
};

for(var i=0;i<pSelect.length;i++){
    pSelect[i].index=i;
    pSelect[i].onclick=function(){
        nowIndex=this.index;
        changeImg();
    };
    pSelect[nowIndex].onselectstart=function(){
        return false;
    };
}











