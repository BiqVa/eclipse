const moon = document.querySelector('.moon')
body = document.querySelector('.body')
sun = document.querySelector('.sun')

mySelect.addEventListener('mouseover', function(e) {
    // Данный элемент нужно выделить с помощью класса "highlight".
    if(e.target.tagName === 'OPTION') e.target.classList.add('highlight');
  })


