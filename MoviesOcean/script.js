let slider = document.querySelector(".slider");

let allSliders = [
  {
    img: "./moviesoceanphotos/fbtsod.jpeg",

    movieTitle: "Fantastic Beasts: The Secrets of Dumbledore",

    info: `In the aftermath, Aberforth accepts the dying Credence and
        takes him home. Jacob and Queenie marry in the former's New York City
        bakery, <br> with most of the group and Tina Goldstein in attendance. <br>
        Dumbledore watches the ceremony from afar.`,

    genre1: "Adventure",
    genre2: "Fantasy",

    imdb: "6.7",
    ageRating: "PG-13",
  },

  {
    img: "./moviesoceanphotos/onefortheroad.webp",

    movieTitle: "One For The Road",

    info: `An owner of a high-end club in New York receives a call <br>
    from his friend in Thailand. His friend tells him that <br>
    he is in the last stages of terminal cancer.`,

    genre1: "Drama",
    genre2: "Friendship",

    imdb: "7.4",
    ageRating: "not rated",
  },

  {
    img: "./moviesoceanphotos/wallpapersden.com_doctor-strange-in-the-multiverse-of-madness-4k_1920x1080.jpg",

    movieTitle: "Multiverse of Madness",

    info: `America Chavez and a version of Stephen Strange are chased by a demon <br>
    in the space between universes while searching for the Book of Vishanti. <br>
    Strange is killed and Chavez accidentally creates a portal that transports herself <br>
    and Strange's corpse to Earth-616 where that universe's version of Strange <br>
    rescues Chavez from an octopus demon with help from the Sorcerer Supreme, Wong. <br>`,

    genre1: "Adventure",
    genre2: "Action",

    imdb: "7.5",
    ageRating: "PG-13",
  },

  {
    img: "./moviesoceanphotos/ssfb.jpg",

    movieTitle: "Suicide For Beginners",

    info: `Insecure and unhinged, Garrett is dead set on murdering <br>
    the unrequited love of his life. When he comes face to face with his victim, <br>
    things quickly spiral out of control as he finds himself on a deranged path <br>
    to becoming a serial killer.`,

    genre1: "Comedy",
    genre2: "Horror",

    imdb: "4.8",
    ageRating: "not rated",
  },

  {
    img: "./moviesoceanphotos/hmwmm.jpg",

    movieTitle: "Honeymoon With My Mother",

    info: `José Luis is left standing at the altar, and his mother, Mari Carmen, insists on accompanying him <br>
    to his honeymoon destination so as not to lose money. José Luis has never felt unhappier, <br>
    while Mari Carmen enjoys herself like never before.`,

    genre1: "Comedy",
    genre2: "Drama",

    imdb: "not rated",
    ageRating: "TV-MA",
  },

  {
    img: "./moviesoceanphotos/sonic2.png",

    movieTitle: "Sonic the Hedgehog 2",

    info: `After settling in Green Hills, Sonic is eager to prove that he has what <br>
    it takes to be a true hero. His test comes when Dr. Robotnik returns with a new partner, <br>
    Knuckles, in search of a mystical emerald that has the power to destroy civilizations. <br>
    Sonic teams up with his own sidekick, Tails, and together they embark on a globe <br>
    trotting journey to find the emerald before it falls into the wrong hands.`,

    genre1: "Adventure",
    genre2: "Comedy",

    imdb: "6.7",
    ageRating: "PG",
  },
];

