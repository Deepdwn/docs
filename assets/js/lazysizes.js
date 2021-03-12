import 'lazysizes';

document.addEventListener("turbo:before-cache", () => {
  const flash = document.querySelectorAll('[data-turbo-cache="false"]');
  for (var i=0, l=flash.length; i<l; i++) {
    flash[i].remove();
  }
});