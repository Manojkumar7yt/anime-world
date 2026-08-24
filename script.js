
// ======================================================
// ANIME WORLD - COMPLETE SCRIPT
// ======================================================


// ======================================================
// GLOBAL DATA
// ======================================================

let currentPopupAnime = null;


// ======================================================
// EXPLORE SEARCH
// ======================================================

function openSearch() {

    const searchBox =
        document.getElementById("searchBox");

    const searchInput =
        document.getElementById("animeSearch");

    if (searchBox && searchInput) {

        searchBox.classList.add("active");
        searchInput.focus();

    }
}


// ======================================================
// ANIME LIST
// ======================================================

const animeList = [
    "Naruto",
    "One Piece",
    "Tokyo Revengers",
    "Your Name",
    "Weathering With You",
    "Demon Slayer",
    "Jujutsu Kaisen",
    "Attack on Titan",
    "Death Note",
    "Bleach",
    "One Punch Man",
    "My Hero Academia",
    "Hunter × Hunter",
    "Dragon Ball",
    "Black Clover",
    "Haikyu!!",
    "Chainsaw Man",
    "Solo Leveling",
    "Sword Art Online",
    "A Silent Voice"
];


// ======================================================
// ANIME DETAILS
// ======================================================

const animeDetails = {

    "naruto": {
        title: "Naruto",
        image: "images/naruto.jpg",
        rating: "⭐ Rating: 8.4 / 10",
        genre: "🎭 Genre: Action, Adventure",
        episodes: "📺 Episodes: 220",
        description: "Naruto Uzumaki dreams of becoming Hokage and works hard to prove himself."
    },

    "onepiece": {
        title: "One Piece",
        image: "images/onepiece.jpg",
        rating: "⭐ Rating: 9.0 / 10",
        genre: "🎭 Genre: Action, Adventure",
        episodes: "📺 Episodes: 1100+",
        description: "Monkey D. Luffy and his crew travel across the Grand Line searching for the legendary One Piece."
    },

    "tokyo": {
        title: "Tokyo Revengers",
        image: "images/tokyo.jpg",
        rating: "⭐ Rating: 8.0 / 10",
        genre: "🎭 Genre: Action, Drama, Time Travel",
        episodes: "📺 Episodes: 50+",
        description: "Takemichi travels through time to change the future and protect the people important to him."
    },

    "your-name": {
        title: "Your Name",
        image: "images/your-name.jpg",
        rating: "⭐ Rating: 8.8 / 10",
        genre: "🎭 Genre: Romance, Fantasy, Drama",
        episodes: "🎬 Movie",
        description: "Two teenagers mysteriously find their lives connected across time and distance."
    },

    "weathering-with-you": {
        title: "Weathering With You",
        image: "images/weathering-with-you.jpg",
        rating: "⭐ Rating: 8.0 / 10",
        genre: "🎭 Genre: Romance, Fantasy, Drama",
        episodes: "🎬 Movie",
        description: "A young boy meets a girl who seems to have the ability to control the weather."
    },

    "demon-slayer": {
        title: "Demon Slayer",
        image: "images/demon-slayer.jpg",
        rating: "⭐ Rating: 8.6 / 10",
        genre: "🎭 Genre: Action, Adventure, Fantasy",
        episodes: "📺 Episodes: 60+",
        description: "Tanjiro begins his journey to protect his sister and fight demons."
    },

    "jujutsu-kaisen": {
        title: "Jujutsu Kaisen",
        image: "images/jujutsu-kaisen.jpg",
        rating: "⭐ Rating: 8.5 / 10",
        genre: "🎭 Genre: Action, Supernatural",
        episodes: "📺 Episodes: 50+",
        description: "Yuji Itadori enters the world of cursed spirits and jujutsu sorcerers."
    },

    "attack-on-titan": {
        title: "Attack on Titan",
        image: "images/attack-on-titan.jpg",
        rating: "⭐ Rating: 9.0 / 10",
        genre: "🎭 Genre: Action, Drama, Dark Fantasy",
        episodes: "📺 Episodes: 90+",
        description: "Humanity fights for survival while uncovering the truth behind the Titans."
    },

    "death-note": {
        title: "Death Note",
        image: "images/death-note.jpg",
        rating: "⭐ Rating: 8.9 / 10",
        genre: "🎭 Genre: Psychological, Thriller, Mystery",
        episodes: "📺 Episodes: 37",
        description: "A mysterious notebook leads to an intense battle of intelligence."
    },

    "bleach": {
        title: "Bleach",
        image: "images/bleach.jpg",
        rating: "⭐ Rating: 8.2 / 10",
        genre: "🎭 Genre: Action, Adventure, Supernatural",
        episodes: "📺 Episodes: 300+",
        description: "Ichigo Kurosaki gains supernatural powers and becomes a Soul Reaper."
    },

    "one-punch-man": {
        title: "One Punch Man",
        image: "images/one-punch-man.jpg",
        rating: "⭐ Rating: 8.7 / 10",
        genre: "🎭 Genre: Action, Comedy, Superhero",
        episodes: "📺 Episodes: 24+",
        description: "Saitama is a hero who can defeat almost any opponent with one punch."
    },

    "my-hero-academia": {
        title: "My Hero Academia",
        image: "images/my-hero-academia.jpg",
        rating: "⭐ Rating: 8.0 / 10",
        genre: "🎭 Genre: Action, Superhero, Adventure",
        episodes: "📺 Episodes: 150+",
        description: "Izuku Midoriya works toward his dream of becoming a professional hero."
    },

    "hunter-x-hunter": {
        title: "Hunter × Hunter",
        image: "images/hunter-x-hunter.jpg",
        rating: "⭐ Rating: 9.0 / 10",
        genre: "🎭 Genre: Action, Adventure, Fantasy",
        episodes: "📺 Episodes: 148",
        description: "Gon begins an adventure to become a Hunter and find his father."
    },

    "dragon-ball": {
        title: "Dragon Ball",
        image: "images/dragon-ball.jpg",
        rating: "⭐ Rating: 8.5 / 10",
        genre: "🎭 Genre: Action, Adventure, Martial Arts",
        episodes: "📺 Episodes: 153",
        description: "Goku's journey begins with martial arts, adventure and friendship."
    },

    "black-clover": {
        title: "Black Clover",
        image: "images/black-clover.jpg",
        rating: "⭐ Rating: 8.3 / 10",
        genre: "🎭 Genre: Action, Fantasy, Magic",
        episodes: "📺 Episodes: 170",
        description: "Asta dreams of becoming the Wizard King despite having no magic."
    },

    "haikyu": {
        title: "Haikyu!!",
        image: "images/haikyu.jpg",
        rating: "⭐ Rating: 8.7 / 10",
        genre: "🎭 Genre: Sports, Drama, Comedy",
        episodes: "📺 Episodes: 85+",
        description: "Hinata works hard to become a great volleyball player."
    },

    "chainsaw-man": {
        title: "Chainsaw Man",
        image: "images/chainsaw-man.jpg",
        rating: "⭐ Rating: 8.4 / 10",
        genre: "🎭 Genre: Action, Supernatural, Dark Fantasy",
        episodes: "📺 Episodes: 12+",
        description: "Denji's life changes after he becomes a powerful devil hunter."
    },

    "solo-leveling": {
        title: "Solo Leveling",
        image: "images/solo-leveling.jpg",
        rating: "⭐ Rating: 8.8 / 10",
        genre: "🎭 Genre: Action, Fantasy, Adventure",
        episodes: "📺 Episodes: 25+",
        description: "Sung Jin-Woo grows from the weakest hunter into a powerful fighter."
    },

    "sword-art-online": {
        title: "Sword Art Online",
        image: "images/sword-art-online.jpg",
        rating: "⭐ Rating: 7.5 / 10",
        genre: "🎭 Genre: Action, Fantasy, Adventure",
        episodes: "📺 Episodes: 90+",
        description: "Players become trapped inside a virtual reality game."
    },

    "a-silent-voice": {
        title: "A Silent Voice",
        image: "images/a-silent-voice.jpg",
        rating: "⭐ Rating: 8.9 / 10",
        genre: "🎭 Genre: Drama, School, Coming of Age",
        episodes: "🎬 Movie",
        description: "A story about friendship, forgiveness, responsibility and moving forward."
    }
};


