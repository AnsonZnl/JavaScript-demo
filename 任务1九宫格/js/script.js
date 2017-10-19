/**
 * Created by asus on 2017/10/19.
 */
var start=document.querySelector('.start');
var finish=document.querySelector('.finish');
var li=document.querySelectorAll('li');
start.onclick=function(){
    var time=setInterval(function(){
        n=Math.floor(Math.random()*9);//取0-8的随机数
        i=Math.floor(Math.random()*9);//取0-8的随机数
        j=Math.floor(Math.random()*9);//取0-8的随机数
        bg1="rgb("+n+i+", "+i+j+", "+j+n+")";
        bg2="rgb(1"+n+i+", 1"+i+j+", 1"+j+n+")";
        bg3="rgb(2"+n+i+", 2"+i+j+", 2"+j+n+")";
        li[n].style.background=bg1;
        li[i].style.background=bg2;
        li[j].style.background=bg3;
    },500);
    var times=setInterval(
        function (){
            li[n].style.background='';
            li[i].style.background='';
            li[j].style.background='';
        },500)
};
