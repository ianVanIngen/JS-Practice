const items = document.querySelectorAll(".item")
const buttons = document.querySelectorAll(".filter-btn")
const breakfastItems = []
const lunchItems = []
const dinnerItems = []
const drinksItems = []
const menu = [breakfastItems, lunchItems, dinnerItems, drinksItems]

items.forEach((value, index) => {
    let currentItem = items[index]

    switch(currentItem.className) {
        case 'item breakfast':
            breakfastItems.push(currentItem)
            break;
        case 'item lunch':
            lunchItems.push(currentItem)
            break;
        case 'item dinner':
            dinnerItems.push(currentItem)
            break;
        case 'item drinks':
            drinksItems.push(currentItem)
            break; 
    }
})

function itemFilter(index) {
    if (index < 4) {
        menu.forEach ((v, i) =>{
            let menuIndex = menu[i]
            for (let j = 0; j < menuIndex.length; j++) {
                menuIndex[j].classList.add("hide")
            }
        })
        menu[index].forEach((v, j) => {
            let currentItem = menu[index][j]
            currentItem.classList.remove("hide")
        })
    }
    else {
        menu.forEach ((v, i) =>{
            let menuIndex = menu[i]
            for (let j = 0; j < menuIndex.length; j++) {
                menuIndex[j].classList.remove("hide")
            }
        })
    }
}

function filterItems(showItem) {
    switch (showItem) {
        case "breakfast":
            itemFilter(0)
            break;
        case "lunch":
            itemFilter(1)
            break;
        case "dinner":
            itemFilter(2)
            break;
        case "drinks":
            itemFilter(3)
            break;
        case "all":
            itemFilter(4)
            break;            
    }
}

buttons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        let currentBtn = buttons[index]
        switch(currentBtn.className) {
            case `filter-btn all-btn`:
                filterItems("all")
                break;
            case `filter-btn breakfast-btn`:
                filterItems("breakfast")
                break;
            case `filter-btn lunch-btn`:
                filterItems("lunch")
                break;
            case `filter-btn dinner-btn`:
                filterItems("dinner")
                break;  
            case `filter-btn drinks-btn`:
                filterItems("drinks")
                break;          
        }
    }) 
})