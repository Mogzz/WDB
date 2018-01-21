var someObject = {
  friends: [{
      name: "Malfoy"
    },
    {
      name: "Boyle"
    },
    {
      name: "Goyle"
    }
  ],
  color: "baby blue",
  isEvil: true
};

someObject.friends[0].name

//Movie Database array

var movieDB = [{
  title: "The Lord of the Rings: The Fellow Ship of the Ring",
  rating: 5,
  hasWatched: true
}, {
  title: "The Lord of the Rings: The Two Towers",
  rating: 5,
  hasWatched: true
}, {
  title: "The Lord of the Rings: The Return of the King",
  rating: 5,
  hasWatched: true
}, {
  title: "Dunkirk",
  rating: 3,
  hasWatched: false
}];

function printMovieDB() {
  movieDB.forEach(function(movie) {
    if (movie.hasWatched) {
      console.log("You have watched " + "\"" + movie.title + " - " + movie.rating + " stars");
    } else {
      console.log("You have not watched " + "\"" + movie.title + " - " + movie.rating + " stars");
    }
  });
}

printMovieDB();


//Document objext model Document Object Model