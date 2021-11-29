var menu_right_img = document.getElementsByClassName('menu_right_img');
for(let i in menu_right_img){
    // console.log(menu_right_img[i]);
    menu_right_img[i].onmouseenter = function(){
        this.style.opacity = '1';
        // console.log(this);
    }
    menu_right_img[i].onmouseleave = function(){
        this.style.opacity = '0.7';
        // console.log(this);
    }
}
