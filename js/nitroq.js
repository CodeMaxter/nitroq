/*!
 * JavaScript Library Boilerplate - v0.1.1 - 4/1/2011
 * http://benalman.com/projects/javascript-library-boilerplate/
 *
 * Copyright (c) 2011 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */


(function (document) {
    // TODO With use strict enabled the library doesn't work, fix this bug and enable use strict
    //'use strict';

    '$:nomunge'; // Used by YUI compressor.


    var name = 'nq', // YOUR LIBRARY'S FULL NAME.
        global = this,
        old$ = global.$,
        oldN = global[name];


    // YOUR LIBRARY'S FUNCTION. BE CREATIVE, OR NOT, NOBODY CARES ANYWAYS.
    function $(selector) {
        // <ajpiano> "document.querySelectorAll() is super fast, but not to TYPE"
        var nodeList = document.querySelectorAll.call(document, selector);
        if (1 === nodeList.length) {
            return nodeList.item(0);
        } else {
            return nodeList;
        }
    }


    // Create a global reference to our library.
    global.$ = global[name] = $;


    // Calling .noConflict will restore the global $ to its previous value.
    // Passing true will do that AND restore the full global name as well.
    // Returns a reference to your library's function.
    $.noConflict = function (all) {
        if (all) {
            global[name] = oldN;
        }
        global.$ = old$;
        return $;
    };


})(document);