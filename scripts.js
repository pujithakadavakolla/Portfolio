const pageTurnBtns = document.querySelectorAll('.nextprev-btn');
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');
const backProfileBtn = document.querySelector('.back-profile');
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

let totalPages = pages.length;
let pageNumber = 0;

const turnPage = (pageTurn, index, add) => {
    if (add) {
        pageTurn.classList.add('turn');
        setTimeout(() => {
            pageTurn.style.zIndex = 20 + index;
        }, 500);
    } else {
        pageTurn.classList.remove('turn');
        setTimeout(() => {
            pageTurn.style.zIndex = 20 - index;
        }, 500);
    }
};

pageTurnBtns.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        turnPage(pageTurn, index, !pageTurn.classList.contains('turn'));
    };
});

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            turnPage(page, index, true);
        }, (index + 1) * 200 + 100);
    });
};

const reverseIndex = () => {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
};
// Function to reset all pages and go back to profile
backProfileBtn.onclick = () => {
    let reversePageIndex = totalPages - 1; // Start from the last page

    // Loop through all pages and reverse the turning
    pages.forEach((page, index) => {
        setTimeout(() => {
            // Remove the turn class to turn the page back
            page.classList.remove('turn');
            // Adjust zIndex for smooth reverse animation
            page.style.zIndex = totalPages - index; // Decrease zIndex for reverse

            reversePageIndex--;

            // Reset the reversePageIndex if it goes below zero
            if (reversePageIndex < 0) {
                reversePageIndex = totalPages - 1; // Reset to last page if needed
            }
        }, (index + 1) * 200); // Delay for smoother animation
    });

    // Reset the pageNumber to 0
    pageNumber = 0;
};

// Ensure cover page transitions smoothly on load
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

let openPageNumber = totalPages - 1; // Start from the last page

pages.forEach((_, index) => {
    setTimeout(() => {
        pages[openPageNumber].classList.remove('turn');
        pages[openPageNumber].style.zIndex = 10 + index;
        openPageNumber--;
        if (openPageNumber < 0) {
            openPageNumber = totalPages - 1;
        }
    }, (index + 1) * 200 + 2100);
});
