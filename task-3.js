const listImagesRef = document.querySelector('#gallery');
const imagesCreate = imagesList(images);

function imagesList(images) {
    return images.map(({ url, alt }) => {
        return `<li><img src="${url}" alt="${alt}"></li>`;
    });
}
listImagesRef.insertAdjacentHTML('beforeend', imagesCreate);

console.log(imagesList(images));