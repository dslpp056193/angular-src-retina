/**
 * SHARE-JS: plugin for angular.
 */

angular.module('src-retina', []);

angular.module('src-retina', [])
.directive('srcRetina', function(){
    return {
        restrict: 'A',
        scope: false,
        link: function($element, $attrs){
            var defaults = {
                replaced: false,
                attr_name: 'src-retina',
                src: $element.attr('src-retina')
            };

            if( window.devicePixelRatio >= 2 && defaults.replaced == false ){
                defaults.replaced = true;

                // set retina image
                if( defaults.src ){
                    var element = $element;
                    var link = defaults.src;
                    var link_2x = defaults.src.replace(/(\.\w+$)/g, '@2x$1');


                    var img_2x = new Image();
                    img_2x.src = link_2x;
                    img_2x.onload = function(){
                        element.attr('width', this.width / 2);
                        element.attr('height', this.height / 2);
                        element.attr('src', link_2x);
                    }

                    img_2x.onerror = function(){
                        element.attr('src', link);
                    }

                    $element.removeAttr( defaults.attr_name );
                }
            } else if ( defaults.replaced == false ){
                defaults.replaced = true;

                // set default image
                if( defaults.src ){
                    $element.attr('src', defaults.src)
                    $element.removeAttr( defaults.attr_name );
                }
            }
        }
    }
});