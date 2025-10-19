const spin = () => {
  document.getElementById('card').classList.add('flip');
};

const back = () => {
  document.getElementById('card').classList.remove('flip');
};

const hide = () => {
  document.getElementById('box').style.display = 'none';
  document.getElementById('show-button').style.display = 'inline-block';
};

const show = () => {
  document.getElementById('box').style.display = 'block';
  document.getElementById('show-button').style.display = 'none';
};
