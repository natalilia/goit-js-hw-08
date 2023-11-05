// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const list = document.querySelector(".gallery");
list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick);



function createMarkup(arr){
    return arr
    .map(({preview, original, description}) =>
    ` <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `,
   
    ) 
    .join("");
}
function handleClick(event){
    event.preventDefault();
    const source = event.target.dataset.source;

    if (event.target === event.currentTarget){
        return; 
    }

const instance = basicLightbox.create(
    `
<img src="${source}" width="800" height="600">`,
{
    onShow: (instance) => {
      document.addEventListener("keydown", handleKeyDown);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", handleKeyDown);
    },
  },
);
function handleKeyDown(event) {
    if(event.key === "Escape"){
        instance.close();
    }
}
instance.show();
}