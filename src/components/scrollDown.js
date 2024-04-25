/* If you scroll up oder down it shows the content with an animation */
export function handleScroll() {
    const elements = document.querySelectorAll('.featureContent');
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (
            rect.top >= 0 &&
            rect.bottom <= windowHeight &&
            rect.height <= windowHeight
        ) {
            element.classList.add('showContent');
        }
    });
};

window.addEventListener('scroll', handleScroll);