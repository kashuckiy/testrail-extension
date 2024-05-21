let textareas = document.querySelectorAll('textarea');
let addStep = document.querySelector('.addStep');

textareas.forEach((textarea) => {
    textarea.addEventListener('input', setHeight);
    setHeight.call(textarea);
});

function setHeight() {
    this.style.height = 'auto'; 
    this.style.height = this.scrollHeight + 7 + 'px';
}

// styles for <textarea>
textareas.forEach((textarea) => {
    textarea.style.overflow = 'hidden';
    textarea.style.padding = '10px';
    textarea.style.border = '1px solid #aecade';
});

// addStep.addEventListener("click", () => {
//     setTimeout( () => {
//         textareas = document.querySelectorAll('textarea');
//         console.log(textareas.length);
//         textareas.forEach((textarea) => {
//             textarea.addEventListener('input', setHeight);
//             setHeight.call(textarea);
//         }); 
//     }, 1000);
// });



let observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            let textareas = document.querySelectorAll('textarea');
            textareas.forEach((textarea) => {
                textarea.addEventListener('input', setHeight);
                setHeight.call(textarea);
            });
        }
    });
});

let config = { childList: true, subtree: true };
observer.observe(document.body, config);
