var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "chart", "d3", "jquery", "datatables.net"], function (require, exports, chart_1, d3, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    d3 = __importStar(d3);
    jquery_1 = __importDefault(jquery_1);
    console.log('Running map.ts');
    jquery_1.default.when(jquery_1.default.ready).then(function () {
        const chart = new chart_1.Chart({
            element: 'exampleDiv',
            margin: 20,
            width: 800,
            height: 600,
            nav: false
        }).scratchpad((chart) => {
            console.log(chart);
            d3.csv("/dataviz/aiatsis_austlang_endpoint_001.csv", function (row) {
                console.log(row);
                return row;
            }).then(d => {
            });
        });
    });
    drawMap(-17, 131, "asdf");
    var x = document.getElementById("demo");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
    getLocation();
    function drawMap(lat, long, place) {
        console.log('Drawing map', {
            lat: lat,
            long: long,
            place: place
        });
        const w = 600;
        const h = 600;
        const projection = d3.geoMercator()
            .center([Math.floor(long), Math.floor(lat)])
            .translate([w / 2, h / 2])
            .scale(1000);
        const path = d3.geoPath()
            .projection(projection);
        const color = d3.scaleOrdinal()
            .range(['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9']);
        const svg = d3.select('#map-canvas')
            .append('svg')
            .attr('viewBox', `0 0 ${w} ${h}`)
            .attr('width', w)
            .attr('height', h);
        d3.json('/dataviz/aust.json').then((json) => {
            svg.selectAll('path')
                .data(json.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('stroke', 'dimgray')
                .attr('fill', function (d, i) { return color(i); });
            svg.selectAll('text')
                .data(json.features)
                .enter()
                .append('text')
                .attr('fill', 'darkslategray')
                .attr('transform', function (d) { return 'translate(' + path.centroid(d) + ')'; })
                .attr('text-anchor', 'middle')
                .attr('dy', '.35em')
                .style('opacity', 0.5)
                .text(function (d) {
                return d.properties.STATE_NAME;
            });
            svg.append('text')
                .attr('x', w / 2)
                .attr('y', h / 2 - 15)
                .attr('font-size', 16)
                .attr('font-weight', 'bold')
                .attr('font-family', 'FontAwesome')
                .attr('text-anchor', 'middle')
                .classed('fa fa-map-marker', true)
                .text('\uf041');
            svg.append('text')
                .attr('x', w / 2)
                .attr('y', h / 2)
                .attr('font-size', 16)
                .attr('font-weight', 'bold')
                .attr('font-family', 'Roboto')
                .attr('text-anchor', 'middle')
                .text(place);
        });
    }
    drawMarker(-23, 131, 'hello');
    function drawMarker(lat, long, place) {
        console.log('Drawing marker', {
            lat: lat,
            long: long,
            place: place
        });
        const w = 600;
        const h = 600;
        const projection = d3.geoMercator()
            .center([Math.floor(long), Math.floor(lat)])
            .translate([w / 2, h / 2])
            .scale(1000);
        const path = d3.geoPath()
            .projection(projection);
        const color = d3.scaleOrdinal()
            .range(['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9']);
        const svg = d3.select('#map-canvas svg');
        svg.append('text')
            .attr('x', w / 2)
            .attr('y', h / 2 - 15)
            .attr('font-size', 16)
            .attr('font-weight', 'bold')
            .attr('font-family', 'FontAwesome')
            .attr('text-anchor', 'middle')
            .classed('fa fa-map-marker', true)
            .text('\uf041');
        svg.append('text')
            .attr('x', w / 2)
            .attr('y', h / 2)
            .attr('font-size', 16)
            .attr('font-weight', 'bold')
            .attr('font-family', 'Roboto')
            .attr('text-anchor', 'middle')
            .text(place);
    }
    globalThis.drawMap = drawMap;
});
