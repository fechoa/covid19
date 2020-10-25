// Header script start
(function () {
    const adviceMenu = document.querySelector('.advice__list');
    const adviceClick = document.querySelector('.advice-menu');
    const arrow = document.querySelector('.arrow-ico');

    adviceClick.onclick = function() {
        if (adviceMenu.classList.contains('advice__list--active')) {
            adviceMenu.classList.remove('advice__list--active'); 
            arrow.classList.toggle('arrow-ico--active');
        } 
        else {
            adviceMenu.classList.add('advice__list--active');
            arrow.classList.toggle('arrow-ico--active');
        }
    } 
    
}());
// Header script end


// Drag & Drop script start
document.querySelectorAll(".dragdrop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".dragdrop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("dragdrop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("dragdrop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("dragdrop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".dragdrop-zone__prompt")) {
      dropZoneElement.querySelector(".dragdrop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = dropZoneElement.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }
// Drag & Drop script end

// Button selected ANALAZYS script start
const btnPlus = document.querySelector('.test-list__button-plus');
const btnMinus = document.querySelector('.test-list__button-minus');
const btnUnknown = document.querySelector('.test-list__button-unknown');
const btnQuestion = document.querySelector('.button-unknown--mobile');

const btnPlusActive = document.querySelector('.test-list__button-plus--active');
const btnMinusActive = document.querySelector('.test-list__button-minus--active');
const btnUnknownActive = document.querySelector('.test-list__button-unknown--active');

btnPlus.onclick = function() {
    if (!btnPlus.classList.contains('test-list__button-plus--active')) {
        btnPlus.classList.add('test-list__button-plus--active');
        btnMinus.classList.remove('test-list__button-minus--active');
        btnUnknown.classList.remove('test-list__button-unknown--active');
        btnQuestion.classList.remove('test-list__button-unknown--active');
    } else { false}
};
btnMinus.onclick = function() {
    if (!btnMinus.classList.contains('test-list__button-minus--active')) {
        btnMinus.classList.add('test-list__button-minus--active');
        btnPlus.classList.remove('test-list__button-plus--active');
        btnUnknown.classList.remove('test-list__button-unknown--active');
        btnQuestion.classList.remove('test-list__button-unknown--active');
    } else { false}
};
btnUnknown.onclick = function() {
    if (!btnUnknown.classList.contains('test-list__button-unknown--active')) {
        btnUnknown.classList.add('test-list__button-unknown--active');
        btnPlus.classList.remove('test-list__button-plus--active');
        btnMinus.classList.remove('test-list__button-minus--active');
        btnQuestion.classList.remove('test-list__button-unknown--active');
    } else { false}
};
btnQuestion.onclick = function() {
    if (!btnQuestion.classList.contains('test-list__button-unknown--active')) {
        btnQuestion.classList.add('test-list__button-unknown--active');
        btnPlus.classList.remove('test-list__button-plus--active');
        btnMinus.classList.remove('test-list__button-minus--active');
        btnUnknown.classList.remove('test-list__button-unknown--active');
    } else { false}
};
// Button selected ANALAZYS script end


// Button add ANALAZYS script start
const btnAdd = document.querySelector('.test-list__add');
const btnDel = document.querySelector('.test-list__del');

const parent = document.querySelector('#parent');
const li = document.createElement('li');
const testList = document.querySelector('.test-list');

btnAdd.onclick = function () {
    btnAdd.classList.add('visually-hidden');
    btnDel.classList.remove('visually-hidden');
}
// Button add ANALAZYS script end
