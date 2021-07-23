const clickHandler = function () {
  debugger;
  alert('click');
};
window.template = function () {
  return hyperscript("div", null, hyperscript("div", {
    className: 'lala',
    onclick: clickHandler
  }, "Click me"));
};
