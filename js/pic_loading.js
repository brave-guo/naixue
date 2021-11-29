window.onload = function () {
    function load() {
        //滑动的高度
        var scrollH = window.pageYOffset;
        //获取所有加了images类名的需要懒加载的图片
        var images = document.getElementsByClassName('images');
        for (var i = 0; i < images.length; i++) {
            // && images[i].getAttribute('data-realUrl') 防止重复加载
            if (scrollH >= images[i].offsetTop - 1000 && images[i].getAttribute('data-realUrl')) {
                //启动懒加载  替换图片
                var realUrl = images[i].getAttribute('data-realUrl');
                images[i].src = realUrl;

                //防止持续的加载已加载图片 所以已加载的图片 data-realUrl属性删除
                images[i].removeAttribute('data-realUrl');
            }
        }
        // console.log(scrollH);

    }
    load();
    window.onscroll = load;

}