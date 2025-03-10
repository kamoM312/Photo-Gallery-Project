function createModal() {
    document.querySelector("body").insertAdjacentHTML(
        'beforeend', `
        <div class="modal_container">
            <div class="modal">
                <div class="modal_overlay">
                    <div class="modal_btns">
                        <div class="btn_previous">
                            <button>previous</button>
                        </div">
                        
                        <div class="btn_close">
                            <button>close</button>
                        </div">
                        <div class="btn_next">
                            <button>next</button>
                        </div">
                    </div>
                </div>
                <div class="modal_img">
                    <img src="./assets/images/dolphins.jpg" alt="dolphin"/>
                </div>
            </div>
        </div>
        
    `)
    console.log("working")
};

createModal();