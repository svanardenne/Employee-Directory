/* ============================================= */
/*                Search function                */
/* ============================================= */
const search = document.querySelector('.search');
const searchbar = document.querySelector('.searchbar');
const card = document.getElementsByClassName('card');
const names = document.getElementsByClassName('name');

search.addEventListener('keyup', (e) => {
    let search = searchbar.value.toLowerCase();
    for (i = 0; i < card.length; i++) {
        let name = names[i].textContent.toLowerCase();
        console.log(name);
        console.log(search);
        if (name.includes(search)) {
            card[i].classList.remove('hidden');
        } else {
            card[i].classList.add("hidden");
        }
    }
});