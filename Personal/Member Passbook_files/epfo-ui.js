/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () { 
    
        //Code to expand and collapse pannel on click of button
        $("[data-widget='epfo-collapse']").click(function () {
            var box = $(this).parents(".epfo-box").first();
            var bf = box.find(".epfo-box-body, .epfo-box-footer");
            if (!box.hasClass("epfo-collapsed-box")) {
                box.addClass("epfo-collapsed-box");
                $(this).children(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
                bf.slideUp();
            } else {
                box.removeClass("epfo-collapsed-box");
                $(this).children(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
                bf.slideDown();
            }
        });
        
        //To increase/decrese font of body
        $("#btnFontMinus").click(function () {
            $('body').css('font-size', '13px');
        });
        //To increase/decrese font of body
        $("#btnFontReset").click(function () {
            $('body').css('font-size', '14px');
        });
        //To increase/decrese font of body
        $("#btnFontPlus").click(function () {
            $('body').css('font-size', '15px');
        });
 }); //doc.ready ends here
    
function blockUI(text) {
    if (jQuery('body').find('#resultLoading').attr('id') != 'resultLoading') {
        jQuery('body').append('<div id="resultLoading" style="display:none"><div><img src="'+hostname+'/images/ajax-loader.gif"><div>' + text + '</div></div><div class="bg"></div></div>');
    }

    jQuery('#resultLoading').css({
        'width': '100%',
        'height': '100%',
        'position': 'fixed',
        'z-index': '10000000',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'margin': 'auto'
    });

    jQuery('#resultLoading .bg').css({
        'background': '#000000',
        'opacity': '0.7',
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'top': '0'
    });

    jQuery('#resultLoading>div:first').css({
        'width': '250px',
        'height': '75px',
        'text-align': 'center',
        'position': 'fixed',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'margin': 'auto',
        'font-size': '16px',
        'z-index': '10',
        'color': '#ffffff'

    });

    jQuery('#resultLoading .bg').height('100%');
    jQuery('#resultLoading').fadeIn(300);
    jQuery('body').css('cursor', 'wait');
}

function unBlockUI() {
    jQuery('#resultLoading .bg').height('100%');
    jQuery('#resultLoading').fadeOut(300);
    jQuery('body').css('cursor', 'default');
}  


$(window).scroll(function () {
    if ($(this).scrollTop() > 25) {
        $('.main-nav').addClass('fixed-menu');
    } else {
        $('.main-nav').removeClass('fixed-menu');
    }
});
 
function responsiveJqGrid(gridId){
    var $grid = $("#"+gridId),
    newWidth = $grid.closest(".ui-jqgrid").parent().width();
    $grid.jqGrid("setGridWidth", newWidth, true);
}

