

const colors = ['#FF8C69', '#f44242', '#41f462', '#41a0f4', '#8611e0', '#fff83a'];

$('.btnCenter').click( function() {
  let color = document.querySelector('#output').style.color = colors[Math.floor(Math.random() * 6)];
});
