function postaction() {
    var title = document.getElementById("title");
    if (title.value == "") {
        alert("请输入内容");
    } else {
        var data = loadData(); //定义一个对象data把用户加载的数据赋值给它
        var todo = {
            "title": title.value,
            "done": false
        };
        //使用JSON的形式来表示todo对象
        //（todo具有title和done属性）
        //第一个属性用于存储用户输入的数据 
        //第二个属性初始化用户输入的数据属性，以便对用户待办事项进行分类 

        data.push(todo); //push方法向数组的末尾添加一个或者多个元素
        //添加用户再次输入的数据
        saveData(data); //存储数据
        var form = document.getElementById("form");
        form.reset(); //重置表单
        load(); //向页面添加数据
    }
}

//加载获取用户输入的数据
function loadData() {
    var collection = localStorage.getItem("todo"); //读取todo（json对象）对象的数据
    if (collection != null) {
        return JSON.parse(collection); //在collection中解析出JSON对象
        //（"title":title.value,"done":false）
    } else return []; //不解析，就直接返回空值
}

function saveSort() {
    var dolist = document.getElementById("dolist");
    var ds = donelist.getElementsByTagName("p"); //定义ds对象将要做的事赋值给它
    var data = []; //初始化用户加载的数据
    for (i = 0; i < ds.length; i++) {
        var todo = {
            "title": ds[i].innerHTML,
            "done": false
        }; //加载将要做的事
        data.unshift(todo); //unshift方法可向数组的开头添加一个或多个元素并返回新的长度
    }
    //在TODO添加新的任务
    saveData(data);
}

  
function saveData(data) { 
    //console.log(localStorage);
    localStorage.setItem("todo", JSON.stringify(data)); //存储todo对象的数据并解析出字符串
   // console.log(localStorage);
} //JSON.stringify用于从一个对象解析出字符串
//JS对象转换成JSON对象存进本地缓存


/*删除相应项，并加载*/
function remove(i) {
    var data = loadData(); //定义一个对象data把用户加载的数据赋值给它
    var todo = data.splice(i, 1)[0];
    //splice()方法数组用于插入，删除或替换数组的元素，返回被删除的项目
    //arrayObject.splice(index,howmany,elementx)
    //第一个参数必选，是开始插入或删除的数组元素下标，必须是数字
    //第二个必选，要删除的数量，规定应该删除多少元素，未规定则删除数组所有元素
    //第三个可选，在参数1的位置处增加一个或多个的项目，返回值是要删除的元素
    saveData(data); //存储更改完的数据
    load(); //更新列表
}

/*将数组todo相应项的属性（“title”或“done”）进行更新，并加载*/
function update(i, field, value) {
    var data = loadData(); //定义一个对象data把用户加载的数据赋值给它
    var todo = data.splice(i, 1)[0]; //用于插入，删除或替换数组的元素，返回被删除的项目
    todo[field] = value; //将用户传过来的参数赋值给todo[field]数组field代表todo数组的内容
    //field是领域的意思
    data.splice(i, 0, todo); //删除已经完成的项目
    saveData(data); //存储更改完的数据
    load(); //更新列表
}

/*将可编辑表单控件插入段落中，
并将用户输入的值通过update函数对todolist数组里存储的数据进行更新*/

function edit(i) {
    load(); //更新列表
    var p = document.getElementById("p-" + i); //获取添加的p标签,id='p-"+i+"'
    title = p.innerHTML; //获取id='p-"+i+"'d的对象的内嵌内容
    p.innerHTML = "<input id='input-" + i + "' value='" + title + "' />";
    //插入id='p-"+i+"'d的对象的内嵌内容
    var input = document.getElementById("input-" + i); //获取添加的input标签,id='input-"+i+"'
    input.setSelectionRange(0, input.value.length);
    //该方法可以从一个被focused的 <input>元素中选中特定范围的内容
    //第一个元素起点，第二个元素终点
    input.focus(); //获得焦点
    input.onblur = function () {
        if (input.value.length == 0) { //如果input里的元素为空
            p.innerHTML = title; //把title赋值给它
            alert("请输入内容"); //提醒
        } else {
            update(i, "title", input.value); //更新加载
        }
    };
}

/*function create(){
    var data=JSON.parse(collection);
    var doCount=0;    //初始化todo计数
        var doString="";  
    if(data[i].done){
               doString+="<li id='haddone' class='completed' draggable='true'><input type='checkbox' onchange='update("+i+",\"done\",false)' checked='checked' />"
                +"<p id='p-"+i+"' onclick='edit("+i+")'>"+data[i].title+"</p>"
                +"<a href='javascript:remove("+i+")'><i class='iconfont'>&#xe69a;</i></a></li>"; 
            }
            else{
                doString+="<li id='havetodo' draggable='true'><input type='checkbox' onchange='update("+i+",\"done\",true)' />"
                +"<p id='p-"+i+"' onclick='edit("+i+")'>"+data[i].title+"</p>"
                +"<a href='javascript:remove("+i+")'><i class='iconfont'>&#xe69a;</i></a></li>";
                doCount++;
            }
}*/

