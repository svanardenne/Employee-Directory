/* ============================================= */
/*                Search function                */
/* ============================================= */
const search = document.querySelector('.search');
const searchbar = document.querySelector('.searchbar');
const card = document.getElementsByClassName('card');
const names = document.getElementsByClassName('name');


//Compares search value with names in array to create a search function
//Which filters results
search.addEventListener('keyup', (e) => {
    let search = searchbar.value.toLowerCase();
    for (i = 0; i < card.length; i++) {
        let name = names[i].textContent.toLowerCase();
        if (name.includes(search)) {
            card[i].classList.remove('hidden');
        } else {
            card[i].classList.add("hidden");
        }
    }
});