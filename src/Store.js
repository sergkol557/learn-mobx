import {observable, action, computed} from "mobx";

export default class nickName {
    @observable age = 30;
    @observable name = 'default';

    @action increment = () => this.age++;
    @action getName = () => fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(json => this.name = json.results[0].name.first);

    @computed get doubleAge() { return this.age * 2; };

};