/*将输入的数据添加至dom节点，并且根据输入数据属性("done")的值进行分类。*/
function load() {
    var dolist = document.getElementById("dolist");
    var collection = localStorage.getItem("todo"); //定义collection对象为读取"todo"里的数据
    //读取todo（json对象）对象的数据
    //如果数据不为空,解析数据然后加载数据
    if (collection != null) {
       // console.log(collection);
        var data = JSON.parse(collection); //在collection中解析出JSON对象
        var doCount = 0; //初始化todo计数
        var doString = ""; //初始化do事件
        for (var i = data.length - 1; i >= 0; i--) {
            if (data[i].done) {
                doString += "<li id='haddone' class='completed' draggable='true'><input type='checkbox' onchange='update(" + i + ",\"done\",false)' checked='checked' />" +
                    "<p id='p-" + i + "' onclick='edit(" + i + ")'>" + data[i].title + "</p>" +
                    "<a href='javascript:remove(" + i + ")'><i class='iconfont'>&#xe69a;</i></a></li>";
            } else {
                doString += "<li id='havetodo' draggable='true'><input type='checkbox' onchange='update(" + i + ",\"done\",true)' />" +
                    "<p id='p-" + i + "' onclick='edit(" + i + ")'>" + data[i].title + "</p>" +
                    "<a href='javascript:remove(" + i + ")'><i class='iconfont'>&#xe69a;</i></a></li>";
                doCount++;
            }

        };
        docount.innerHTML = doCount; //插入数据
        dolist.innerHTML = doString; //插入数据

    }
    //如果为空则插入数据为0
    else {
        docount.innerHTML = 0;
        dolist.innerHTML = "";

    }

    var btns = document.getElementsByTagName("a");
    var all = document.getElementById("all");
    var active = document.getElementById("active");
    var completed = document.getElementById("completed");
    var clear = document.getElementById("clear");
    var todo = document.getElementById("todo");

    for (var i = 0; i < btns.length; i++) {
        var haddone = document.getElementById("haddone");
        var havetodo = document.getElementById("havetodo");

        btns[i].onclick = function () {
            for (var i = 0; i < btns.length; i++) {
                btns[i].className = "";
            }
            this.className = "selected";
            if (this.id == "all") {
                var liAll =document.querySelectorAll('#dolist li');
                console.log(liAll)
                for(var i = 0;i < liAll.length;i ++) {
                    liAll[i].style.display = 'block';
                }
            }
                // todo.style.display = "block";
            else if (this.id == "active") {
                var dolist = document.getElementById("dolist");
                var count = dolist.childElementCount;
                console.log(dolist)
                console.log(count)
                for (var i = 0; i < count; i++) {
                    var li = dolist.getElementsByTagName("li"); //获取行
                    console.log(typeof(li[i].className));
                    for(var i = 0;i < li.length;i++) {
                        if(li[i].className == 'completed') {
                            li[i].style.display = 'none';
                        }else {
                            li[i].style.display = 'block';
                        }
                    }
                    // var liCompleted = document.getElementsByClassName('completed');
                    // for(var i = 0;i < liCompleted.length;i++) {
                    //     if(liCompleted[i].className == 'com')
                    // }
                    // for (var i = data.length - 1; i >= 0; i--) {
                    // console.log(data.length)
                    // if (data[i].done) {
                    //     console.log(data[i])
                    //     console.log(li)
                    //     // break;
                    //     li.style.display = "none";
                    // } else {
                    // }
                    // }
                }
            } else if (this.id == "completed"){

                var dolist = document.getElementById("dolist");
                var count = dolist.childElementCount;
                console.log(dolist)
                console.log(count)
                for (var i = 0; i < count; i++) {
                    var li = dolist.getElementsByTagName("li"); //获取行
                    console.log(typeof(li[i].className));
                    for(var i = 0;i < li.length;i++) {
                        if(li[i].className == 'completed') {
                            li[i].style.display = 'block';
                        }else {
                            li[i].style.display = 'none';
                        }
                    }
                   
                }
            }
            
            }

    }

}

//如何清空已经完成的数据?
function clearcomplet() {
        var dolist = document.getElementById("dolist");
       var collection = localStorage.getItem("todo");
      // console.log(typeof collection);
       //console.log(collection);
       var data = JSON.parse(collection); //在collection中解析出JSON对象
       var arr = [];
       for (var i = 0; i < data.length; i++) {
       arr.push(data[i])
    }
       for (var j = 0; j < arr.length; j++) {
       if (arr[j].done == true) {
       console.log(arr[j]);
       console.log(j);
       arr.splice(j--, 1);
       }
          console.log(arr[j]);
 
       }
       localStorage.setItem('todo',JSON.stringify(arr));
      // console.log(localStorage);
       load();
       
       }
//页面全部加载完后加载load函数
window.onload = load;
/*一系列事件的监听*/
window.addEventListener("storage",load,false);
 