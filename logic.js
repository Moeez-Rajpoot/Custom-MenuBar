const selectbar = document.getElementById('select');
const option = document.getElementsByTagName('li');
const optiondiv = document.getElementById('list');
const selectbartxt = document.getElementById('value'); 
const img = document.getElementById('arrow');

selectbar.addEventListener('click', () => {
  optiondiv.classList.toggle('hide');
  img.classList.toggle('rotate');
});

const optionArray = Array.from(option);

optionArray.forEach(item => {
    item.addEventListener('click', function(event) {
    const clickedSpan = event.currentTarget.querySelector('span');
    selectbartxt.innerText = clickedSpan.textContent;
    optiondiv.classList.toggle('hide');
    img.classList.toggle('rotate');

  });
});
