/**
 * Created by asus on 2017/10/12.
 */
/**
 * Created by asus on 2017/10/12.
 */

//home.js
//轮播图
function change(){
    var p=0;
    var ul=document.getElementById('dgImg');
    p++;
    p=p==4?0:p;
    ul.style.marginLeft=p*-167+"px";
}
setInterval(change,2500);
//about.js
//点击下方出文字
var jsul=document.getElementById('js-ul').children;
var div1=document.getElementById('div1').children;
for (var i=0;i<jsul.length;i++){
    jsul[i].index=i;
    jsul[i].onclick=function(){
        var num=parseInt(this.index);
        for (var j=0;j<jsul.length;j++){
            div1[j].style.display='none';
        }
        div1[num].style.display='block'
    }

}
//photos.js
//点击换大图
var phdimg=document.getElementById('ph-dimg');
var phLiImg=document.querySelectorAll('li');
for(var i=0;i<phLiImg.length;i++){
    phLiImg[i].onclick=function(){
        imgsrc=this.firstChild.src;
        phdimg.src=imgsrc;
    }
}
//live.js
//滑动tr tr换背景颜色
var tbody=document.getElementById('live-tbody');
var tr=tbody.children;
for (var i=0;i<tr.length;i++){
    tr[i].onmouseout=function(){
        this.style.background=''
    };
    tr[i].onmouseover=function(){
        this.style.background='#f19700';
    };
}
//contact.js
//表单验证
var unamereg=/^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/;
var uemailreg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
var umesreg=/^\w+$/;
var uname=document.getElementById('uname');
var uemail=document.getElementById('uemail');
var umes=document.getElementById('umes');
var send=document.getElementById('send');
send.onclick=function(){
    if(unamereg.test(uname.value)==true&&uemailreg.test(uemail.value)==true&&umesreg.test(umes.value)){
        alert('提交成功')
    }else {
        alert('提交有误')
    }
};

