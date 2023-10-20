const movies = [
    {
      name: "Avatar",
      author: "James Cameron",
      year: 2009,
      actors: "Sam Worthington, Zoe Saldana"
    },
    {
      name: "Titanic",
      author: "James Cameron",
      year: 1997,
      actors: "Leonardo DiCaprio, Kate Winslet"
    },
    {
      name: "Star Wars: The Force Awakens",
      author: "J.J. Abrams",
      year: 2015,
      actors: "Daisy Ridley, John Boyega"
    },
    {
      name: "Avengers: Endgame",
      author: "Anthony Russo, Joe Russo",
      year: 2019,
      actors: "Robert Downey Jr., Chris Evans"
    },
    {
      name: "The Lion King",
      author: "Roger Allers, Rob Minkoff",
      year: 1994,
      actors: "Matthew Broderick, Jeremy Irons"
    },
    {
      name: "Jurassic World",
      author: "Colin Trevorrow",
      year: 2015,
      actors: "Chris Pratt, Bryce Dallas Howard"
    },
    {
      name: "Marvel's The Avengers",
      author: "Joss Whedon",
      year: 2012,
      actors: "Robert Downey Jr., Chris Evans"
    },
    {
      name: "Fast And Furious 7",
      author: "James Wan",
      year: 2015,
      actors: "Vin Diesel, Paul Walker"
    },
    {
      name: "Frozen II",
      author: "Chris Buck, Jennifer Lee",
      year: 2019,
      actors: "Kristen Bell, Idina Menzel"
    },
    {
      name: "Avengers: Age of Ultron",
      author: "Joss Whedon",
      year: 2015,
      actors: "Robert Downey Jr., Chris Evans"
    },
    {
      name: "Black Panther",
      author: "Ryan Coogler",
      year: 2018,
      actors: "Chadwick Boseman, Michael B. Jordan"
    },
    {
      name: "Star Wars: The Last Jedi",
      author: "Rian Johnson",
      year: 2017,
      actors: "Daisy Ridley, John Boyega"
    },
    {
      name: "Jurassic World: Fallen Kingdom",
      author: "J.A. Bayona",
      year: 2018,
      actors: "Chris Pratt, Bryce Dallas Howard"
    },
    {
      name: "Frozen",
      author: "Chris Buck, Jennifer Lee",
      year: 2013,
      actors: "Kristen Bell, Idina Menzel"
    },
    {
      name: "Beauty and the Beast",
      author: "Bill Condon",
      year: 2017,
      actors: "Emma Watson, Dan Stevens"
    },
    {
      name: "Incredibles 2",
      author: "Brad Bird",
      year: 2018,
      actors: "Craig T. Nelson, Holly Hunter"
    },
    {
      name: "The Fate of the Furious",
      author: "F. Gary Gray",
      year: 2017,
      actors: "Vin Diesel, Dwayne Johnson"
    },
    {
      name: "Iron Man 3",
      author: "Shane Black",
      year: 2013,
      actors: "Robert Downey Jr., Gwyneth Paltrow"
    },
    {
      name: "Minions",
      author: "Kyle Balda, Pierre Coffin",
      year: 2015,
      actors: "Sandra Bullock, Jon Hamm"
    },
    {
      name: "Captain America: Civil War",
      author: "Anthony Russo, Joe Russo",
      year: 2016,
      actors: "Chris Evans, Robert Downey Jr."
    },
    {
      name: "Aquaman",
      author: "James Wan",
      year: 2018,
      actors: "Jason Momoa, Amber Heard"
    },
    {
      name: "Spider-Man: Far From Home",
      author: "Jon Watts",
      year: 2019,
      actors: "Tom Holland, Samuel L. Jackson"
    },
    {
      name: "Captain Marvel",
      author: "Anna Boden, Ryan Fleck",
      year: 2019,
      actors: "Brie Larson, Samuel L. Jackson"
    },
    {
      name: "Transformers: Dark of the Moon",
      author: "Michael Bay",
      year: 2011,
      actors: "Shia LaBeouf, Rosie Huntington-Whiteley"
    },
    {
      name: "The Lord of the Rings: The Return of the King",
      author: "Peter Jackson",
      year: 2003,
      actors: "Elijah Wood, Viggo Mortensen"
    },
    {
      name: "Transformers: Age of Extinction",
      author: "Michael Bay",
      year: 2014,
      actors: "Mark Wahlberg, Nicola Peltz"
    },
    {
      name: "The Dark Knight Rises",
      author: "Christopher Nolan",
      year: 2012,
      actors: "Christian Bale, Tom Hardy"
    },
    {
      name: "Toy Story 4",
      author: "Josh Cooley",
      year: 2019,
      actors: "Tom Hanks, Tim Allen"
    },
    {
      name: "Toy Story 3",
      author: "Lee Unkrich",
      year: 2010,
      actors: "Tom Hanks, Tim Allen"
    },
    {
      name: "Pirates of the Caribbean: Dead Man's Chest",
      author: "Gore Verbinski",
      year: 2006,
      actors: "Johnny Depp, Orlando Bloom"
    },
    {
      name: "Aladdin",
      author: "Guy Ritchie",
      year: 2019,
      actors: "Will Smith, Mena Massoud"
    },
    {
      name: "Pirates of the Caribbean: On Stranger Tides",
      author: "Rob Marshall",
      year: 2011,
      actors: "Johnny Depp, Penélope Cruz"
    },
    {
      name: "Jurassic Park",
      author: "Steven Spielberg",
      year: 1993,
      actors: "Sam Neill, Laura Dern"
    },
    {
      name: "Finding Dory",
      author: "Andrew Stanton",
      year: 2016,
      actors: "Ellen DeGeneres, Albert Brooks"
    },
    {
      name: "Alice in Wonderland",
      author: "Tim Burton",
      year: 2010,
      actors: "Mia Wasikowska, Johnny Depp"
    },
    {
      name: "Zootopia",
      author: "Byron Howard, Rich Moore",
      year: 2016,
      actors: "Ginnifer Goodwin, Jason Bateman"
    },
    {
      name: "The Hobbit: An Unexpected Journey",
      author: "Peter Jackson",
      year: 2012,
      actors: "Martin Freeman, Ian McKellen"
    },
    {
      name: "The Dark Knight",
      author: "Christopher Nolan",
      year: 2008,
      actors: "Christian Bale, Heath Ledger"
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      author: "Chris Columbus",
      year: 2001,
      actors: "Daniel Radcliffe, Rupert Grint"
    },
    {
      name: "The Lion King",
      author: "Jon Favreau",
      year: 2019,
      actors: "Donald Glover, Beyoncé"
    },
    {
      name: "The Jungle Book",
      author: "Jon Favreau",
      year: 2016,
      actors: "Neel Sethi, Bill Murray"
    },
    {
      name: "Pirates of the Caribbean: At World's End",
      author: "Gore Verbinski",
      year: 2007,
      actors: "Johnny Depp, Orlando Bloom"
    },
    {
      name: "Finding Nemo",
      author: "Andrew Stanton",
      year: 2003,
      actors: "Albert Brooks, Ellen DeGeneres"
    },
    {
      name: "Shrek 2",
      author: "Andrew Adamson, Kelly Asbury",
      year: 2004,
      actors: "Mike Myers, Eddie Murphy"
    },
    {
      name: "The Lord of the Rings: The Two Towers",
      author: "Peter Jackson",
      year: 2002,
      actors: "Elijah Wood, Ian McKellen"
    },
    {
      name: "The Lord of the Rings: The Fellowship of the Ring",
      author: "Peter Jackson",
      year: 2001,
      actors: "Elijah Wood, Ian McKellen"
    },
    {
      name: "Ice Age: Dawn of the Dinosaurs",
      author: "Carlos Saldanha",
      year: 2009,
      actors: "Ray Romano, John Leguizamo"
    }
  ]

  export default movies;