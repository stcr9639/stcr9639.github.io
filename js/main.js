const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "And it didn't help that he sometimes walked into walls while reading, or that his favoirte books hailed from that dusty, 100 °F, sublevel where no one else cared to go. He drifted about with his head full of myths, always at least half lost in some otherland of a story. :insertx:, seraphim and spirits, he loved it all. He believe in magic, like a child, and in ghosts, like a peasant. His nose was :inserty: by a 20 pound, falling volume of :insertz: his first day on the job, and that, they said, told you everything you need to know about strange Lazlo Strange. \n - from Strange the Dreamer, Laini Taylor";

const insertX = ["Demons and wingsmiths", "Ghouls and goblins", "Wizards and warlocks"];
const insertY = ["broken", "dented", "crooked"];
const insertZ = ["fairy tales", "mythology", "spells"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText; 
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);



  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Lazlo", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(20*0.0714286)} stone`;
    const temperature =  `${Math.round((100-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('100 °F', temperature);
    newStory = newStory.replaceAll('20 pound', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}