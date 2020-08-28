/* ============================================= */
/*                Search function                */
/* ============================================= */
const search = document.querySelector('.search');
const searchbar = document.querySelector('.searchbar');
const card = document.querySelectorAll('.card');
const names = document.getElementsByClassName('name');

search.addEventListener('keyup', (e) => {
    for (i = 0; i < names.length; i++) {
        let name = names[i]
        console.log(name);
        console.log(searchbar.value);
        if (searchbar.value.includes(name)) {
            card[i].style.display = 'block';
        } else {
            card[i].style.display = 'hidden';
        }
    }
});