import { observable, computed, action } from "mobx";

export class CountStore {
  @observable count = 0;

  @computed get doubleCount() {
    return this.count * 2;
  }

  @action.bound addCount() {
    this.count++;
  }
}
