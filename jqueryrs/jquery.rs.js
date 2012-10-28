/*

http://blog.sebaduran.com/2012/09/24/simple-plugin-para-compartir-en-redes-sociales/

version:    0.2
date:       10/06/2012
author:     Sebastian Duran
contact:    yo@sebaduran.com, www.sebaduran.com, @seba_estel_

Licencia Creative Commons
Este obra está bajo una Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported.
http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es

*/


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