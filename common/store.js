import { observable } from "mobx";
import { observer } from "mobx-react";

class Store {
    @observable mode = 'dev'; // dev, prod
    @observable token = '';
    @observable profile = [];

    @observable fontSizeState = 50;
    @observable fontWeightState = 300;
    @observable fontLetterSpacingState = 0;
    @observable fontLineSpacingState =  0.85;
    @observable fontColorState = '#000';
    @observable fontState = null;

    @observable isFontSizeAuto = false;
    @observable isFontWeightAuto = false;
    @observable isFontLetterSpacingAuto = false;
    @observable isFontLineSpacingAuto = false;

}
export default (new Store);