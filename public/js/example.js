var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "chart", "jquery", "datatables.net"], function (require, exports, chart_1, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    console.log('Running example.ts');
    jquery_1.default.when(jquery_1.default.ready).then(function () {
        const chart = new chart_1.Chart({
            element: 'exampleDiv',
            margin: 20,
            width: 800,
            height: 600,
            nav: false
        }).scratchpad((chart) => {
        });
    });
});
