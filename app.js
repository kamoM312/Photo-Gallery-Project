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