function cycleArray(array) {
  array.forEach(item => {
    if (window.location.hash.slice(1) === item.pageName) {
      item.render();
    }
  });
}

export function routing(buttonBlock, attr, array) {
  cycleArray(array);
  
  buttonBlock.addEventListener('click', (event) => {
    event.preventDefault();

    let element = event.target;

    if (element.hasAttribute(attr) && element.getAttribute(attr) != window.location.hash.slice(1)) {
      

      array.forEach(item => {
        if (window.location.hash.slice(1) === item.pageName) {
          item.pageClearHandler();
        }
      });

      window.location.hash = event.target.getAttribute(attr);

      cycleArray(array);
    }
  });
}

//window.location.hash.slice(1)
//window.location.hash = hash

