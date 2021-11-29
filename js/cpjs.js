var find = document.getElementById('find');
var diy = document.getElementById('diy');
var cold = document.getElementById('cold');
// console.log(cold);
window.onload = showData;

//todo 寻好茶的获取数据渲染
function showData() {
    diy.className = '';
    cold.className = '';
    find.className = 'cp_title_bg';

    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft XMLHTTP');
    ajax.open('get', './find.json');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                show(data.list);
            }
        }
    }
}
function show(list) {
    var str = '';
    for (var i of list) {
        str += '<li>';
        str += '<div>';
        str += '<img src="' + i.imgurl + '">';
        str += '</div>';
        str += '<p>' + i.note + '</p>';
        str += '</div>';

    }
    var ul = document.getElementsByClassName('list')[0];
    ul.innerHTML = str;
}

//todo 手作软欧包的获取数据渲染
function showData2() {
    find.className = '';
    cold.className = '';
    diy.className = 'cp_title_bg';

    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft XMLHTTP');
    ajax.open('get', './diy.json');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                show2(data.list);
            }
        }
    }
}
function show2(list) {
    var str = '';
    for (var i of list) {
        str += '<li>';
        str += '<div>';
        str += '<img src="' + i.imgurl + '">';
        str += '</div>';
        str += '<p>' + i.note + '</p>';
        str += '</div>';

    }
    var ul = document.getElementsByClassName('list')[0];
    ul.innerHTML = str;
}

//todo 手冷泡茶的获取数据渲染
function showData3() {
    find.className = '';
    diy.className = '';
    cold.className = 'cp_title_bg';
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft XMLHTTP');
    ajax.open('get', './cold.json');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                show3(data.list);
            }
        }
    }
}
function show3(list) {
    var str = '';
    for (var i of list) {
        str += '<li>';
        str += '<div>';
        str += '<img src="' + i.imgurl + '">';
        str += '</div>';
        str += '<p>' + i.note + '</p>';
        str += '</div>';

    }
    var ul = document.getElementsByClassName('list')[0];
    ul.innerHTML = str;
}
