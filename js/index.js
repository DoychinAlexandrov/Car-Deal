
setTimeout(() => {
    const navBtn = document.querySelector(".nav-trigger")
    const mobileContent = document.querySelector(".header__content")

    navBtn.addEventListener("click", function onClick(event) {
        mobileContent.classList.toggle("is-visible")

        this.classList.toggle("is-active")

        event.preventDefault();
    });

}, "1000")
