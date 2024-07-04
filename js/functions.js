IMAGE_LIMIT = 10

window.onload = async() => {
    showImages()
}

async function showImages() {
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    row1.innerHTML = '';
    row2.innerHTML = '';


    for (let index = 0; index < IMAGE_LIMIT; index++) {
        const targetRow = index < 5 ? row1 : row2;
        targetRow.append(await createImage());
    }

    createButton()
}

async function loadImages() {
    const {url} = await fetch("https://picsum.photos/200/200")
    return url
}

async function createImage() {
    let image = document.createElement('img')
    image.src = await loadImages()

    return image
}

function createButton() {
    const buttonContainer = document.getElementById('buttonContainer')
    buttonContainer.innerHTML = ''
    const button = document.createElement('button')
    button.textContent = 'Refrescar'
    button.addEventListener("click", showImages)
    
    buttonContainer.append(button)
}