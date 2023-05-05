import {makeObservable, observable, action} from 'mobx';

class CounterStore {
  count = 0; // Count is an global variable, initial value is 0.

  constructor() {
    // makeObservable used to make a class instance observable and define actions for it
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
    });
  }

  increment() {
    this.count += 3;
    // CounterStore.count = CounterStore.count + 1
  }

  decrement() {
    this.count -= 3;
    // CounterStore.count = CounterStore.count - 1
  }
}

const counterStore = new CounterStore();

export default counterStore;
