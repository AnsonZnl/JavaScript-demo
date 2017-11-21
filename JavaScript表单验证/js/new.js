/**
 * Created by asus on 2017/10/18.
 */
//   <!--验证用户名-->
var uname=document.querySelector('.uname>input');
var namePtxt=document.querySelector('.uname>p');
uname.onfocus=function(){//获取焦点时
    namePtxt.style.color='#000';
    namePtxt.innerHTML="支持中文、字母、数字的2-18个字符";
    namePtxt.style.background="url('img/sprite.png') left 4px no-repeat";
};
//失去焦点 函数
function unameBlur(){
    var reg=/^[\u4e00-\u9fa5_a-zA-Z0-9]{2,18}$/;//\u4e00-\u9fa5 （汉字）  _(拼接)
    if(reg.test(uname.value)){
        namePtxt.innerHTML="对了";
        namePtxt.style.color='#6cbe1f';
        namePtxt.style.background="url('img/sprite.png') left -9px no-repeat";
        uname.style.border='solid 1px #6cbe1f';
        return  true;//验证通过返回 一个true  给最后点击提交时做准备  最后都返回true（通过）才通过
    }else{
        namePtxt.innerHTML="格式错误,支持中文、字母、数字的2-18个字符";
        namePtxt.style.color='red';
        namePtxt.style.background="url('img/sprite.png') left -24px no-repeat";
        uname.style.border='solid 1px red';
        return false;//验证不通过返回 一个false  给最后点击提交时做准备
    }
}
uname.onblur=function(){//失去焦点时执行函数 键盘松开
    unameBlur()
};

//    验证密码
var pwd=document.querySelector('.pwd>input');
var pwdPtxt=document.querySelector('.pwd>p');
pwd.onfocus=function(){//获取焦点时
    pwdPtxt.innerHTML='建议使用字母.数字长度为6~18位字符';
    pwdPtxt.style.color='#000';
    pwdPtxt.style.background="url('img/sprite.png') left 4px no-repeat";
};
//   失去焦点 函数
function pwdBlur(){
    var reg=/^[a-zA-Z0-9]{6,18}$/;
    if(reg.test(pwd.value)){
        pwdPtxt.innerHTML="对了";
        pwdPtxt.style.color='#6cbe1f';
        pwdPtxt.style.background="url('img/sprite.png') left -9px no-repeat";
        pwd.style.border='solid 1px #6cbe1f';
        return  true;//验证通过返回 一个true  给最后点击提交时做准备  最后都返回true（通过）才通过
    }else{
        pwdPtxt.innerHTML="格式错误,支持中文、字母、数字的6-18个字符";
        pwdPtxt.style.color='red';
        pwdPtxt.style.background="url('img/sprite.png') left -24px no-repeat";
        pwd.style.border='solid 1px red';
        return false;//验证不通过返回 一个false  给最后点击提交时做准备
    }
}
pwd.onblur=function(){//失去焦点时 执行
    pwdBlur();//调用
};
//验证确认密码
var repwd=document.querySelector('.repwd>input');
var repwdPtxt=document.querySelector('.repwd>p');
repwd.onfocus=function(){//获取焦点时
    repwdPtxt.innerHTML='再次输入密码';
    repwdPtxt.style.color='#000';
    repwdPtxt.style.background="url('img/sprite.png') left 4px no-repeat";
};
//    失去焦点 函数
function repwdBlur(){
    if(pwd.value==repwd.value){
        repwdPtxt.innerHTML="两次输入一致";
        repwdPtxt.style.color='#6cbe1f';
        repwdPtxt.style.background="url('img/sprite.png') left -9px no-repeat";
        repwd.style.border='solid 1px #6cbe1f';
        return  true;//验证通过返回 一个true  给最后点击提交时做准备  最后都返回true（通过）才通过
    }else {
        repwdPtxt.innerHTML="两次输入不一致";
        repwdPtxt.style.color='red';
        repwdPtxt.style.background="url('img/sprite.png') left -24px no-repeat";
        repwd.style.border='solid 1px red';
        return false;//验证不通过返回 一个false  给最后点击提交时做准备
    }
}
repwd.onblur=function(){//失去焦点 时
    repwdBlur();//调用
};
//    验证邮箱
var uemil=document.querySelector('.uemil>input');
var uemilPtxt=document.querySelector('.uemil>p');
uemil.onfocus=function (){//获取焦点时
    uemilPtxt.innerHTML='请输入电子邮箱';
    uemilPtxt.style.color='#000';
    uemilPtxt.style.background="url('img/sprite.png') left 4px no-repeat";
};
//    失去焦点 函数
function uemilBlur(){
    var reg=/^[0-9a-zA-Z]+@[0-9a-zA-Z]{2,4}\.(com||cn)$/;
    if(reg.test(uemil.value)){
        uemilPtxt.innerHTML="可以";
        uemilPtxt.style.color='#6cbe1f';
        uemilPtxt.style.background="url('img/sprite.png') left -9px no-repeat";
        uemil.style.border='solid 1px #6cbe1f';
        return  true;//验证通过返回 一个true  给最后点击提交时做准备  最后都返回true（通过）才通过
    }else {
        uemilPtxt.innerHTML="请输入正确的电子邮箱格式";
        uemilPtxt.style.color='red';
        uemilPtxt.style.background="url('img/sprite.png') left -24px no-repeat";
        uemil.style.border='solid 1px red';
        return false;//验证不通过返回 一个false  给最后点击提交时做准备
    }
}
uemil.onblur=function(){//失去焦点 时
    uemilBlur();//调用
};
//验证手机号
var phone=document.querySelector('.phone>input');
var phonePtxt=document.querySelector('.phone>p');
phone.onfocus=function(){
    phonePtxt.innerHTML='请输入手机号码';
    phonePtxt.style.color='#000';
    phonePtxt.style.background="url('img/sprite.png') left 4px no-repeat";
};
function phoneBlur(){
    var reg=/^1[3578][0-9]{9}$/;
    if (reg.test(phone.value)){
        phonePtxt.innerHTML="可以";
        phonePtxt.style.color='#6cbe1f';
        phonePtxt.style.background="url('img/sprite.png') left -9px no-repeat";
        phone.style.border='solid 1px #6cbe1f';
        return  true;//验证通过返回 一个true  给最后点击提交时做准备  最后都返回true（通过）才通过
    }else{
        phonePtxt.innerHTML="请输入正确的手机号码";
        phonePtxt.style.color='red';
        phonePtxt.style.background="url('img/sprite.png') left -24px no-repeat";
        phone.style.border='solid 1px red';
        return false;//验证不通过返回 一个false  给最后点击提交时做准备
    }
}
phone.onblur=function(){
    phoneBlur();
};
//验证 验证码是否正确
var test=document.querySelector('.test>input');
var testBtn=document.querySelector('.test>button');
var testPtxt=document.querySelector('.test>p');

