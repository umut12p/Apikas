document.querySelectorAll('.movie-item').forEach(item => {
    item.addEventListener('click', event => {
        const movie = event.currentTarget.dataset.movie;
        const detailsPage = document.getElementById('detailsPage');
        const mainPage = document.getElementById('mainPage');

        // Hier kannst du die Details für jeden Film anpassen
        const movieData = {
            Smile: {
                title: "Smile",
                description: "Ein unheimlicher Horrorfilm über Lächeln, das nicht verschwindet.",
                poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Smile-Final-Movie-Poster.jpg"
            },
            Jungle: {
                title: "Jungle",
                description: "Ein Abenteuerfilm, der im tiefen Dschungel spielt.",
                poster: "https://tse3.mm.bing.net/th?id=OIP.0oFPK3QTKtjlEIBbCQwMagHaKc&pid=Api&P=0&h=180"
            },
            Babylon: {
                title: "Babylon",
                description: "Ein Epos über die glorreichen Tage Hollywoods.",
                poster: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/brad-pitt-babylon.jpeg"
            },
            Mario: {
                title:"Mario",
                description: "Ein Film für Kinder und Familie, spielfilm",
                poster: "https://tse3.mm.bing.net/th?id=OIP.8uxZuWYiVl4VBnTluf4rugHaLu&pid=Api&P=0&h=180"
            }

            // Füge mehr Filme hier hinzu
        };

        // Aktuelle Filmdaten setzen
        document.getElementById('movieTitle').innerText = movieData[movie].title;
        document.getElementById('movieDescription').innerText = movieData[movie].description;
        document.getElementById('moviePoster').src = movieData[movie].poster;

        // Seitenwechsel
        mainPage.style.display = 'none';
        detailsPage.style.display = 'flex';
    });
});

document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('detailsPage').style.display = 'none';
});