// ======================================================
// GET ANIME KEY
// ======================================================
function getAnimeKey(animeName) {
    const keys = {
        "Naruto": "naruto",
        "One Piece": "onepiece",
        "Tokyo Revengers": "tokyo",
        "Your Name": "your-name",
        "Weathering With You": "weathering-with-you",
        "Demon Slayer": "demon-slayer",
        "Jujutsu Kaisen": "jujutsu-kaisen",
        "Attack on Titan": "attack-on-titan",
        "Death Note": "death-note",
        "Bleach": "bleach",
        "One Punch Man": "one-punch-man",
        "My Hero Academia": "my-hero-academia",
        "Hunter × Hunter": "hunter-x-hunter",
        "Dragon Ball": "dragon-ball",
        "Black Clover": "black-clover",
        "Haikyu!!": "haikyu",
        "Chainsaw Man": "chainsaw-man",
        "Solo Leveling": "solo-leveling",
        "Sword Art Online": "sword-art-online",
        "A Silent Voice": "a-silent-voice"
    };

    return keys[animeName] || null;
}
// ======================================================
// SIMPLE CLOSEST SEARCH
// ======================================================

function findClosestAnime(query) {

    const lowerQuery =
        query.toLowerCase();

    return animeList.find(anime =>
        anime.toLowerCase().startsWith(lowerQuery)
    ) || null;
}


