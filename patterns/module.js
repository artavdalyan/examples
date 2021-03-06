
const module_1 = (function () {
    'use strict';

    const Base = window.Base; // import another module
    const  str  = `I am a module`; //local variable
    class ModuleName extends Base {
        constructor(...arg) {
            super(...arg);
        }

        toString(){
            console.log(str);
        }
    }

    window.ModuleName = ModuleName; // export module
});

const module_2 = (function (modules) {
    'use strict';

    const  str  = `I am a module`; //local variable
    class ModuleName {
        toString(){
            console.log(str);
        }
    }

    modules.ModuleName = ModuleName; // export module
})(window._all_modules || (window._all_modules = {}));
