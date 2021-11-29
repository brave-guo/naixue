
var home_page = document.getElementsByClassName('home_page')[0];
var gynx = document.getElementsByClassName('gynx');
var cpjs = document.getElementsByClassName('cpjs');
var kjzs = document.getElementsByClassName('kjzs');

 
// console.log(gynx);
// 首页的页面刷新事件
home_page.onclick = ()=>{
    window.open("http://127.0.0.1:5500/naixue.html","_self");
}

// 跳转入关于奈雪页面
for(let i in gynx){
    gynx[i].onclick = ()=>{
        window.open("http://127.0.0.1:5500/gynx.html","_self");
    }
}

// 跳转入产品介绍页面
for(let i in cpjs){
    cpjs[i].onclick = ()=>{
        window.open("http://127.0.0.1:5500/cpjs.html","_self");
    }
}

// 跳转入空间展示页面
for(let i in kjzs){
    kjzs[i].onclick = ()=>{
        window.open("http://127.0.0.1:5500/kjzs.html","_self");
    }
}

