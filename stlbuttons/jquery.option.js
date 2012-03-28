    $.fn.stloptions = function(){  
        $('body').prepend('<div id="stliptionscontent"><img src="http://sebaduran.com/stlbuttons/alert.png" style="float:left; margin:0px 10px 0px 0px;"/><div id="stliptionscontainer"></div><img src="http://sebaduran.com/stlbuttons/indicator.png" id="stlindicator"/></div>');
        var action = 'go';// replacefor function of action
        $(this).click(function(e){
            e.preventDefault()
            var stlPosition = $(this).offset();
            var contentOptions = '¿Estas seguro que deseas eliminar esto?';
            var options = '<a class="stl-buttons primary-button bistl-button stl-buttons-neutral stloptiondefine" action="cancel" href="#">cancelar</a><a class="stl-buttons secondary-button bistl-button stloptiondefine" action="ok" href="#">Confirmar</a>';
            $('#stliptionscontainer').html(contentOptions+'<br/><div id="optionscontentbuttons">'+options+'</div><div style="clear:both;"></div>');
            var stlPositionTop = parseInt(stlPosition.top)-parseInt(parseInt($('#stliptionscontent').css('height'))+parseInt($(this).css('height')));
            var stlPositionLeft = parseInt(stlPosition.left)+parseInt($(this).css('width'));
            $('#stliptionscontent').css({top:stlPositionTop,left:stlPositionLeft});
            $('#stliptionscontent').fadeIn('fast');
            $('#stliptionscontent').animate({boxShadow: '0px 0px 10px rgba(9, 9, 9, 0.3)'},300);    


           $('.stloptiondefine').click(function(){
                if($(this).attr('action')=="cancel"){
                    confirmOut()   
                }

                if($(this).attr('action')=="ok"){
                    console.log(action)   
                }
           })
        });

        $('#stliptionscontent').mouseleave(function(){
            confirmOut()  
        });

        function confirmOut(){
            $('#stliptionscontent').animate({boxShadow: '0px 0px 0px #FFFFFF'}, 'fast');    
            $('#stliptionscontent').fadeOut('fast'); 
        }
    };  
      