const uploadUI = (allSliders) => {
  let slide = `
      <div class="slide col-12">
        <div class="sliderImgCon">
            <img src="${allSliders.img}" class="slideImg img-fluid" alt="sliderImg">
        </div>
        
        <div class="box"></div>
        
        <div class="aboutMovie col-12 ms-1 ms-md-4 ms-lg-4">
            <h1>${allSliders.movieTitle}</h1>
    
            <p class="col-2 col-md-12 col-lg-12">
                ${allSliders.info}
            </p>
    
            <div class="genresSlide">
                <span>${allSliders.genre1}</span>
                <span>${allSliders.genre2}</span>
            </div>
    
            <div class="wNImdbAR mt-1 mt-md-3 mt-lg-3">
                <button class="watchNow">Watch Now</button>
                <div class="Imdb ms-1 ms-md-3 ms-lg-3">IMDb <br> ${allSliders.imdb}/10</div>
                <div class="aR ms-1 ms-md-3 ms-lg-3">${allSliders.ageRating}</div>
            </div>
        </div>
      </div>
        `;

  slider.innerHTML = slide;
};

let count = 0;

let preBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");

let circle = document.querySelectorAll(".circle");
circle[count].style.background = "#13c6ff";

let slideShow = () => {
  uploadUI(allSliders[count]);
  if (count < allSliders.length - 1) {
    circle[count].style.background = "#13c6ff";
    setTimeout(() => {
      circle[0].style.background = "none";
      circle[1].style.background = "none";
      circle[2].style.background = "none";
      circle[3].style.background = "none";
      circle[4].style.background = "none";
    }, 2500);
    count++;
  } else {
    count = 0;
    circle[5].style.background = "#13c6ff";
    setTimeout(() => {
      circle[5].style.background = "none";
    }, 2500);
  }
  setTimeout("slideShow()", 2500);
};
window.onload = slideShow;

circle[0].addEventListener("click", () => {
  count = 0;
  circle[0].style.background = "#13c6ff";
  circle[1].style.background = "none";
  circle[2].style.background = "none";
  circle[3].style.background = "none";
  circle[4].style.background = "none";
  circle[5].style.background = "none";
});
circle[1].addEventListener("click", () => {
  count = 1;
  circle[0].style.background = "none";
  circle[1].style.background = "#13c6ff";
  circle[2].style.background = "none";
  circle[3].style.background = "none";
  circle[4].style.background = "none";
  circle[5].style.background = "none";
});
circle[2].addEventListener("click", () => {
  count = 2;
  circle[0].style.background = "none";
  circle[1].style.background = "none";
  circle[2].style.background = "#13c6ff";
  circle[3].style.background = "none";
  circle[4].style.background = "none";
  circle[5].style.background = "none";
});
circle[3].addEventListener("click", () => {
  count = 3;
  circle[0].style.background = "none";
  circle[1].style.background = "none";
  circle[2].style.background = "none";
  circle[3].style.background = "#13c6ff";
  circle[4].style.background = "none";
  circle[5].style.background = "none";
});
circle[4].addEventListener("click", () => {
  count = 4;
  circle[0].style.background = "none";
  circle[1].style.background = "none";
  circle[2].style.background = "none";
  circle[3].style.background = "none";
  circle[4].style.background = "#13c6ff";
  circle[5].style.background = "none";
});
circle[5].addEventListener("click", () => {
  count = 5;
  circle[0].style.background = "none";
  circle[1].style.background = "none";
  circle[2].style.background = "none";
  circle[3].style.background = "none";
  circle[4].style.background = "none";
  circle[5].style.background = "#13c6ff";
});

preBtn.addEventListener("click", () => {
  console.log(count);
  switch (count) {
    case 0:
      count = 4;
      break;
    case 1:
      count = 5;
      break;
    case 2:
      count = 0;
      break;
    case 3:
      count = 1;
      break;
    case 4:
      count = 2;
      break;
    case 5:
      count = 3;
      break;
  }
  console.log(count);
});

nextBtn.addEventListener("click", () => {
  console.log(count);
  switch (count) {
    case 0:
      count = 0;
      break;
    case 1:
      count = 1;
      break;
    case 2:
      count = 2;
      break;
    case 3:
      count = 3;
      break;
    case 4:
      count = 4;
      break;
    case 5:
      count = 5;
      break;
  }
  console.log(count);
});

