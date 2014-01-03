////CLASS EXAMPLE
//WITHOUT REQUIREJS
var Class = (function() {
    'use strict';
    //////PUBLIC STATIC VARS
    //me.varPublicStatic = 11;

    //////PRIVATE STATIC VARS
    //var foo;

    //////CONSTRUCTOR
    function me() {
        //////PUBLIC VARS
        //this.varPublic = 6;

        //////PRIVATE VARS
        //var varPrivate = 1;

        //////PUBLIC METHOD
        //this.ini = function() {};

        //////PRIVATE METHOD
        //function fnPrivate() {}
    }
    //////PUBLIC STATIC METHOD
    //me.fnPublicStatic = function() {};

    //////PRIVATE STATIC METHOD
    //function fnPrivateStatic() {}

    //////INHERITANCE
    //me.prototype = new SuperClass();
    ////OBJETO PARENT
    //me.prototype.constructor = me;
    //me.prototype.parent = SuperClass.prototype;
    ////CLASS PARENT
    //me.Parent = SuperClass;

    return me;
})();

//WITH REQUIREJS
define(function (require) {
    'use strict';
    //CLASS EXAMPLE
    var Class = (function() {
        //////IMPORTS
        //var Fichero = require('./Fichero');

        //////PUBLIC STATIC VARS
        //me.varPublicStatic = 11;

        //////PRIVATE STATIC VARS
        //var foo;

        //////CONSTRUCTOR
        function me() {
            //////PUBLIC VARS
            //this.varPublic = 6;

            //////PRIVATE VARS
            //var varPrivate = 1;

            //////PUBLIC METHOD
            //this.ini = function() {};

            //////PRIVATE METHOD
            //function fnPrivate() {}
        }
        //////PUBLIC STATIC METHOD
        //me.fnPublicStatic = function() {};

        //////PRIVATE STATIC METHOD
        //function fnPrivateStatic() {}

        //////INHERITANCE
        //me.prototype = new SuperClass();
        ////OBJETO PARENT
        //me.prototype.constructor = me;
        //me.prototype.parent = SuperClass.prototype;
        ////CLASS PARENT
        //me.Parent = SuperClass;

        return me;
    })();
    return Class;
});