import calc from './parts/calc';
import form from './parts/form';
import maskNum from './parts/masknum';
import modal from './parts/modal';
import scroll from './parts/scroll';
import slider from './parts/slider';
import tabs from './parts/tabs';
import timer from './parts/timer';

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    calc();
    form();
    maskNum();
    modal();
    scroll();
    slider();
    tabs();
    timer();
});