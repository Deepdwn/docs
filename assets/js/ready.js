export default function (fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
  document.documentElement.addEventListener('turbo:load', fn)
}