$(function (){
         
    //ファーストビューを超えたらsitelogoとhamburgerを黒色にする
    $(window).on('load scroll',function (){
        var fvHeight = $('.fv').outerHeight(),
            value = $(this).scrollTop();

        if(value > fvHeight) {
            $('.header').addClass('black');
            $('.hamburger').addClass('black');
        }else {
            $('.header').removeClass('black');
            $('.hamburger').removeClass('black');
        }
    });

    //hamburgerがクリックされたらサイドバーを表示する
    $('.hamburger').on('click',function (){
        var fvHeight = $('.fv').outerHeight(),
            value = $(window).scrollTop();

        if(value > fvHeight) {
            $('.header').toggleClass('black');
            $('.hamburger').toggleClass('black');
            $('.header-nav').toggleClass('open');
            $('.hamburger').toggleClass('open');
            $('.header-mask').fadeToggle();
            $('body').toggleClass('noscroll');
            return false;
        }else {
            $('.header-nav').toggleClass('open');
            $('.hamburger').toggleClass('open');
            $('.header-mask').fadeToggle();
            $('body').toggleClass('noscroll');
            return false;
        }
    });

    //navのリンクが押された時、サイドバーを閉じる
    $('.header-list__item > a').on('click',function (){
        $('.header-nav').removeClass('open');
        $('.hamburger').removeClass('open');
        $('body').removeClass('noscroll');
        $('.header-mask').fadeOut();
    });
    
    //radioボタンのつけ外し
    var nowchecked = [];
    $('input[type="radio"]:checked').each(function(){
    nowchecked.push( $(this).attr('id') );
    });

    $('input[type="radio"]').click(function(){
    var idx = $.inArray( $(this).attr('id'), nowchecked ); 
        if( idx >= 0 ) { 
            $(this).prop('checked', false); 
            nowchecked.splice(idx,1); 
        } else { 
        var name = $(this).attr('name');
        $('input[name="' + name + '"]').each(function(){
        var idx2 = $.inArray( $(this).attr('id'), nowchecked);
        if( idx2 >= 0 ){
            nowchecked.splice(idx2,1);
        }
        });
            nowchecked.push( $(this).attr('id') );
        }
    });


    //checkboxのつけ外し
    var nowchecked = [];
    $('input[type="checkbox"]:checked').each(function(){
    nowchecked.push( $(this).attr('id') );
    });

    $('input[type="checkbox"]').click(function(){
    var idx = $.inArray( $(this).attr('id'), nowchecked ); 
        if( idx >= 0 ) { 
            $(this).prop('checked', false); 
            nowchecked.splice(idx,1); 
        } else { 
        var name = $(this).attr('name');
        $('input[name="' + name + '"]').each(function(){
        var idx2 = $.inArray( $(this).attr('id'), nowchecked);
        if( idx2 >= 0 ){
            nowchecked.splice(idx2,1);
        }
        });
            nowchecked.push( $(this).attr('id') );
        }
    });

});