let moviesAndSeriesCon = document.querySelector(".moviesAndSeries");
let moviesAndSeriesConArray = [
  {
    id: "newRelease",
    title: "New To Movies Ocean In This Week",
    watchingsCon: "",
    lineClass: "noCircleNew",
  },

  {
    id: "allMovies",
    title: "Movies",
    watchingsCon: "moviesArray",
    lineClass: "noCircleMovie",
  },

  {
    id: "allSeries",
    title: "Series",
    watchingsCon: "seriesArray",
    lineClass: "noCircleSerie",
  },
];

let upload2 = (moviesAndSeriesConArrayTitle) => {
  moviesAndSeriesConArrayTitle.forEach((e) => {
    let titleAndWatchings = `
    <div class="newRelease" id="${e.id}">
      <div class="header ms-lg-3">
        <div class="lineAndTitle col-8">
          <div class="line me-1"></div>
          <h3>${e.title}</h3>
        </div>

        <button class="seeAll me-4">See All</button>
      </div>

      <div class="newWatchings ${e.watchingsCon} ms-lg-2"></div>

      <div class="numbers d-none d-sm-flex d-md-flex d-lg-flex">
        <div class="noCircle ${e.lineClass} noCircle1">1</div>
        <div class="noCircle ${e.lineClass} noCircle2">2</div>
        <div class="noCircle ${e.lineClass} noCircle3">3</div>
        <div class="noCircle ${e.lineClass} noCircle4">4</div>
        <div class="noCircle ${e.lineClass} noCircle5">5</div>
        <div class="noCircle ${e.lineClass} noCircle6">6</div>
        <div class="noCircle ${e.lineClass} noCircle7">7</div>
        <div class="noCircle ${e.lineClass} noCircle8">8</div>
        <div class="noCircle ${e.lineClass} noCircle9">9</div>
        <div class="noCircle ${e.lineClass} noCircle10">10</div>
      </div>
    </div>
    `;
    moviesAndSeriesCon.innerHTML += titleAndWatchings;
  });
};
upload2(moviesAndSeriesConArray);

let newWatchingsCon = document.querySelector(".newWatchings");
let newWatchings = [
  {
    id: "newOne",
    img: "./moviesoceanphotos/eeato.jpg",
    alt: "Everything Everywhere All at Once(2022)",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "newTwo",
    img: "./moviesoceanphotos/soon-to-reach-the-sea.png",
    alt: "One Day, You Will Reach The Sea",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "newThree",
    img: "./moviesoceanphotos/morbius.jpg",
    alt: "Morbius(2022)",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "newFour",
    img: "./moviesoceanphotos/fbtsod2.jpg",
    alt: "Fantastic Beasts:The Secrets of Dumbledore",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "newFive",
    img: "./moviesoceanphotos/onefortheroad2.jpg",
    alt: "One For The Road",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "newSix",
    img: "./moviesoceanphotos/Woori_The_Virgin-p2.jpg",
    alt: "Woori: The Virgin",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "newSeven",
    img: "./moviesoceanphotos/Spy-x-Family.webp",
    alt: "Spy x Family",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "newEight",
    img: "./moviesoceanphotos/momadness.jpg",
    alt: "Multiverse of Madness",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "newNine",
    img: "./moviesoceanphotos/againmylife.jpg",
    alt: "Again My Life",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "newTen",
    img: "./moviesoceanphotos/shootingstar2.webp",
    alt: "Sh**ting Star",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },
];