// ======================================================
// SHOW ANIME DETAILS
// ======================================================

function showAnimeDetails(animeName) {

    const anime =
        animeDetails[animeName];

    if (!anime) {

        console.log(
            "Anime not found:",
            animeName
        );

        return;
    }


    // Save currently opened anime
    currentPopupAnime =
        animeName;


    // Anime information

    const popupImage =
        document.getElementById("popupImage");

    const popupTitle =
        document.getElementById("popupTitle");

    const popupRating =
        document.getElementById("popupRating");

    const popupGenre =
        document.getElementById("popupGenre");

    const popupEpisodes =
        document.getElementById("popupEpisodes");

    const popupDescription =
        document.getElementById("popupDescription");


    if (popupImage) {
        popupImage.src =
            anime.image;
    }

    if (popupTitle) {
        popupTitle.textContent =
            anime.title;
    }

    if (popupRating) {
        popupRating.textContent =
            anime.rating;
    }

    if (popupGenre) {
        popupGenre.textContent =
            anime.genre;
    }

    if (popupEpisodes) {
        popupEpisodes.textContent =
            anime.episodes;
    }

    if (popupDescription) {
        popupDescription.textContent =
            anime.description;
    }


    // ==================================================
    // LOAD FAVORITE STATUS
    // ==================================================

    const favorites =
        JSON.parse(
            localStorage.getItem(
                "animeFavorites"
            )
        ) || [];


    const favoriteButton =
        document.getElementById(
            "popupFavoriteBtn"
        );


    if (favoriteButton) {

        if (
            favorites.includes(
                animeName
            )
        ) {

            favoriteButton.innerHTML =
                "❤️ Added";

            favoriteButton.classList.add(
                "added"
            );

        } else {

            favoriteButton.innerHTML =
                "❤️ Add to Favorites";

            favoriteButton.classList.remove(
                "added"
            );
        }
    }


    // ==================================================
    // LOAD SAVED POPUP RATING
    // ==================================================

    const savedRating =
        Number(
            localStorage.getItem(
                "rating-" + animeName
            ) || 0
        );


    const stars =
        document.querySelectorAll(
            "#popupStars span"
        );


    stars.forEach(
        (star, index) => {

            if (
                index < savedRating
            ) {

                star.classList.add(
                    "selected"
                );

            } else {

                star.classList.remove(
                    "selected"
                );
            }

        }
    );


    const ratingText =
        document.getElementById(
            "popupYourRating"
        );


    if (ratingText) {

        ratingText.textContent =
            "Your Rating: " +
            savedRating +
            "/5 ⭐";
    }


    // ==================================================
    // OPEN POPUP
    // ==================================================

    const popup =
        document.getElementById(
            "animePopup"
        );


    if (popup) {

        popup.classList.add(
            "active"
        );
    }
}


