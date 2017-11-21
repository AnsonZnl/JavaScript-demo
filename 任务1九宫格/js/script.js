/**
 * Created by asus on 2017/10/19.
 */
var start=document.querySelector('.start');
var finish=document.querySelector('.finish');
var li=document.querySelectorAll('li');
var time;
start.onclick=function(){//开始
    clearInterval(time);//在开始前停止一下定时器,防止多次点击加速bug
    time=setInterval(function(){//开始定时器
        for(var l=0;l<li.length;l++){//开始前默认颜色
            li[l].style.backgroundColor='';
        }
        one();//调用
    },1000);
};
finish.onclick=function(){//结束
    for(var l=0;l<li.length;l++){
        li[l].style.backgroundColor='';//结束后默认颜色
    }
    clearInterval(time);//结束定时器
};
function one(){
    n=Math.floor(Math.random()*9);//取0-8的随机数
    i=Math.floor(Math.random()*9);//取0-8的随机数
    j=Math.floor(Math.random()*9);//取0-8的随机数
    if(n!=i&&n!=j&&i!=n&&i!=j&&j!=n&&j!=i){
        bg1="rgb(0"+n+i+", 0"+i+j+", 0"+j+n+")";
        bg2="rgb(1"+n+i+", 1"+i+j+", 1"+j+n+")";
        bg3="rgb(2"+n+i+", 2"+i+j+", 2"+j+n+")";
        li[n].style.backgroundColor=bg1;
        li[i].style.backgroundColor=bg2;
        li[j].style.backgroundColor=bg3;
    }else{
        li[2].style.backgroundColor=bg1;
        li[3].style.backgroundColor=bg2;
        li[5].style.backgroundColor=bg3;
    }
}
