import "babel-polyfill";

const props = {
  className: 'tiger-button',
  loading: false,
  clicked: true,
  disabled: 'disabled'
};

const { loading = false, clicked } = props;

console.log(loading);
console.log(clicked);