// ======================================================
// CLOSE ANIME DETAILS
// ======================================================

function closeAnimeDetails() {

    const popup =
        document.getElementById(
            "animePopup"
        );

    if (popup) {

        popup.classList.remove(
            "active"
        );
    }
}


// ======================================================
// HIGHLIGHT ANIME CARD
// ======================================================

function highlightAnimeCard(animeName) {

    const cards =
        document.querySelectorAll(
            ".anime-card"
        );


    cards.forEach(card => {

        card.classList.remove(
            "search-highlight"
        );


        const title =
            card.querySelector("h3");


        if (
            title &&
            title.textContent
                .trim()
                .toLowerCase() ===
            animeName
                .trim()
                .toLowerCase()
        ) {

            card.classList.add(
                "search-highlight"
            );


            card.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });


            setTimeout(() => {

                card.classList.remove(
                    "search-highlight"
                );

            }, 2000);
        }

    });
}


// ======================================================
// SMART SEARCH
// ======================================================

const searchInput =
    document.getElementById(
        "animeSearch"
    );


const searchSuggestions =
    document.getElementById(
        "searchSuggestions"
    );


if (
    searchInput &&
    searchSuggestions
) {

    // ----------------------------------------------
    // INPUT SEARCH
    // ----------------------------------------------

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            searchSuggestions.innerHTML =
                "";


            if (query === "") {

                searchSuggestions.style.display =
                    "none";

                return;
            }


            const results =
                animeList.filter(
                    anime =>
                        anime
                            .toLowerCase()
                            .includes(query)
                );


            // ------------------------------------------
            // SEARCH RESULTS
            // ------------------------------------------

            if (results.length > 0) {

                results.forEach(
                    anime => {

                        const suggestion =
                            document.createElement(
                                "div"
                            );


                        suggestion.className =
                            "search-suggestion";


                        suggestion.textContent =
                            anime;


                        suggestion.onclick =
                            function () {

                                searchInput.value =
                                    anime;

                                searchSuggestions
                                    .style
                                    .display =
                                    "none";


                                const animeKey =
                                    getAnimeKey(
                                        anime
                                    );


                                if (animeKey) {

                                    showAnimeDetails(
                                        animeKey
                                    );

                                    highlightAnimeCard(
                                        anime
                                    );
                                }

                            };


                        searchSuggestions
                            .appendChild(
                                suggestion
                            );

                    }
                );


            } else {

                // --------------------------------------
                // SPELLING CORRECTION
                // --------------------------------------

                const correctedAnime =
                    findClosestAnime(
                        query
                    );


                const message =
                    document.createElement(
                        "div"
                    );


                message.className =
                    "search-message";


                if (correctedAnime) {

                    message.textContent =
                        "Did you mean: " +
                        correctedAnime +
                        "?";


                    message.onclick =
                        function () {

                            searchInput.value =
                                correctedAnime;


                            searchSuggestions
                                .style
                                .display =
                                "none";


                            const animeKey =
                                getAnimeKey(
                                    correctedAnime
                                );


                            if (animeKey) {

                                showAnimeDetails(
                                    animeKey
                                );

                                highlightAnimeCard(
                                    correctedAnime
                                );
                            }

                        };


                } else {

                    message.textContent =
                        "No anime found";
                }


                searchSuggestions
                    .appendChild(
                        message
                    );
            }


            searchSuggestions.style.display =
                "block";

        }
    );


    // ----------------------------------------------
    // ENTER KEY
    // ----------------------------------------------

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Enter"
            ) {
                return;
            }


            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            let anime =
                animeList.find(
                    name =>
                        name
                            .toLowerCase() ===
                        query
                );


            if (!anime) {

                anime =
                    findClosestAnime(
                        query
                    );
            }


            if (anime) {

                const animeKey =
                    getAnimeKey(
                        anime
                    );


                if (animeKey) {

                    showAnimeDetails(
                        animeKey
                    );

                    highlightAnimeCard(
                        anime
                    );
                }


                searchSuggestions.style.display =
                    "none";
            }

        }
    );

}


