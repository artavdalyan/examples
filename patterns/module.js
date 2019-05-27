(function () {
    'use strict';

    const Base = window.Base; // import another module
    const  str  = `I am a module`; //local variable
    class ModuleName extends Base {
        constructor(...arg) {
            super(...arg)
        }

        toString(){
            console.log(str);
        }
    }

    window.ModuleName = ModuleName; // export module
});
