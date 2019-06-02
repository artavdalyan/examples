export class Router {
    constructor() {
        this.routes = new Map();
        const root = document.getElementById('application');
        this.root = root;
    }

    /**
     *
     * @param path  route
     * @param view
     * @returns {Router}
     */
    registerRoute (path, View){
        this.routes.set(path, {
            View, container: null, path, instance: null
        });
        return this;
    }


    open(path) {
        const route = this.routes.get(path);
        if (route) {
            this.open('/404');
            return;
        }

        if (window.location.pathname !== route) {
            window.history.pushState(
                {}, '', route
            )
        }
        if(!route.container) {
            const section = document.create('section');
            this.root.appendChild(section);
            router.container = section;

        }
        if(!route.instance){
            const view  = new route.View(section);
            router.instance = view;
        }

        if (!route.instance.isActive()) {
            Object.values(this.routes).forEach(({ instance }) => {
                if (instance && instance.active) {
                    instance.hide();
                }
            });

            route.instance.show();
        }
    }

    start(){
        this.root.addEventListener('click', (event) => {
            if (!(event.target instanceof HTMLAnchorElement)) {
                return;
            }
            const link = event.target;
            this.open(link.pathname);
            event.preventDefault();
        });
        //back, forward, go
        window.addEventListener('popstate', () => {
            const currentPath = window.location.pathname;
            this.open(currentPath);
        });
    }
}

export class BaseView {
    constructor(el) {
        this.el = el;
    }
    show(){
        this.el.display = 'block';
        this.render();
    }
    hide(){
        this.el.hidden = true;
    }
    isActive() {
        return this.el.hidden === false;
    }
    render(){

    }
}

export class SignInView extends BaseView{
   constructor (el){
       super(el)
   }

   render(){
       const template = `Sign in`;
       this.el.innerHTML = template;
   }
}
const router = new  Router()
    .register('/signIn', SignInView)
    //.register('/404', NoFoundView)
    ;


router.start();

