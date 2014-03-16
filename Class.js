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
    //////me.prototype.publicMethod = function() {};

    //////me.publicStaticMethod = function() {};

    //////function privateStaticMethod() {}

    //////INHERITANCE
    //me.prototype             = new SuperClass();
    //me.prototype.constructor = me;
    //me.prototype.parent      = SuperClass.prototype;
    //me.superClass            = SuperClass;

    return me;
}());

define(function (require) {
    'use strict';

    var ClassWithRequirejs = (function() {
        //var Import = require('./Class');
        
        //////me.publicStaticVar;

        //////var privateStaticVar;

        //////constructor
        function me() {
            //////this.publicVar;

            //////var privateVar;

            //////this.publicMethod = function() {};

            //////function privateMethod() {}
        }
        //////me.prototype.publicMethod = function() {};

        //////me.publicStaticMethod = function() {};

        //////function privateStaticMethod() {}

        //////INHERITANCE
        //me.prototype             = new SuperClass();
        //me.prototype.constructor = me;
        //me.prototype.parent      = SuperClass.prototype;
        //me.superClass            = SuperClass;
        return me;
    })();
    return ClassWithRequirejs;
}());