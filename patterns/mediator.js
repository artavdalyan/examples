
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


window.bus = new SomeService();
