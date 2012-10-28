$.fn.rsOptions = function(options){
        var opts = options;

        var twitterOptions          = opts.twitter;
        var twitterOptionsUsername  = twitterOptions.username;
        var twitterOptionsMessagge  = twitterOptions.twitterMessage;

        var facebookOptions         = opts.facebook;
        var facebookOptionsUsername = facebookOptions.username;

        var actualUrl               = encodeURIComponent(document.URL);
        
        $(this).attr('rsOptions','rsContent');

        $(this).each(function(){

            var facebook    = '<a class="rsico rsfacebook" target="rs" href="http://www.facebook.com/sharer.php?u='+actualUrl+'"><img src="http://blog.sebaduran.com/wp-content/themes/sebaduran/img/facebook.png"/></a>';
            var twitter     = '<a class="rsico rstwitter" target="rs" href="https://twitter.com/intent/tweet?text='+twitterOptionsMessagge+'&via='+twitterOptionsUsername+'&url='+actualUrl+'"><img src="http://blog.sebaduran.com/wp-content/themes/sebaduran/img/twitter.png"/></a>';
            var pinterest   = '<a class="rsico rspinterest" target="rs" href="#"><img src="img/pinterest.png"/></a>';
            var google      = '<a class="rsico rsgoogle" target="rs" href="https://plus.google.com/share?url='+actualUrl+'"><img src="http://blog.sebaduran.com/wp-content/themes/sebaduran/img/google.png"/></a>';

            var rsList      = $(this).attr('rsType').split(' '); 
            var rsId        = $(this).index();
            var rsClass     = $(this).attr('class');
            jQuery.each(rsList, function(i, val) {
                if(val=='facebook'){
                    $('.'+rsClass).append(facebook);
                }
                if(val=='google'){
                    $('.'+rsClass).append(google);
                }
                if(val=='twitter'){
                    $('.'+rsClass).append(twitter);
                }                

            });

        });

        $('.rsico').live('click',function(e){
            e.preventDefault();
            var url =   $(this).attr('href');
            window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=650');
        })

       
    };  