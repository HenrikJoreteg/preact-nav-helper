import{h as n}from"preact";var t=function(n){return"A"===n.tagName?n:n.parentElement?t(n.parentElement):null},e=function(n){return n&&n.origin===window.location.origin?n.href.replace(window.location.origin,""):null};function r(r){var a=r.onInternalNav,i=r.children,l=r.className;return n("div",{className:l,onClick:function(n){var r=t(n.target);if(r&&"_blank"!==r.target){var i=e(r),l=n.ctrlKey||n.shiftKey||n.altKey||n.metaKey||0!==n.button;i&&!l&&(n.preventDefault(),a(i))}}},i)}export default r;
//# sourceMappingURL=index.m.js.map