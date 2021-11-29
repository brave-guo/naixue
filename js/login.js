// var login = document.getElementsByClassName('header_nx')[0];
// console.log(login);
// login.onclick = ()=>{

// }

var btn1 = document.getElementById('login');
var btn2 = document.getElementById('reg');
var login_dl = document.getElementsByClassName('login_dl')[0];
var isrem = document.getElementById('isrem');
var label_ = isrem.parentElement.children[1];
var login_a = isrem.parentElement.children[2];
// console.log(login_a);
var username = document.getElementById('username');
var psd = document.getElementById('psd');

// console.log(username);
// todo 注册按钮的移入移出事件
btn2.onmouseenter = () => {
    login_dl.style.transform = 'scale(1)';
    isrem.parentElement.children[0].style.opacity = '0';
    isrem.parentElement.children[1].style.opacity = '0';
    isrem.parentElement.children[2].style.opacity = '0';
}
btn2.onmouseleave = () => {
    login_dl.style.transform = 'scale(0)';
    isrem.parentElement.children[0].style.opacity = '1';
    isrem.parentElement.children[1].style.opacity = '1';
    isrem.parentElement.children[2].style.opacity = '1';

}

// todo 登录按钮的移入事件
btn1.onmouseenter = () => {
    login_dl.style.transform = 'scale(1)';
}


// todo 记住密码
if (localStorage.getItem('isremember')) {
    username.value = localStorage.getItem('username');
    psd.value = localStorage.getItem('password');
    isrem.checked = localStorage.getItem('isremember');
}
btn1.onclick = () => {

    if (isrem.checked) {
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', psd.value);
        localStorage.setItem('isremember', isrem.checked);

    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('isremember');

    }

    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp');

    ajax.open('post', 'http://127.0.0.1:3001/user');

    request = 'act=login&user=' + username.value + '&pass=' + psd.value;
    ajax.send(request);
    // console.log(request);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                console.log(ajax.responseText);
            } else {
                console.log('获取失败');
            }
        }
    }
}

// todo ajax请求登录数据
btn2.onclick = () => {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Micosoft.XMLHttp');

    ajax.open('post', 'http://127.0.0.1:3001/user');

    request = 'act=reg&user=' + username.value + '&pass=' + psd.value;

    ajax.send(request);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                console.log(ajax.responseText);
            } else {
                console.log('注册失败')
            }
        }
    }
}


var show = document.getElementsByClassName('nx_login')[0];
var logo = document.getElementsByClassName('header_nx')[0];
// todo 点击logo显示菜单
logo.onclick = () => {
    show.style.transform = 'translateX(0)';
}

// todo 点击菜单弹出第二页
var menu_ = document.getElementById('menu_');
var second_menu = document.getElementsByClassName('nx_login_menu')[0];
// console.log(second_menu);
menu_.onclick = () => {
    second_menu.style.transform = 'scale(1)';
}
// todo 点击关闭菜单
var first_close = document.getElementById('close_first_menu');
first_close.onclick = () => {
    show.style.transform = 'translateX(-100%)';
}

// todo 点击关闭菜单第二页
var second_close = document.getElementById('close_second_menu');
second_close.onclick = () => {
    second_menu.style.transform = 'scale(0)';
}


