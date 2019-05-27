//example 1
(function (modules) {
    'use strict';

    class SomeService {
        constructor() {
            this.listeners = {};
        }

        addEventListener(event, callback) {
            this.listeners = this.listeners[event] ? [...this.listeners[event], callback] : [callback];
            return () => {
                this.removeEventListener(event, callback);
            }
        }

        removeEventListener(event, callback) {
            this.listeners[event] = this.listeners.filter(func => func !== callback)
        }

        emitEvent(eventName, eventData) {
            this.listeners[eventName].forEach(func => {
                func.call(null, eventData);
            })
        }
    }

    modules.SomeService = SomeService; // export module
})(window._all_modules || (window._all_modules = {}));

//example 2
(function (modules) {
    'use strict';

    class SomeService {
        constructor() {
            this.listeners = {};
        }

        on(event, callback) {
        }

        off(event, callback) {
        }

        emit(eventName, eventData) {
        }
    }

    modules.SomeService = SomeService; // export module
})(window._all_modules || (window._all_modules = {}));

//example 3
(function (modules) {
    'use strict';

    class SomeService {
        constructor() {
            this.listeners = {};
        }

        subscribe(event, callback) {
        }

        unsubscribe(event, callback) {
        }

        publish(eventName, eventData) {
        }
    }

    modules.SomeService = SomeService; // export module
})(window._all_modules || (window._all_modules = {}));

//example 4
(function (modules) {
    'use strict';

    class SomeService {
        constructor() {
            this.listeners = {};
        }

        attachEvent(event, callback) {
        }

        detachEvent(event, callback) {
        }

        dispatchEvent(eventName, eventData) {
        }
    }

    modules.SomeService = SomeService; // export module
})(window._all_modules || (window._all_modules = {}));

const SomeService = window._all_modules.SomeService;
const service = new SomeService();
const callback = () => {
};
service.addEventListener('loaded', callback);
service.emitEvent('loaded', {data: 5});
service.removeEventListener('loaded', callback);
