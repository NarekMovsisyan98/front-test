let add=document.querySelector(".burger")
add.addEventListener("click",newburger)
function newburger() {
    add.classList.toggle('active')
    document.querySelector('.navbar').classList.toggle('open')
}

const body = document.body
const scrollUp = "scroll-up"
const scrollDown = "scroll-down"
let lastScroll = 0

const onWindowScroll = () => {
    const currentScroll = window.pageYOffset

    if (currentScroll === 0) {
        body.classList.remove(scrollUp)
        return
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp)
        body.classList.add(scrollDown)
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        // up
        body.classList.remove(scrollDown)
        body.classList.add(scrollUp)
    }

    lastScroll = currentScroll
}

window.addEventListener("scroll", onWindowScroll)
