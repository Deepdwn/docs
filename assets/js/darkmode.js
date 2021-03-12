import ready from './ready';

const toggleButton = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
};

ready(function () {
  document.getElementById('mode').addEventListener('click', toggleButton)
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
})
