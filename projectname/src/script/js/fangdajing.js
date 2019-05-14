var Box = document.querySelector('.box');
var Sp = document.querySelector('.sp');
var Sf = document.querySelector('.sf');
var Bf = document.querySelector('.bf');
var Bp = document.querySelector('.bp');
//1当鼠标移动到小图时，小放和大放出现；
Sp.onmouseover = function() {
    Sf.style.display = 'block';
    Bf.style.display = 'block';
    //2计算求出小放的宽高（小放/小图=大放/大图）
    Sf.style.width = Sp.offsetWidth * Bf.offsetWidth / Bp.offsetWidth + 'px';
    Sf.style.height = Sp.offsetHeight * Bf.offsetHeight / Bp.offsetHeight + 'px';
    //4.求比例：比例>1  放大。
    var bili = Bp.offsetWidth / Sp.offsetWidth;
    //3.鼠标移动，小放跟随。并设置边界
    this.onmousemove = function(ev) {
        var ev = ev || window.event;

        var l = ev.clientX - Sf.offsetWidth;
        var t = ev.clientY - Sf.offsetHeight;

        if (l <= 0) {
            l = 0
                //大盒子的宽度减去移动盒子的宽度，为可以一定的最大范围。
        } else if (l >= Sp.offsetWidth - Sf.offsetWidth) {
            l = Sp.offsetWidth - Sf.offsetWidth
        }

        if (t <= 0) {
            t = 0
        } else if (t >= Sp.offsetHeight - Sf.offsetHeight) {
            t = Sp.offsetHeight - Sf.offsetHeight
        }
        Sf.style.left = l + 'px';
        Sf.style.top = t + 'px';
        //5通过改变大图的位置实现与小放的实时跟随。
        Bp.style.left = -l * bili + 'px';
        Bp.style.top = -t * bili + 'px';
    }

}


//1当鼠标移出小图时，小放和大放消失；
Sp.onmouseout = function() {
    Sf.style.display = 'none';
    Bf.style.display = 'none';
}