test.onfocus=function(){//获取焦点时
    testPtxt.innerHTML='请输入验证码';
    testPtxt.style.color='#000';
    testPtxt.style.background="url('img/sprite.png') left 4px no-repeat";
    return false;
};
var num;//num
function testBlur(){//失去焦点
    if (test.value==num){
        testPtxt.innerHTML="验证码正确";
        testPtxt.style.color='#6cbe1f';
        testPtxt.style.background="url('img/sprite.png') left -9px no-repeat";
        test.style.border='solid 1px #6cbe1f';
        return  true;//验证通过返回 一个true  给最后点击提交时做准备  最后都返回true（通过）才通过
    }else{
        testPtxt.innerHTML="验证码不正确";
        testPtxt.style.color='red';
        testPtxt.style.background="url('img/sprite.png') left -24px no-repeat";
        test.style.border='solid 1px red';
        return false;//验证不通过返回 一个false  给最后点击提交时做准备
    }
}
test.onblur=function(){//失去焦点时
    testBlur();//调用
};
//    点击按钮声成一个4位随机数
var time;
function math(){
    var t=6;
//        num=Math.floor(Math.random()*(9999-1000)+1)+1000;
    num=Math.random().toFixed(4).slice(2);
    alert(num);
    testBtn.innerHTML=t--;//btn点击后的倒计时
    testBtn.disabled='disabled';//btn 不可点击
    time=setInterval(
        function (){
            if (t>0){
                testBtn.innerHTML=t--;//btn点击后的倒计时
                testBtn.disabled='disabled';//btn 不可点击
            }else{
                clearInterval(time);
                testBtn.innerHTML='获取验证码';
                testBtn.disabled='';//还原
            }
        },1000
    );
}
testBtn.onclick=function(){
    math();//调用弹窗验证码
};
//勾选协议
var chk=document.getElementById('chk');
function che(){
    if(chk.checked){
        return true;
    }else {
        return false;
    }
}
//    点击注册 实现注册功能
var tijiao=document.getElementById('tijiao');

tijiao.onclick=function(){
        if(!unameBlur()||!phoneBlur()||!repwdBlur()||!uemilBlur()||!phoneBlur()||!testBlur()){
            alert('请确认信息是否完好');
            return false;
        }else if(!che()){
            alert('请勾选协议');
        }else{
            alert('注册成功');
            location.href='http://baidu.com';
        }
            };
//重置功能
var chongzhi=document.getElementById('chongzhi');
chongzhi.onclick=function(){
    uname.value='';
    uemil.value='';
    pwd.value='';
    repwd.value='';
    uemil.value='';
    phone.value='';
    test.value='';
};
