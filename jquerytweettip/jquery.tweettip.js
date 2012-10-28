/*

http://blog.sebaduran.com/2012/09/25/plugin-jquery-tweettip/

version:    0.1
date:       24/09/2012
author:     Sebastian Duran
contact:    yo@sebaduran.com, www.sebaduran.com, @seba_estel_

Licencia Creative Commons
Este obra está bajo una Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported.
http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es

*/

$.fn.tweetTip = function(options){      
    $(this).each(function(){
        var content = $(this).html();
        var twitterUser = /(^|\s)@(\w+)/;
        if (/(^|\s)@(\w+)/.test(content)){
            var username = content.replace('@','')
            var tweetTipId = 'tweetTipContent'+username;
            var avatar = "<figure><img src='http://api.twitter.com/1/users/profile_image?screen_name="+username+"&size=bigger'/></figure>"
            var url = "<a target='blank'_ href='http://www.twitter.com/"+username+"'>"+content+"</a>";
            var tweetTip = "<span id='"+tweetTipId+"' class='tweetTipContent' style='display:none;'>"+avatar+"<span class='lastTweet' id='"+username+"'></span></span>";
            $(this).after(tweetTip);     
            $(this).attr('tweettipid',tweetTipId)       
         
            // utilizamos jquery con la api de twitter; devuelve un único resultado:
            $.getJSON('https://twitter.com/statuses/user_timeline.json?screen_name='+username+'&count=1&callback=?', function(data) {
                var tweet = data[0].text;
                $('.tweetTipContent #'+username).html('<strong>"</strong>'+tweet+'<strong>"</strong>');
            }); 
        }

    });

    $("a[tweettipid]").live('mouseenter',function(){
        var tweetTipUp = '#'+$(this).attr('tweettipid');
        var rest = $(this).css('width');
        var rest = rest.replace('px','');
        var position = $(this).offset();
        var tweetTipUpLeft = position.left;
        var tweetTipUpLeft = parseInt(tweetTipUpLeft)+parseInt(rest);
        var tweetTipUpTop = position.top;


        $(tweetTipUp).css({left:tweetTipUpLeft,top:tweetTipUpTop});
        $(tweetTipUp).fadeIn('fast');
   });    

    $("a[tweettipid]").live('mouseout',function(){
        var tweetTipUp = '#'+$(this).attr('tweettipid');
        $(tweetTipUp).fadeOut('fast');
   });

};  


