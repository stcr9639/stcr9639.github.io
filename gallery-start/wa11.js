const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['Doggy1.jpg', `Doggy2.jpg`, `Chewie.jpg`, `Lifeguard.jpg`, `SeniorSunrise.jpg`];
const alts = {
  'Doggy1.jpg' : 'Closeup of a human eye',
  'Doggy2.jpg' : 'Rock that looks like a wave',
  'Chewie.jpg' : 'Purple and white pansies',
  'Lifeguard.jpg' : 'Section of wall from a pharoah\'s tomb',
  'SeniorSunrise.jpg' : 'Large moth on a leaf'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
