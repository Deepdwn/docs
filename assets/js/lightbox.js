import lightbox from 'simple-lightbox';
import ready from './ready'

ready(function () {
  const lightboxes =  document.querySelectorAll('[data-lightbox]')
  if (!lightboxes) {
    return
  }
  new lightbox({
    elements: lightboxes
  })
})