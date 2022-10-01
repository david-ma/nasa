// https://d3js.org/d3-ease/ v1.0.6 Copyright 2019 Mike Bostock
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((n=n||self).d3=n.d3||{})}(this,function(n){"use strict";function t(n){return((n*=2)<=1?n*n:--n*(2-n)+1)/2}function e(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var u=function n(t){function e(n){return Math.pow(n,t)}return t=+t,e.exponent=n,e}(3),r=function n(t){function e(n){return 1-Math.pow(1-n,t)}return t=+t,e.exponent=n,e}(3),a=function n(t){function e(n){return((n*=2)<=1?Math.pow(n,t):2-Math.pow(2-n,t))/2}return t=+t,e.exponent=n,e}(3),o=Math.PI,i=o/2;function c(n){return(1-Math.cos(o*n))/2}function s(n){return((n*=2)<=1?Math.pow(2,10*n-10):2-Math.pow(2,10-10*n))/2}function f(n){return((n*=2)<=1?1-Math.sqrt(1-n*n):Math.sqrt(1-(n-=2)*n)+1)/2}var h=4/11,p=6/11,M=8/11,d=.75,I=9/11,l=10/11,O=.9375,x=21/22,w=63/64,v=1/h/h;function m(n){return(n=+n)<h?v*n*n:n<M?v*(n-=p)*n+d:n<l?v*(n-=I)*n+O:v*(n-=x)*n+w}var y=function n(t){function e(n){return n*n*((t+1)*n-t)}return t=+t,e.overshoot=n,e}(1.70158),B=function n(t){function e(n){return--n*n*((t+1)*n+t)+1}return t=+t,e.overshoot=n,e}(1.70158),C=function n(t){function e(n){return((n*=2)<1?n*n*((t+1)*n-t):(n-=2)*n*((t+1)*n+t)+2)/2}return t=+t,e.overshoot=n,e}(1.70158),E=2*Math.PI,P=function n(t,e){var u=Math.asin(1/(t=Math.max(1,t)))*(e/=E);function r(n){return t*Math.pow(2,10*--n)*Math.sin((u-n)/e)}return r.amplitude=function(t){return n(t,e*E)},r.period=function(e){return n(t,e)},r}(1,.3),b=function n(t,e){var u=Math.asin(1/(t=Math.max(1,t)))*(e/=E);function r(n){return 1-t*Math.pow(2,-10*(n=+n))*Math.sin((n+u)/e)}return r.amplitude=function(t){return n(t,e*E)},r.period=function(e){return n(t,e)},r}(1,.3),k=function n(t,e){var u=Math.asin(1/(t=Math.max(1,t)))*(e/=E);function r(n){return((n=2*n-1)<0?t*Math.pow(2,10*n)*Math.sin((u-n)/e):2-t*Math.pow(2,-10*n)*Math.sin((u+n)/e))/2}return r.amplitude=function(t){return n(t,e*E)},r.period=function(e){return n(t,e)},r}(1,.3);n.easeBack=C,n.easeBackIn=y,n.easeBackInOut=C,n.easeBackOut=B,n.easeBounce=m,n.easeBounceIn=function(n){return 1-m(1-n)},n.easeBounceInOut=function(n){return((n*=2)<=1?1-m(1-n):m(n-1)+1)/2},n.easeBounceOut=m,n.easeCircle=f,n.easeCircleIn=function(n){return 1-Math.sqrt(1-n*n)},n.easeCircleInOut=f,n.easeCircleOut=function(n){return Math.sqrt(1- --n*n)},n.easeCubic=e,n.easeCubicIn=function(n){return n*n*n},n.easeCubicInOut=e,n.easeCubicOut=function(n){return--n*n*n+1},n.easeElastic=b,n.easeElasticIn=P,n.easeElasticInOut=k,n.easeElasticOut=b,n.easeExp=s,n.easeExpIn=function(n){return Math.pow(2,10*n-10)},n.easeExpInOut=s,n.easeExpOut=function(n){return 1-Math.pow(2,-10*n)},n.easeLinear=function(n){return+n},n.easePoly=a,n.easePolyIn=u,n.easePolyInOut=a,n.easePolyOut=r,n.easeQuad=t,n.easeQuadIn=function(n){return n*n},n.easeQuadInOut=t,n.easeQuadOut=function(n){return n*(2-n)},n.easeSin=c,n.easeSinIn=function(n){return 1-Math.cos(n*i)},n.easeSinInOut=c,n.easeSinOut=function(n){return Math.sin(n*i)},Object.defineProperty(n,"__esModule",{value:!0})});
