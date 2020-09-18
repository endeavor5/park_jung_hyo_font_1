import { observable } from "mobx";
import { observer } from "mobx-react";

class Store {
    @observable mode = 'dev'; // dev, prod
    @observable token = '';
    @observable profile = [];
}
export default (new Store);