let allMoviesCon = document.querySelector(".moviesArray");
let allMovies = [
  {
    id: "movieOne",
    img: "./moviesoceanphotos/eeato.jpg",
    alt: "Everything Everywhere All at Once",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "movieTwo",
    img: "./moviesoceanphotos/soon-to-reach-the-sea.png",
    alt: "One Day, You Will Reach The Sea",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "movieThree",
    img: "./moviesoceanphotos/morbius.jpg",
    alt: "Morbius",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "movieFour",
    img: "./moviesoceanphotos/fbtsod2.jpg",
    alt: "Fantastic Beasts:The Secrets of Dumbledore",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "movieFive",
    img: "./moviesoceanphotos/onefortheroad2.jpg",
    alt: "One For The Road",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "movieSix",
    img: "./moviesoceanphotos/momadness.jpg",
    alt: "Multiverse of Madness(2022)",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "movieSeven",
    img: "./moviesoceanphotos/alongfortheroad.jpg",
    alt: "Along For The Road",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "movieEight",
    img: "./moviesoceanphotos/sforbeginners.jpg",
    alt: "Suicide For Beginners",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "movieNine",
    img: "./moviesoceanphotos/crush.jpg",
    alt: "Crush",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "movieTen",
    img: "./moviesoceanphotos/sonicthe2.jpg",
    alt: "Sonic the Hedgehog 2",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },
];

let allSeriesCon = document.querySelector(".seriesArray");
let allSeries = [
  {
    id: "serieOne",
    img: "./moviesoceanphotos/thebaby.jpg",
    alt: "The Baby",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "serieTwo",
    img: "./moviesoceanphotos/Woori_The_Virgin-p2.jpg",
    alt: "Woori: The Virgin",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "serieThree",
    img: "./moviesoceanphotos/Spy-x-Family.webp",
    alt: "Spy x Family",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "serieFour",
    img: "./moviesoceanphotos/againmylife.jpg",
    alt: "Again My Life",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "serieFive",
    img: "./moviesoceanphotos/shootingstar2.webp",
    alt: "Sh**ting Star",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "serieSix",
    img: "./moviesoceanphotos/moonknight.jpeg",
    alt: "Moon Knight",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "serieSeven",
    img: "./moviesoceanphotos/heartstopper.jpg",
    alt: "Heart Stopper",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "serieEight",
    img: "./moviesoceanphotos/loveallplay.jpg",
    alt: "Love All Play",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "serieNine",
    img: "./moviesoceanphotos/devilsis.jpg",
    alt: "My Devil Sister",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },

  {
    id: "serieTen",
    img: "./moviesoceanphotos/sb.webp",
    alt: "Savage Beauty",
    smallAbout:
      "Like the title, the movie is separated into three parts: Everyting, Everywhere and All at Once. Evelyn Wang is a Chinese-American woman who runs a struggling laundromat with her husband, Waymond. Tensions are high due to the laundromat being audited by the IRS.",
    genre: "Sci-fi, Adventure",
    ageRating: "R-17+",
    rating: "8.7",
  },
];

let upload3 = (moviesAndSeriesArray, con) => {
  moviesAndSeriesArray.forEach((e) => {
    watching = `
      <a href="" id="${e.id}" class="newWatching position-relative mb-2 col-6 col-sm-4 col-md-2 col-lg-2">
        <img
          src="${e.img}"
          class="img-fluid h-100 col-11 watchingImg"
          alt="${e.alt}"
        />
        
        <div class="plot col-11">
          <h5 class="movieTitle">${e.alt}</h5>
          <p>${e.smallAbout}</p>
          <h6>${e.genre}</h6>
          <div class="ageRatingAndRatingCon">
            <div class="rTAR">${e.ageRating}</div>
            <h5>${e.rating}/10</h5>
          </div>
        </div>
        
      </a>
    `;
    con.innerHTML += watching;
  });
};
upload3(newWatchings, newWatchingsCon);
upload3(allMovies, allMoviesCon);
upload3(allSeries, allSeriesCon);

let aLinkMovieAndSerie = document.querySelectorAll(".newWatching");
let plot = document.querySelectorAll(".plot");

