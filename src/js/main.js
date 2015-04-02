/* ==========================================================================

    Project: jerusalemu
    Author: XHTMLized
    Last updated: @@timestamp

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
        //App.initMainGallery({
        //    rel:'main-gallery'
        //});
      // App.feature1();
      // App.feature2();
    },

    /**
     * Custom feature 1
     */
    feature1: function() {

    },

    /**
     * Custom feature 2
     */
    feature2: function() {

    },
    initMainGallery: function(){

        var pageLoad;
        pageLoad = false;
        function startIntervalOnPageLoad(){

            if(pageLoad){
                return false;
            }

            pageLoad = true;

            var interval,
                time = 2000,
                imageCount = 4,
                counter = 0,
                playing;


            playing = false;

            function stopInterval(){

                if(playing){
                    clearInterval(interval);
                    $.colorbox.close();
                    playing = false;
                }

            }

            function onInterval(){
                if(counter==imageCount){
                    stopInterval();
                }

                $.colorbox.next();
                counter++;
            }


            interval = setInterval(onInterval,time);

            playing = true;

            $(document).bind('cbox_closed', function(){
                stopInterval();
            });
        }

        $(document).bind('cbox_complete', function(){
            startIntervalOnPageLoad();
        });

        $('.gallery-wrapper a').colorbox();
        $('.images-wrapper a:first').trigger('click');
    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
