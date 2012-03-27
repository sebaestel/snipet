    $.fn.stltooltip = function(){  
        var tip = "<div id='stltooltip'><div class='stltooltiphead'></div><div class='stltooltipcontent'></div><div class='stltooltipfooter'></div></div>"
        $('body').append(tip);
            $(this).mouseenter(function(){  
                var position = $(this).offset();		
                var left = position.left; 
                if($(this).attr('title')==""){
                	var content = $(this).attr('longdesc');
                }else{
                	var content = '<b>'+$(this).attr('title')+'</b><br/>'+$(this).attr('longdesc');
                }
                $('.stltooltipcontent').html(content);
                var positionperfect = $('#stltooltip').css('height');
                var top = parseInt(position.top)-parseInt(positionperfect); 
                $('#stltooltip').css({left:left,top:top});
                $('#stltooltip').fadeIn('fast');
            });  
            $(this).mouseout(function(){  
                $('#stltooltip').fadeOut('fast');
            });  
    };  
      