// ======================================================
// CLEAR SEARCH
// ======================================================

function clearAnimeSearch() {

    const input =
        document.getElementById(
            "animeSearch"
        );


    const suggestions =
        document.getElementById(
            "searchSuggestions"
        );


    if (input) {

        input.value =
            "";
    }


    if (suggestions) {

        suggestions.innerHTML =
            "";

        suggestions.style.display =
            "none";
    }


    if (input) {

        input.focus();
    }
}


// ======================================================
// CHARACTER DETAILS
// ======================================================

const characterDetails = {

    naruto: {

        name: "Naruto Uzumaki",

        image:
            "images/naruto-character.jpg",

        role:
            "⚡ Role: Ninja / Hokage",

        anime:
            "🎌 Anime: Naruto",

        description:
            "A brave ninja who never gives up on his dreams and works hard to become Hokage."
    },


    luffy: {

        name: "Monkey D. Luffy",

        image:
            "images/luffy.jpg",

        role:
            "🏴‍☠️ Role: Pirate Captain",

        anime:
            "🎌 Anime: One Piece",

        description:
            "A fearless pirate captain who dreams of becoming the Pirate King."
    },


    mikey: {

        name: "Mikey",

        image:
            "images/mikey.jpg",

        role:
            "⚡ Role: Gang Leader",

        anime:
            "🎌 Anime: Tokyo Revengers",

        description:
            "One of the strongest and most respected members of the Tokyo Manji Gang."
    }

};


// ======================================================
// SHOW CHARACTER DETAILS
// ======================================================

function showCharacterDetails(
    characterName
) {

    const character =
        characterDetails[
        characterName
        ];


    if (!character) {
        return;
    }


    document.getElementById(
        "characterPopupImage"
    ).src =
        character.image;


    document.getElementById(
        "characterPopupName"
    ).textContent =
        character.name;


    document.getElementById(
        "characterPopupRole"
    ).textContent =
        character.role;


    document.getElementById(
        "characterPopupAnime"
    ).textContent =
        character.anime;


    document.getElementById(
        "characterPopupDescription"
    ).textContent =
        character.description;


    document.getElementById(
        "characterPopup"
    ).classList.add(
        "active"
    );
}


// ======================================================
// CLOSE CHARACTER DETAILS
// ======================================================

function closeCharacterDetails() {

    document.getElementById(
        "characterPopup"
    ).classList.remove(
        "active"
    );
}


// ======================================================
// CATEGORY FILTER
// ======================================================