for (let i = 0; i < aLinkMovieAndSerie.length; i++) {
  aLinkMovieAndSerie[i].addEventListener(
    "mouseover",
    () => (plot[i].style.opacity = 1)
  );

  aLinkMovieAndSerie[i].addEventListener(
    "mouseout",
    () => (plot[i].style.opacity = 0)
  );
}

let noCircleNew = document.querySelectorAll(".noCircleNew");

for (let i = 0; i < noCircleNew.length; i++) {
  console.log(noCircleNew[i]);
  noCircleNew[i].addEventListener("click", () => {
    console.log(noCircleNew[i]);
    noCircleNew[i].style.backgroundColor = "#f4f4f483";
    noCircleNew[i].style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
    noCircleNew[i].style.backdropFilter = "blur(15px) contrast(130%)";
  });
}

for (let i = 0; i < noCircleNew.length; i++) {
  console.log(noCircleNew[i]);
  noCircleNew[i].addEventListener("click", () => {
    console.log(noCircleNew[i]);
    noCircleNew[i].style.background = "#13c6ff";
  });
}

// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//   background-color: #f4f4f483;
//   backdrop-filter: blur(15px) contrast(130%);

let genreLinks = document.querySelector(".genreLinks");
let genreLink = [
  {
    genreClass: "action",
    img: "./moviesoceanphotos/spy.png",
    alt: "Action",
    genreLinkTitle: "Action",
    howMany: "1300+",
  },

  {
    genreClass: "fantasy",
    img: "./moviesoceanphotos/magician.png",
    alt: "Fantasy",
    genreLinkTitle: "Fantasy",
    howMany: "1300+",
  },

  {
    genreClass: "comedy",
    img: "./moviesoceanphotos/comedy.png",
    alt: "Comedy",
    genreLinkTitle: "Comedy",
    howMany: "1300+",
  },

  {
    genreClass: "Drama",
    img: "./moviesoceanphotos/theater-masks.png",
    alt: "Drama",
    genreLinkTitle: "Drama",
    howMany: "1300+",
  },

  {
    genreClass: "Mystery",
    img: "./moviesoceanphotos/detective.png",
    alt: "Mystery",
    genreLinkTitle: "Mystery",
    howMany: "1300+",
  },

  {
    genreClass: "romance",
    img: "./moviesoceanphotos/romance.png",
    alt: "Romance",
    genreLinkTitle: "Romance",
    howMany: "1300+",
  },

  {
    genreClass: "horror",
    img: "./moviesoceanphotos/horror-movie.png",
    alt: "Horror",
    genreLinkTitle: "Horror",
    howMany: "1300+",
  },

  {
    genreClass: "thriller",
    img: "./moviesoceanphotos/thriller.png",
    alt: "Thriller",
    genreLinkTitle: "Thriller",
    howMany: "1300+",
  },

  {
    genreClass: "erotic",
    img: "./moviesoceanphotos/dices.png",
    alt: "Erotic",
    genreLinkTitle: "Erotic",
    howMany: "1300+",
  },

  {
    genreClass: "animation",
    img: "./moviesoceanphotos/cartoons.png",
    alt: "Animation",
    genreLinkTitle: "Animation",
    howMany: "1300+",
  },
];

const uploadGenres = (genreLinkArray) => {
  genreLinkArray.forEach((e) => {
    let genre = `
      <a href="" class="genreLink me-2 me-md-4 me-lg-4 col-6 col-sm-4 col-md-2 col-lg-2">
        <div class="genre">
          <div class="genreImgCon col-4 ${e.genreClass}">
            <img
              src="${e.img}"
              class="img-fluid col-12 genreImg"
              alt="${e.alt}"
            />
          </div>

          <div class="genreName">
            <h5>${e.genreLinkTitle}</h5>
            <p>${e.howMany}</p>
          </div>
        </div>
      </a>
    `;

    genreLinks.innerHTML += genre;
  });
};
uploadGenres(genreLink);

