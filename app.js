function createModal() {
    document.querySelector("body").insertAdjacentHTML(
        'beforeend', `
        <div class="modal_container" hidden="true">
            <div class="modal">
                <div class="modal_overlay">
                    <div class="modal_btns">
                        <div class="btn_previous">
                            <button>previous</button>
                        </div>
                        
                        <div class="btn_close">
                            <button>next</button>
                        </div>
                        <div class="btn_next">
                            <button>close</button>
                        </div>
                    </div>
                </div>
                <div class="modal_img">
                    <img class="modal_img_size" src="./assets/images/dolphins.jpg" alt="dolphin"/>
                    <img class="modal_img_size" src="./assets/images/elephant.jpg" alt="dolphin"/>
                    <img class="modal_img_size" src="./assets/images/giraffes.jpg" alt="dolphin"/>
                    <img class="modal_img_size" src="./assets/images/goat.jpg" alt="dolphin"/>
                    <img class="modal_img_size" src="./assets/images/kangaroo.jpg" alt="dolphin"/>
                </div>
            </div>
        </div>
        
    `)
    console.log("working")
};

createModal();

// modal object
// class Modal {
//     constructor(modal) {
//         this.modal = modal;
        // this.attachEventListeners(); 
//     }

//     openModal(){
//         document.querySelectorAll('[data-model="true"]');
//         this.modal.removeAttribute('hidden');
//         this.modal.classList.add('active');
//     }

//     closeModal(){
//         this.modal.classList.removeAttribute('active');
//         this.modal.setAttribute('hidden', 'true');
//     }

    // attachEventListeners(){
    //     this.modal.addEventlistener('click', (e) => {
    //         e.target.classList.contains('btn_close')
    //         ? this.modal.close(): null;
    //     })
    // }
// }

// get modal
const modalContainer = document.querySelector('.modal_container');
const modal = new modal(modalContainer);
console.log(modal);

// function openImageEventListeners(){
//     document.querySelectorAll('[data-modal="true"]').forEach((modal) => {
//         modal.addEventlistener('click', () => {
//             modal.openModal();
//         })
//     })
// }

// openImageEventListeners();