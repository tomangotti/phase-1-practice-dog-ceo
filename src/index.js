console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", (e) => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(imagesOfDogs => imagesOfDogs.message.forEach(addImages))
})

function addImages(image){
    const img = document.createElement('img');
    img.src = image;
    const div = document.querySelector('#dog-image-container');
    div.append(img);
}

document.addEventListener("DOMContentLoaded", (e) => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    //.then(content => console.log(content))
    .then(breedOfDogs => Object.keys(breedOfDogs.message).forEach(addbreed))
    
})

function addbreed(breed) {
    const unlistedBreed = document.createElement('li');
    unlistedBreed.textContent = breed;
    unlistedBreed.className = 'breed-list';
    unlistedBreed.style.cursor = 'pointer';
    document.querySelector('#dog-breeds').append(unlistedBreed);
    unlistedBreed.addEventListener('click', (e) => {
        console.log('iwas clicked');
        unlistedBreed.style.color = 'orange';
    })
}

document.addEventListener("DOMContentLoaded", (e)=> {
    const optionList = document.querySelector('#breed-dropdown');
    optionList.addEventListener('change', (e) => {
        console.log('event happened!')
        const letter = e.target.value;
        console.log(letter);

        const listObj = document.querySelectorAll('.breed-list');
        console.log(listObj[5].textContent);
        listObj.forEach(x => x.style.display = 'none')
        listObj.forEach(value => {
            if(value.textContent.slice(0,1) === letter){
                console.log(value.textContent)
                value.style.display = ''
            }
        })
     

        })
    })






