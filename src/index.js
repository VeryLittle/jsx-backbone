// import {buildJsx} from 'estree-util-build-jsx';
// exports.buildJsx = buildJsx;

// var h = require('./hyperscript')
// window.hyperscript = h;

// import * as dom from 'incremental-dom';
// window.dom = dom;

// var h = require('incremental-hyperscript').h;
// window.hyperscript = h;

// import * as diffDom from "diff-dom";
// window.diffDom = diffDom;

// var h = require('virtual-dom/h')
// var createElement = require('virtual-dom/create-element');
// window.hyperscript = h;
// window.createElement = createElement;

import { createElement, Fragment } from "react";
import {render} from 'react-dom'
window.hyperscript = {
    h: createElement,
    f: Fragment,
    render: render,
};
