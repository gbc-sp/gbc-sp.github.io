var options = {
  debug: 'info',
  modules: {
    toolbar: '#toolbar'
  },
  placeholder: 'Compose an epic...',
  readOnly: true,
  theme: 'bubble'
};

var container = document.getElementById('container');
editor = new Quill(container, options);
