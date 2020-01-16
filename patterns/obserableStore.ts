export class ObseravbleStore {
    private store: BehaviorSubject<any>;
    private stateUpdates$: Subject<any> = new Subject<any>;
    constructor(initState: any) {
        this.store = new BehaviorSubject(initState);
        this.stateUpdates$.pipe(
            scan((prev, curr) => ({...prev, ...curr}), initState)
        ).subscribe(this.store);
    }
    updateState(state) {
        this.stateUpdates$.next(state);
    }
    selectState(stateKey) {
        return this.store.pipe(
            pluck(stateKey)
        );
    }
    stateChanges(){
        return this.store.asObservable();
    }
}
