document.querySelectorAll('.box').forEach((box, i) => {
    box.addEventListener('mouseenter', function () {
        removeClass()
        removeClassText()
        this.classList.add('active');
        document.querySelectorAll('.box-text')[i].classList.add('active')
    })
})

const removeClass = () => {
    document.querySelectorAll('.box').forEach((box) => {
        box.classList.remove('active');
    })
}

const removeClassText = () => {
    document.querySelectorAll('.box-text').forEach((box) => {
        box.classList.remove('active');
    })
}