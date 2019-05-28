//example 1
class Singleton {
    constructor() {}
}

export default new Singleton();


//example 2
const instance = Symbol('instance');
class Singleton {
    constructor() {
        if(Singleton[instance]) {
            return Singleton[instance];
        }
        Singleton[instance] = this;
    }
}

export default new Singleton()
