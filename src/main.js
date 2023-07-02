window.onload = () => {
    const form = document.querySelector('#poke-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const ul = document.querySelector('#poke-container');
        ul.innerHTML = '';
        const pokes = getPoke();
        pokes.map(poke => api(poke));
    }
}

const getPoke = () => {
    const pokes = [];
    for(let i = 0; i < 6; i++) {
        const pokesNum = Math.floor(Math.random() * 1010);
        pokes.push(pokesNum);
    }
    return pokes;
}

const api = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => render(`No.${data.id} ${data.name}`, data.id))
}

const render = (poke, id) => {
    const app = document.querySelector('#poke-container');
    const p = document.createElement('p');
    p.innerHTML = poke;
    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const li = document.createElement('li');
    li.appendChild(img);
    li.appendChild(p);
    app.appendChild(li);
}