'use strict';

const movies = [];

let more = true;
while (more) {
  const title = prompt('Insert movie title');
  const rating = prompt('Insert rating for the movie on scale 1 to 5');
  const movie = {title, rating};
  movies.push(movie);
  more = confirm('Do you want to keep entering movies?');
}

// const movies = [
//   {title: 'movie 1', rating: '2'},
//   {title: 'simpsons movie', rating: '0'},
//   {title: 'not a real movie', rating: '5'},
//   {title: 'paska leffa', rating: '4'},
// ];

function sortMovies(a, b) {
  const comparison = b.rating - a.rating;
  return comparison;
}

movies.sort(sortMovies);

console.log(movies);
for (const movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('target').append(tr);
}

document.getElementById('fav').innerText = movies[0].title;
