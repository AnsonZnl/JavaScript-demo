var clock =0;
var state=0;
var speed=4;
//初始化init,游戏开始
var start = document.getElementById("start");
start.onclick = function () {
        init();
}

var end=document.getElementById("end");
end.onclick=function () {
     location.reload(); //刷新当前文档,类似于浏览器上的刷新页面按钮。
}
//游戏开始
function init() {
    for(var i=0;i<4;i++){
        createrow();        //创建行；
    }
    var main=document.getElementById("main");
    main.onclick=function (event){
        judge(event);        //点击黑色方块；
        
    }
    clock=window.setInterval('move()',30);
}
//判断是否点击黑块事件
function judge(event) {
    if (event.target.className.indexOf('black') != -1) { //返回某个指定的字符串值在字符中首次出现的位置
        //如果要检索的字符串值没有出现则该方法返回-1
        event.target.className = 'cell';
        event.target.parentNode.pass = 1 //定义属性pass,表明此行row的黑块已经被点击
        score();
    }
}
//游戏失败
function fail() {
    clearInterval(clock);
    confirm('你的最终得分为' + parseInt(document.getElementById('score').innerHTML)); //confirm()方法用于显示一个带有指定消息和Ok及取消按钮的对话框
    var main=document.getElementById("main");
    main.onclick=function(event){
    }
    var start = document.getElementById("start");
    start.onclick = function () {
    }

}
//创建div
function creatediv(classname) {
    var div=document.createElement("div");
    div.className=classname;
    return div;
}
//创建一行classname为row，且有四个子节点为cell；
function createrow() {
    var con=document.getElementById("con");
    var row=creatediv(row);
    var cells=createcell(); //定义cell的类名 createcell()返回的是含有cell black的类名数组
    con.appendChild(row);

    for(var i=0;i<4;i++){
  row.appendChild(creatediv(cells[i])); //添加row的子节点4个cell

    }
    if(con.firstChild==null){
        con.appendChild(row);
    }else{
        con.insertBefore(row,con.firstChild);// insertBefore()方法可在已有的子节点前擦入一个新的子节点。
    }


}

//创建类名数组其中一个为 cell black；
function createcell() {
    var temp=['cell','cell','cell','cell']
    var i=Math.floor(Math.random()*4); //math.floor 返回小于等于数字参数的最大值，对数字进行下舍入，返回的是一个整数
    //math.random（）随机数返回一个大于等于0小于1的一个随机数 ,此处随机产生0到3的shu
    temp[i]='cell black';
    return temp;
}
function move(){
     var con=document.getElementById("con");
     var Top=parseInt(window.getComputedStyle(con,null)['top']);//第二个属性为伪类一般用不着此时为Null;
     //getComputedStyle 是一个可以获取（行间非行间）样式当前元素所以最终使用的css属性，返回的是一个css样式声明对象 只读，
     //而style是只能获取行间的样式
    if(speed+Top>0){ //一次走4像素
        Top=0;
    }else{
        Top+=speed;
    }
    con.style.top=Top+"px";
    if(Top==0){
        createrow();
        con.style.top=-100+'px';
        delrow();
    }else if(Top==(-100+speed)){
        var rows=con.childNodes;
        if((rows.length==5) && (rows[rows.length-1].pass !==1)){ 
            fail();
        }
    }
}
var con=document.getElementById("con");
 var t= parseInt(window.getComputedStyle(con,null)['top']);
 console.log(t);
 var rows=con.childNodes;
 console.log(rows);
 console.log(rows.length);
 function speedup(){
     speed+=2;
     if(speed==20){
         alert("你特么真是神速");
     }
 }
 //删除某行
 function delrow() {
     var con = document.getElementById("con");
     if (con.childNodes.length == 6) {
         con.removeChild(con.lastChild);
     }
 }

 //记分
 function score() {
     var score = document.getElementById("score");
     var newscore=parseInt(score.innerHTML)+1;
     score.innerHTML=newscore;
     if(newscore %10==0){
         speedup();
     }
 }