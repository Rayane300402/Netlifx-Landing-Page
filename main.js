const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(item => item.addEventListener('click', selectItem));

function selectItem(e) {
    // remove the tab-border for all actually same for show
    removeBorder();
    removeShow();
    // then we add the tab-border to the current tab we clicked on
    this.classList.add('tab-border');
    // then we get the content item that has the same id as the tab we clicked on
    const tabContentItem = document.querySelector(`#${this.id}-content`); //this.id = tab-1, tab-2, tab-3, this is the item from the tabItems si id is the id the div has in the html
    // then we add the show class to the content item
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}