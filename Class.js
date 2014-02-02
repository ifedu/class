var ClassWithoutRequirejs = (function() {
    'use strict';
    //////me.publicStaticVar;

    //////var privateStaticVar;

    //////constructor
    function me() {
        //////this.publicVar;

        //////var privateVar;

        //////this.publicMethod = function() {};

        //////function privateMethod() {}
    }
<<<<<<< HEAD
    //////me.prototype.publicMethod = function() {};
=======
    //////PUBLIC METHOD
    //me.prototype.ini = function() {};

    //////PUBLIC STATIC METHOD
    //me.fnPublicStatic = function() {};
>>>>>>> 968bb16f8aa68d5256df010889f3f79a361cb618

    //////me.publicStaticMethod = function() {};

    //////function privateStaticMethod() {}

    //////INHERITANCE
    //me.prototype             = new SuperClass();
    //me.prototype.constructor = me;
    //me.prototype.parent      = SuperClass.prototype;
    //me.superClass            = SuperClass;

    return me;
})();

define(function (require) {
    'use strict';
<<<<<<< HEAD

    var ClassWithRequirejs = (function() {
        //var Import = require('./Class');
        
        //////me.publicStaticVar;
=======
    //CLASS EXAMPLE
    var Class = (function() {
        //////IMPORTS
        //var Fichero = require('./Fichero');
        
        //////PUBLIC STATIC VARS
        //me.varPublicStatic = 11;
>>>>>>> 968bb16f8aa68d5256df010889f3f79a361cb618

        //////var privateStaticVar;

        //////constructor
        function me() {
            //////this.publicVar;

            //////var privateVar;

            //////this.publicMethod = function() {};

            //////function privateMethod() {}
        }
<<<<<<< HEAD
        //////me.prototype.publicMethod = function() {};

        //////me.publicStaticMethod = function() {};
=======
        //////PUBLIC METHOD
        //me.prototype.ini = function() {};

        //////PUBLIC STATIC METHOD
        //me.fnPublicStatic = function() {};
>>>>>>> 968bb16f8aa68d5256df010889f3f79a361cb618

        //////function privateStaticMethod() {}

        //////INHERITANCE
        //me.prototype             = new SuperClass();
        //me.prototype.constructor = me;
        //me.prototype.parent      = SuperClass.prototype;
        //me.superClass            = SuperClass;
        return me;
    })();
<<<<<<< HEAD
    return ClassWithRequirejs;
});
=======
    return Class;
});
>>>>>>> 968bb16f8aa68d5256df010889f3f79a361cb618
