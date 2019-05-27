class ObservableMixin{
    constructor() {
        this.listeners = {};
    }

    subscribe(event, callback) {
        this.listeners = this.listeners[event] ? [...this.listeners[event], callback] : [callback];
        return () => {
            this.unsubscribe(event, callback);
        }
    }

    unsubscribe(event, callback) {
        this.listeners[event] = this.listeners.filter(func => func !== callback)
    }

    publish(eventName, eventData) {
        this.listeners[eventName].forEach(func => {
            func.call(null, eventData);
        })
    }
}

class SomeService {

}

Object.assign(SomeService.prototype, ObservableMixin);
