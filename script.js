let currentPage = 1;
const totalPages = 3;

function showPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > totalPages) {
        return;
    }

    currentPage = pageNumber;

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + currentPage)
        .classList.add("active");

    window.scrollTo(0, 0);

    const indicator = document.getElementById("pageIndicator");

    if (indicator) {
        indicator.textContent =
            "Page " + currentPage + " of " + totalPages;
    }
}

function nextPage() {
    showPage(currentPage + 1);
}

function prevPage() {
    showPage(currentPage - 1);
}