function filterAnime(category) {

    const animeCards =
        document.querySelectorAll(".anime-card");

    const filterButtons =
        document.querySelectorAll(".category-filter button");

    // Remove active from all buttons
    filterButtons.forEach(button => {
        button.classList.remove("active");
    });

    // Add active to clicked button
    filterButtons.forEach(button => {

        if (
            button.textContent
                .trim()
                .toLowerCase()
                .includes(category)
        ) {
            button.classList.add("active");
        }

    });

    // Filter anime cards
    animeCards.forEach(card => {

        const cardCategory =
            card.dataset.category || "";

        if (category === "all") {

            card.style.display = "block";

        } else if (
            cardCategory.includes(category)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}

// ================= SHOW FAVORITES =================

// ================= SHOW FAVORITES =================

function showFavorites() {

    const favorites =
        JSON.parse(localStorage.getItem("animeFavorites")) || [];

    const favoritesList =
        document.getElementById("favoritesList");

    if (!favoritesList) return;

    favoritesList.innerHTML = "";

    if (favorites.length === 0) {

        favoritesList.innerHTML =
            "<p>No favorites yet ❤️</p>";

    } else {

        favorites.forEach(animeName => {

            const anime = animeDetails[animeName];

            if (!anime) return;

            const item = document.createElement("div");

            item.className = "favorite-item";

            item.innerHTML = `
                <img src="${anime.image}" alt="${anime.title}">

                <div>
                    <h3>${anime.title}</h3>
                    <p>${anime.rating}</p>

                    <button
                        type="button"
                        class="remove-favorite-btn"
                        onclick="removeFavorite('${animeName}')">
                        ❌ Remove
                    </button>
                </div>
            `;

            favoritesList.appendChild(item);
        });
    }

    document
        .getElementById("favoritesPopup")
        .classList.add("active");
}



// ======================================================
// CLOSE FAVORITES
// ======================================================

function closeFavorites() {

    const popup =
        document.getElementById(
            "favoritesPopup"
        );


    if (popup) {

        popup.classList.remove(
            "active"
        );
    }
}

// ================= ADD / REMOVE FAVORITE =================

function addFavorite(animeName, button) {

    let favorites =
        JSON.parse(localStorage.getItem("animeFavorites")) || [];

    if (favorites.includes(animeName)) {

        // REMOVE
        favorites = favorites.filter(
            anime => anime !== animeName
        );

        localStorage.setItem(
            "animeFavorites",
            JSON.stringify(favorites)
        );

        if (button) {
            button.innerHTML = "♡ Favorite";
            button.classList.remove("added");
        }

    } else {

        // ADD
        favorites.push(animeName);

        localStorage.setItem(
            "animeFavorites",
            JSON.stringify(favorites)
        );

        if (button) {
            button.innerHTML = "❤️ Added";
            button.classList.add("added");
        }
    }

    updateFavoriteCount();
}


// ================= REMOVE FROM FAVORITES PAGE =================

function removeFavorite(animeName) {

    let favorites =
        JSON.parse(localStorage.getItem("animeFavorites")) || [];

    favorites = favorites.filter(
        anime => anime !== animeName
    );

    localStorage.setItem(
        "animeFavorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCount();

    showFavorites();
}

// ======================================================
// FAVORITE COUNT
// ======================================================

function updateFavoriteCount() {

    const favorites =
        JSON.parse(
            localStorage.getItem(
                "animeFavorites"
            )
        ) || [];


    const count =
        document.getElementById(
            "favoriteCount"
        );


    if (count) {

        count.textContent =
            favorites.length;
    }
}


// ======================================================
// POPUP FAVORITE
// ======================================================

function togglePopupFavorite() {

    if (!currentPopupAnime) {
        return;
    }


    let favorites =
        JSON.parse(
            localStorage.getItem(
                "animeFavorites"
            )
        ) || [];


    const button =
        document.getElementById(
            "popupFavoriteBtn"
        );


    if (
        favorites.includes(
            currentPopupAnime
        )
    ) {

        // REMOVE

        favorites =
            favorites.filter(
                anime =>
                    anime !==
                    currentPopupAnime
            );


        if (button) {

            button.innerHTML =
                "❤️ Add to Favorites";

            button.classList.remove(
                "added"
            );
        }


    } else {

        // ADD

        favorites.push(
            currentPopupAnime
        );


        if (button) {

            button.innerHTML =
                "❤️ Added";

            button.classList.add(
                "added"
            );
        }
    }


    localStorage.setItem(
        "animeFavorites",
        JSON.stringify(
            favorites
        )
    );


    updateFavoriteCount();
}


// ======================================================
// POPUP RATING
// ======================================================

function ratePopupAnime(
    rating
) {

    if (!currentPopupAnime) {
        return;
    }


    localStorage.setItem(
        "rating-" +
        currentPopupAnime,
        rating
    );


    const stars =
        document.querySelectorAll(
            "#popupStars span"
        );


    stars.forEach(
        (star, index) => {

            if (
                index < rating
            ) {

                star.classList.add(
                    "selected"
                );

            } else {

                star.classList.remove(
                    "selected"
                );
            }

        }
    );


    const ratingText =
        document.getElementById(
            "popupYourRating"
        );


    if (ratingText) {

        ratingText.textContent =
            "Your Rating: " +
            rating +
            "/5 ⭐";
    }
}

function rateAnime(animeName, rating) {

    // Save rating
    localStorage.setItem(
        "rating-" + animeName,
        rating
    );

    // Find correct rating box
    const ratingBox = document.querySelector(
        `.rating[data-anime="${animeName}"]`
    );

    if (!ratingBox) {
        return;
    }

    // Get stars
    const stars = ratingBox.querySelectorAll("span");

    // Update stars
    stars.forEach((star, index) => {

        if (index < rating) {
            star.classList.add("selected");
        } else {
            star.classList.remove("selected");
        }

    });

    // Update rating text
    const ratingText =
        document.getElementById("rating-" + animeName);

    if (ratingText) {

        ratingText.textContent =
            "Your Rating: " +
            rating +
            "/5 ⭐";
    }
}

// ======================================================
// PAGE LOAD
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Update favorite count
        updateFavoriteCount();


        // Load old ratings
        const animeNames = [
            "naruto",
            "onepiece",
            "tokyo"
        ];


        animeNames.forEach(
            animeName => {

                const savedRating =
                    localStorage.getItem(
                        "rating-" +
                        animeName
                    );


                if (savedRating) {

                    rateAnime(
                        animeName,
                        parseInt(
                            savedRating
                        )
                    );
                }

            }
        );

    }
);
// ================= LOAD FAVORITE BUTTONS =================

document.addEventListener("DOMContentLoaded", function () {

    const favorites =
        JSON.parse(localStorage.getItem("animeFavorites")) || [];

    const favoriteButtons =
        document.querySelectorAll(".favorite-btn");

    favoriteButtons.forEach(button => {

        const onclickText =
            button.getAttribute("onclick");

        if (!onclickText) return;

        if (onclickText.includes("'naruto'") &&
            favorites.includes("naruto")) {

            button.innerHTML = "❤️ Added";
            button.classList.add("added");

        }

        else if (onclickText.includes("'onepiece'") &&
            favorites.includes("onepiece")) {

            button.innerHTML = "❤️ Added";
            button.classList.add("added");

        }

        else if (onclickText.includes("'tokyo'") &&
            favorites.includes("tokyo")) {

            button.innerHTML = "❤️ Added";
            button.classList.add("added");
        }
    });

});
// ================= DARK / LIGHT MODE =================

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const button =
        document.getElementById("themeToggle");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        button.innerHTML = "☀️ Light";

    } else {

        localStorage.setItem("theme", "light");

        button.innerHTML = "🌙 Dark";
    }
}

// ================= THEME TOGGLE =================

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const button =
        document.getElementById("themeToggle");

    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");

        button.innerHTML = "🌙 Dark";

    } else {

        localStorage.setItem("theme", "dark");

        button.innerHTML = "☀️ Light";
    }
}


// ================= LOAD THEME =================

document.addEventListener("DOMContentLoaded", function () {

    const savedTheme =
        localStorage.getItem("theme");

    const button =
        document.getElementById("themeToggle");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        if (button) {
            button.innerHTML = "🌙 Dark";
        }

    } else {

        if (button) {
            button.innerHTML = "☀️ Light";
        }
    }

});
// ================= MORE OPTIONS =================

function toggleMoreAnime() {

    const moreAnime =
        document.querySelectorAll(".more-anime");

    const button =
        document.getElementById("moreOptionsBtn");

    const isHidden =
        moreAnime.length > 0 &&
        getComputedStyle(moreAnime[0]).display === "none";

    moreAnime.forEach(card => {
        card.style.display = isHidden ? "block" : "none";
    });

    if (button) {
        button.textContent =
            isHidden ? "Show Less" : "More Options";
    }
}