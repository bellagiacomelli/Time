document.addEventListener('DOMContentLoaded', function () {
  
  let firstImage = document.querySelector("[data-js='firstImage']");
  let images = document.querySelectorAll('img');
  let oldSource = firstImage.getAttribute('src');
  let oldTitle = firstImage.getAttribute('title');
  let oldAlt = firstImage.getAttribute('alt');
  let btnRoundCorners = document.getElementById('round-corners');
  let container = document.getElementById('container');
  const gridButtons = document.getElementsByClassName('grid-button');
  let imageTitle = document.getElementById('image-title');

  // // Get the elements with class="column"
  // let elements = document.getElementsByClassName('column');

  // // Declare a loop variable
  // var i;

  Array.from(images).forEach((image) => {
    image.addEventListener('click', (e) => {
      switchImages(e, firstImage, oldSource, oldTitle, oldAlt);
    });

    image.addEventListener('mouseenter', (e) => {
      showTitle(e, imageTitle);
    });
  });

  btnRoundCorners.addEventListener('click', () => {
    Array.from(images).forEach((image) => {
      image.classList.toggle('rounded');
    });
  });

  Array.from(gridButtons).forEach((gridButton) => {
    gridButton.addEventListener('click', (e) => {
      let gridSize = e.target.dataset['gridsize'];

      // remove active class from all buttons
      Array.from(gridButtons).forEach((gridButton) => {
        gridButton.classList.remove('active');
      });
      // add active class to the one we have selected
      gridButton.classList.add('active');

      container.classList.remove('one', 'two', 'four');
      if (gridSize == 1) {
        container.classList.add('one');
      } else if (gridSize == 2) {
        container.classList.add('two');
      } else if (gridSize == 4) {
        container.classList.add('four');
      }
    });
  });

  // $('.hover').mouseover(function () {
  //   $('.text').css('visibility', 'visible');
  // });
  // $('.hover').mouseout(function () {
  //   $('.text').css('visibility', 'hidden');
  // });
});

function switchImages(e, firstImage, oldSource, oldTitle, oldAlt) {
  var that = e.target;
  newSource = that.getAttribute('src');
  newTitle = that.getAttribute('title');
  newAlt = that.getAttribute('alt');
  // setting all the new attributes to the first, large image
  firstImage.setAttribute('src', newSource);
  firstImage.setAttribute('title', newTitle);
  firstImage.setAttribute('alt', newAlt);
  // setting the old attributes to the small, now changed preview
  that.setAttribute('src', oldSource);
  that.setAttribute('title', oldTitle);
  that.setAttribute('alt', oldAlt);
  oldSource = newSource;
  oldTitle = newTitle;
  oldAlt = newAlt;
}

function showTitle(e, imageTitle) {
  imageTitle.innerText = e.target.dataset['title'];
  imageTitle.parentNode.classList.add('active-title');
}
