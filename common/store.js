import { observable } from "mobx";
import { observer } from "mobx-react";

class Store {
    @observable mode = 'dev'; // dev, prod
    @observable token = '';
    @observable profile = [];

    @observable isHello = true;

    @observable isPlayAll = false;

    @observable minFontSize = 10;
    @observable maxFontSize = 100;
    @observable unitFontSize = 1;
    @observable directionFontSize = 'positive'; // negative;
    @observable secondFontSize = 100;

    @observable minFontWeight = 100;
    @observable maxFontWeight = 500;
    @observable unitFontWeight = 10;
    @observable directionFontWeight = 'positive'; // negative;
    @observable secondFontWeight = 100;

    @observable minFontLetterSpacing = -0.1;
    @observable maxFontLetterSpacing = 0.2;
    @observable unitFontLetterSpacing = 0.01;
    @observable directionFontLetterSpacing = 'positive'; // negative;
    @observable secondFontLetterSpacing  = 100;

    @observable minFontLineSpacing = 0.85;
    @observable maxFontLineSpacing = 1.5;
    @observable unitFontLineSpacing = 0.01;
    @observable directionFontLineSpacing = 'positive'; // negative;
    @observable secondFontLineSpacing  = 100;

    @observable defaultFontSizeState = 50;
    @observable defaultFontWeightState = 300;
    @observable defaultFontLetterSpacingState = 0;
    @observable defaultFontLineSpacingState = 0.85;
    @observable defaultFontColorState = '#000';
    @observable defaultFontState = null;


    @observable defaultfontVariationSettings_widthState = 100;
    @observable defaultfontVariationSettings_weightState = 100;
    @observable defaultfontVariationSettings_italicState = 0;


    @observable fontSizeState = 50;
    @observable fontWeightState = 300;
    @observable fontLetterSpacingState = 0;
    @observable fontLineSpacingState =  0.85;
    @observable fontColorState = '#000';
    @observable fontState = null;

    @observable fontVariationSettings_widthState  = 100; // 100 - 150
    @observable fontVariationSettings_weightState = 100; // 100 - 200
    @observable fontVariationSettings_italicState = 0; // 0 - 100
    
    @observable minfontVariationSettings_widthState = 100;
    @observable maxfontVariationSettings_widthState = 150;
    @observable unitfontVariationSettings_widthState = 1;
    @observable directionfontVariationSettings_widthState = 'positive'; // negative;
    @observable secondfontVariationSettings_widthState = 100;

    @observable minfontVariationSettings_weightState = 100;
    @observable maxfontVariationSettings_weightState = 500;
    @observable unitfontVariationSettings_weightState = 1;
    @observable directionfontVariationSettings_weightState = 'positive'; // negative;
    @observable secondfontVariationSettings_weightState = 100;

    @observable minfontVariationSettings_italicState = 0;
    @observable maxfontVariationSettings_italicState = 100;
    @observable unitfontVariationSettings_italicState = 1;
    @observable directionfontVariationSettings_italicState = 'positive'; // negative;
    @observable secondfontVariationSettings_italicState = 100;

    @observable isFontSizeAuto = false;
    @observable isFontWeightAuto = false;
    @observable isFontLetterSpacingAuto = false;
    @observable isFontLineSpacingAuto = false;


    @observable isFontVS_WidthAuto = false;
    @observable isFontVS_WeightAuto = false;
    @observable isFontVS_ItalicAuto = false;

}
export default (new Store);