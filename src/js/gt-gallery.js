/**
 * Created by giladtakoni on 3/29/15.
 */

/**
 * 1. options.wrapper must have id
 * 2. all elem(item) in gallery need to have .gt-gallery-item class
 * 3. button prev/next need to have two class .button.(prev/next)
 * 4. in ID wrapper images wrapper need to have .images-wrapper class
 * 5. callback can pass in options object - onStart,destroy,onNext,onPrev,onInit
 *
 * @param options
 * @constructor
 */
function GtGallery(options){

    var CLASS_ITEM = '.gt-gallery-item';

    var cache = {},
        _options = {
            'wrapperId':'',
            'onStart':[],
            'destroy':[],
            'onNext':[],
            'onPrev':[],
            'onInit':[],
            'itemWidth':null,
            'itemsLength':null
        };

    cache.items= [];
    cache.itemsLength = 0;
    cache.$wrapper = null;

    function error(){

    }

    function extend(source,obj){
        for(key in obj){
            if(typeof source[key] != 'undefined'){
                source[key] = obj[key];
            }
        }

        return source;
    }

    extend(_options,options);



    function init(){

        function validateWrapper(){

            var $wrapper;

            $wrapper = $('#'+_options.wrapperId);
            if($wrapper.length != 1){
                throw new Error('Invalid wrapper id');
            }

            cache.$wrapper = _options.wrapperId = $wrapper;
        }

        function setItems(){

            cache.items = _options.items = _options.wrapperId.find(CLASS_ITEM);

            if(_options.items.length == 0){
                throw new Error('Have no Items');
            }

            cache.itemsLength = cache.items.length;
        }

        function setElementsSize(){
            // set item width
            // set absolute width
        }

        //  implement next & prev (don't forget .button.disable)
        //  implement bindButtonEvents

        validateWrapper();
        setItems();
        setElementsSize();
        bindButtonEvents();

    }

    function next(){}
    function prev(){}
    function bindButtonEvents(){}

    function getItems(){
        return cache.items;
    }

    $(document).ready(init);

    return{
        next:next,
        prev:prev,
        getItems: getItems
    }
}

(function(){

    var gallery = new GtGallery({
        wrapperId:'main-gallery'
    });

})();

