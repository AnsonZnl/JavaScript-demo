/**
 * Created by asus on 2017/10/22.
 */
//    home js
var main_h2=document.querySelector('.main-tle>h2');
var main_div1_h3=document.querySelector('.main-div1>a>h3');
var main_div1_p=document.querySelector('.main-div1>p');
var main_div2_h3=document.querySelector('.main-div2>a>h3');
var main_div2_p=document.querySelector('.main-div2>p');
var main_div3_h3=document.querySelector('.main-div3>a>h3');
var main_div3_p=document.querySelector('.main-div3>p');
var you=document.querySelector('.you');
var zuo=document.querySelector('.zuo');
var main_ul=document.getElementById('main_ul');
function qiehuan(){
    if(main_h2.innerHTML=='捉鬼游戏'){
        main_h2.innerHTML='杀人游戏';
        main_div1_h3.innerHTML='简化版';
        main_div2_h3.innerHTML='警版';
        main_div3_h3.innerHTML='3.0版';
        main_div1_p.innerHTML='有1314个用户正在玩此款游戏';
        main_div2_p.innerHTML='有1314个用户正在玩此款游戏';
        main_div3_p.innerHTML='有1314个用户正在玩此款游戏';
        main_ul.firstElementChild.className='main_li1';
        main_ul.lastElementChild.className='main_li2';
    }else{
        main_h2.innerHTML='捉鬼游戏';
        main_div1_h3.innerHTML='简化版';
        main_div2_h3.innerHTML='猜词版';
        main_div3_h3.innerHTML='白痴版';
        main_div1_p.innerHTML='有521个用户正在玩此款游戏';
        main_div2_p.innerHTML='有521个用户正在玩此款游戏';
        main_div3_p.innerHTML='有521个用户正在玩此款游戏';
        main_ul.firstElementChild.className='main_li2';
        main_ul.lastElementChild.className='main_li1';
    }
}
you.onclick=function(){
    qiehuan()
};
zuo.onclick=function(){
    qiehuan()
};
///*sryx_jianban_home  js
var sjbInp=document.getElementById('sjb_inp');
var qvfapai=document.getElementById('qvfapai');
function  sjbInpfun(){
    var sjh_ss_rs=document.getElementById('sjh_ss_rs');
    var sjh_pm_rs=document.getElementById('sjh_pm_rs');
    if(4>sjbInp.value){
        sjh_ss_rs.innerHTML='';
        sjh_pm_rs.innerHTML='';
    }else if(6>=sjbInp.value){
        sjh_ss_rs.innerHTML='1';
        pm1=(sjbInp.value)-1;
        sjh_pm_rs.innerHTML=pm1;
    }else if(8>=sjbInp.value){
        sjh_ss_rs.innerHTML='2';
        pm2=(sjbInp.value)-2;
        sjh_pm_rs.innerHTML=pm2;
    }else if(10>=sjbInp.value){
        sjh_ss_rs.innerHTML='3';
        pm2=(sjbInp.value)-3;
        sjh_pm_rs.innerHTML=pm2;
    }else if(12>=sjbInp.value){
        sjh_ss_rs.innerHTML='4';
        pm2=(sjbInp.value)-4;
        sjh_pm_rs.innerHTML=pm2;
    }else if(15>=sjbInp.value){
        sjh_ss_rs.innerHTML='5';
        pm2=(sjbInp.value)-5;
        sjh_pm_rs.innerHTML=pm2;
    }else if(18>=sjbInp.value){
        sjh_ss_rs.innerHTML='6';
        pm2=(sjbInp.value)-6;
        sjh_pm_rs.innerHTML=pm2;
    }else{
        sjh_ss_rs.innerHTML='';
        sjh_pm_rs.innerHTML='';
        alert('请输入正确的玩家数量');
    }
}
sjbInp.onkeyup=function(){
    sjbInpfun();
};
qvfapai.onclick=function(){
    qvFaPai()
};
function qvFaPai(){
    var reg= /^([4-9]|1[0-8])$/;
    if(reg.test(sjbInp.value)){
        alert('点击开始');
    }else{
        alert('请输入正确的玩家数量');
    }
}
