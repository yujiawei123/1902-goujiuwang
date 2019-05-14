//轮播图
var $box = $('.lunbo_box');
var $piclist = $('.lunbo_pics .lunbo_pic');
var $btnlist = $('.lunbo_index_position .lunbo_index')
var $left = $('.lunbo_btn-left');
var $right = $('.lunbo_btn-right');
var $num = 0
var $timer = null;
var $fr = function() {
    $num++;
    if ($num > 8) {
        $num = 0
    }
    $btnlist.eq($num).addClass('active');
    $btnlist.eq($num).siblings().removeClass('active');
    $piclist.eq($num).show();
    $piclist.eq($num).siblings().hide()
};

$box.hover(function() {
        $left.show();
        $right.show();
        clearInterval($timer);
        // $left.css({
        //         'display': 'block'
        //     }),
        //     $right.css({
        //         'display': 'block'
        //     })也可以实现显示与隐藏
        $btnlist.on('mouseover', function() {
            $num = $(this).index(); //让num表示当前的按钮
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $piclist.eq($(this).index()).css({
                'display': 'block'
            });
            $piclist.eq($(this).index()).siblings().css({
                'display': 'none'
            });
        });
        $right.on('click', $fr)

        $left.on('click', function() {
            $num--;
            if ($num < 0) {
                $num = 8
            }
            $btnlist.eq($num).addClass('active');
            $btnlist.eq($num).siblings().removeClass('active');
            $piclist.eq($num).show();
            $piclist.eq($num).siblings().hide()
        })
    },


    function() {
        $left.hide()
        $right.hide()
        $timer = setInterval(function() {
            $fr()
        }, 1000);
    });


//页面渲染


// 1
! function() {
    //1.拼接数据
    $.ajax({
        url: 'http://10.31.163.77/projectname/php/maotaidate1.php',
        dataType: 'json'

    }).done(function(data) {
        var $html = '';
        console.log(data);
        $.each(data, function(index, value) {
            console.log(value)
            $html += `
                    <li>
                        <a href="details.html?sid=${value.picid}" target="_blank">
                            <img src="${value.url}" />
                            <div  class="describe">
                            <span class="wenzili">${value.title}</span>
                            <span class="jiageli">¥${value.price}</span>
                            </div>
                        </a>
                    </li>
                `;
        });
        // $html += '</ul>';
        $('.content_box .ul_id1').html($html);
    });
}();



// 2
! function() {
    //1.拼接数据
    $.ajax({
        url: 'http://10.31.163.77/projectname/php/maotaidate2.php',
        dataType: 'json'

    }).done(function(data) {
        var $html = '';
        console.log(data);
        $.each(data, function(index, value) {
            console.log(value)
            $html += `
                    <li>
                        <a href="details.html?sid=${value.picid}" target="_blank">
                            <img src="${value.url}" />
                            <div  class="describe">
                            <span class="wenzili">${value.title}</span>
                            <span class="jiageli">¥${value.price}</span>
                        </a>
                    </li>
                `;
        });
        // $html += '</ul>';
        $('.content_box .ul_id2').html($html);
    });
}();



// 3
! function() {
    //1.拼接数据
    $.ajax({
        url: 'http://10.31.163.77/projectname/php/maotaidate.php',
        dataType: 'json'

    }).done(function(data) {
        var $html = '';
        console.log(data);
        $.each(data, function(index, value) {
            console.log(value)
            $html += `
                    <li>
                        <a href="details.html?sid=${value.picid}" target="_blank">
                            <img src="${value.url}" />
                            <div  class="describe">
                            <span>${value.title}</span>
                            <span>¥${value.price}</span>
                            </div>
                        </a>
                    </li>
                `;
        });
        // $html += '</ul>';
        $('.content_box ul').html($html);
    });
}();