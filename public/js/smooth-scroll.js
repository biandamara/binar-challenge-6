// smooth scroll
document.querySelectorAll(".smooth-scroll").forEach((trigger) => {
    const targetPath = trigger.getAttribute("href");
    const targetPosition = document
        .querySelector(targetPath)
        .getBoundingClientRect().top;
    if (!Kodhus.Utils.cssSupports("scroll-behavior", "smooth")) {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            Kodhus.Utils.scrollTo(targetPosition + window.scrollY, 400, () => {
                history.pushState(null, null, targetPath);
            });
        });
    }
});
