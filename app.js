function createModal() {
    document.querySelector("body").insertAdjacentElement(
        'beforeend', `
        <div class="modal_container">
            <div class="modal">
                <div class="modal_overlay">
                    <div class="btn_previous"></div">
                    <div class="btn_close"></div">
                    <div class="btn_next"></div">
                </div>
            </div>
        </div>
        `
    )
}

createModal();