let yearsCon = document.querySelector(".years");
let year = [
  {
    yearLink: "",
    releaseYear: 2022,
  },

  {
    yearLink: "",
    releaseYear: 2021,
  },

  {
    yearLink: "",
    releaseYear: 2020,
  },

  {
    yearLink: "",
    releaseYear: 2019,
  },

  {
    yearLink: "",
    releaseYear: 2018,
  },

  {
    yearLink: "",
    releaseYear: 2017,
  },

  {
    yearLink: "",
    releaseYear: 2016,
  },

  {
    yearLink: "",
    releaseYear: 2015,
  },

  {
    yearLink: "",
    releaseYear: 2014,
  },

  {
    yearLink: "",
    releaseYear: 2013,
  },

  {
    yearLink: "",
    releaseYear: 2012,
  },

  {
    yearLink: "",
    releaseYear: 2011,
  },

  {
    yearLink: "",
    releaseYear: 2010,
  },

  {
    yearLink: "",
    releaseYear: 2009,
  },

  {
    yearLink: "",
    releaseYear: 2008,
  },

  {
    yearLink: "",
    releaseYear: 2007,
  },

  {
    yearLink: "",
    releaseYear: 2006,
  },

  {
    yearLink: "",
    releaseYear: 2005,
  },

  {
    yearLink: "",
    releaseYear: 2004,
  },

  {
    yearLink: "",
    releaseYear: 2003,
  },

  {
    yearLink: "",
    releaseYear: 2002,
  },

  {
    yearLink: "",
    releaseYear: 2001,
  },

  {
    yearLink: "",
    releaseYear: 2000,
  },

  {
    yearLink: "",
    releaseYear: 1999,
  },

  {
    yearLink: "",
    releaseYear: 1998,
  },

  {
    yearLink: "",
    releaseYear: 1997,
  },

  {
    yearLink: "",
    releaseYear: 1996,
  },

  {
    yearLink: "",
    releaseYear: 1995,
  },

  {
    yearLink: "",
    releaseYear: 1994,
  },

  {
    yearLink: "",
    releaseYear: 1993,
  },

  {
    yearLink: "",
    releaseYear: 1992,
  },

  {
    yearLink: "",
    releaseYear: 1991,
  },

  {
    yearLink: "",
    releaseYear: 1990,
  },

  {
    yearLink: "",
    releaseYear: 1989,
  },

  {
    yearLink: "",
    releaseYear: 1988,
  },

  {
    yearLink: "",
    releaseYear: 1987,
  },

  {
    yearLink: "",
    releaseYear: 1986,
  },

  {
    yearLink: "",
    releaseYear: 1985,
  },

  {
    yearLink: "",
    releaseYear: 1984,
  },

  {
    yearLink: "",
    releaseYear: 1983,
  },

  {
    yearLink: "",
    releaseYear: 1982,
  },

  {
    yearLink: "",
    releaseYear: 1981,
  },

  {
    yearLink: "",
    releaseYear: 1980,
  },

  {
    yearLink: "",
    releaseYear: 1979,
  },

  {
    yearLink: "",
    releaseYear: 1978,
  },

  {
    yearLink: "",
    releaseYear: 1977,
  },

  {
    yearLink: "",
    releaseYear: 1976,
  },

  {
    yearLink: "",
    releaseYear: 1975,
  },

  {
    yearLink: "",
    releaseYear: 1974,
  },

  {
    yearLink: "",
    releaseYear: 1973,
  },
];

let uploadYears = (yearArray) => {
  yearArray.forEach((e) => {
    let eachYear = `
    <a href="${e.yearLink}" class="year">${e.releaseYear}</a>
  `;

    yearsCon.innerHTML += eachYear;
  });
};
uploadYears(year);

let menuBarIcon = document.getElementById("toggle");
let navBarPh = document.getElementById("navBarPhId");

document.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.id !== "menuBarIcon" && e.target.id !== "navBarPh") {
    navBarPh.classList.toggle("d-none");
  }
});