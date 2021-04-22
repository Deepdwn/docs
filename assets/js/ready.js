export default function (fn) {
  document.documentElement.addEventListener('turbo:load', fn)
}