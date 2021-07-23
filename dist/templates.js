const clickHandler = () => {
  alert('click');
};
window.template = function () {
  return h(MyComp, null, 1 + 1, h("div", {
    className: 'lala',
    onClick: clickHandler
  }));
};
