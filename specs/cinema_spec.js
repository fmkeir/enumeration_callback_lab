const assert = require('assert');
const Film = require('../models/film');
const Cinema = require('../models/cinema');

describe('Cinema', function(){
  let film1;
  let film2;
  let film3;
  let cinema;

  beforeEach(function() {
    film1 = new Film('Gladiator', 'Action', '2000', 155);
    film2 = new Film('Labyrinth', 'Adventure', '1986', 101);
    film3 = new Film('In Bruges', 'Comedy', '2008', 107);
    films = [film1, film2, film3];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function(){
    assert.deepStrictEqual(cinema.films, films);
  });

  it('should be able to get a list of film titles', function (){
    assert.deepStrictEqual(cinema.getFilmTitles(), ['Gladiator', 'Labyrinth', 'In Bruges'])
  });

  it('should be able to find a film by title', function(){
    assert.deepStrictEqual(cinema.findFilm('Labyrinth'), film2)
  })

  it('should be able to filter films by genre')

  it('should be to check whether there are some films from a particular year')

  it('should be able to check whether all films are over a particular length')

  it('should be able to calculate the total running time of all films')

});
