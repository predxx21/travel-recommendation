function search() {
    const query = document.getElementById('search').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const data = {
        playas: [
            { name: 'Playa del Carmen', img1: 'images/playa1.jpg', img2: 'images/playa2.jpg' }
        ],
        templos: [
            { name: 'Templo de Angkor', img1: 'images/templo1.jpg', img2: 'images/templo2.jpg' }
        ],
        paises: [
            { name: 'Japón', img1: 'images/pais1.jpg', img2: 'images/pais2.jpg' }
        ]
    };

    if (query.includes('playa')) {
        showResults(data.playas, 'playa');
    } else if (query.includes('templo')) {
        showResults(data.templos, 'templo');
    } else if (query.includes('pais') || query.includes('país')) {
        showResults(data.paises, 'país');
    } else {
        resultsDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}

function showResults(items, type) {
    const resultsDiv = document.getElementById('results');
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'recommendation';
        div.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.img1}" alt="${item.name}">
            <img src="${item.img2}" alt="${item.name}">
        `;
        resultsDiv.appendChild(div);
    });
}
