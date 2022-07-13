<template>
  <div>
    <!-- <div class="main">
      <h1>Free to play games</h1>
      <div class="launchbox" v-for="article in articles" :key="article">
        <div>Name:{{ article.id }}</div>
        <div>Name:{{ article.title }}</div>
        <div>Name:{{ article.thumbnail }}</div>
        <div>Name:{{ article.short_description }}</div>
        <div>Name:{{ article.game_url }}</div>
        <div>Name:{{ article.genre }}</div>
        <div>Name:{{ article.platform }}</div>
        <div>Name:{{ article.publisher }}</div>
        <div>Name:{{ article.developer }}</div>
        <div>Name:{{ article.release_date }}</div>
        <div>Name:{{ article.freetogame_profile_url }}</div>
        <div><img class="patchimg" :src="article.thumbnail" /></div>
      </div>
    </div> -->
    <div class="main">
      <div class="launchbox" v-for="article in articles" :key="article">
        <figure class="snip1336">
          <img v-if="article.thumbnail" :src="article.thumbnail" alt="uploaded-image" class="launchimage" />
          <img v-else src="@/assets/img/default.png" alt="default-image" />
          <figcaption>
            <img class="profile" :src="article.thumbnail" alt="profile" />
            <h2>
              {{ article.title }}<span>{{ article.publisher }}</span>
            </h2>
            <p>
              {{ article.short_description }}
            </p>
            <!-- <a href="launch.links.wikipedia" class="follow">
              {{ launch.links.wikipedia }}</a
            >
            <a href="#" class="info">More Info</a> -->
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      articles: [],
    };
  },
  created() {
    // Simple GET request using fetch

    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.APIKEY,
        "X-RapidAPI-Host": process.env.APIHOST,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      // .then((json) => console.log(json))
      .then((json) => (this.articles = json))
      .catch((err) => console.error("error:" + err));
  },
};
</script>
<style scoped>
.main {
  max-width: 1100px;
  margin: auto auto;
  display: flex;
  flex-wrap: wrap;
}

.launchbox {
  margin-bottom: 30px;
  border: 1px solid black;
}

.patchimg {
  width: 200px;
}

/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */
/*  */

@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,600);

.snip1336 {
  font-family: "Roboto", Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 230px;
  max-width: 315px;
  width: 100%;
  color: #ffffff;
  text-align: left;
  line-height: 1.4em;
  background-color: #141414;
}

.snip1336 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.snip1336 img {
  max-width: 100%;
  vertical-align: top;
  opacity: 0.85;
}

.snip1336 figcaption {
  width: 100%;
  background-color: #141414;
  padding: 25px;
  position: relative;
}

.snip1336 figcaption:before {
  position: absolute;
  content: "";
  bottom: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 55px 0 0 400px;
  border-color: transparent transparent transparent #141414;
}

.snip1336 figcaption a {
  padding: 5px;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 0.7em;
  text-transform: uppercase;
  margin: 10px 0;
  display: inline-block;
  opacity: 0.65;
  width: 47%;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}

.snip1336 figcaption a:hover {
  opacity: 1;
}

.snip1336 .profile {
  border-radius: 50%;
  position: absolute;
  bottom: 100%;
  left: 25px;
  z-index: 1;
  max-width: 90px;
  opacity: 1;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.snip1336 .follow {
  margin-right: 4%;
  border-color: #2980b9;
  color: #2980b9;
}

.snip1336 h2 {
  margin: 0 0 5px;
  font-weight: 300;
}

.snip1336 h2 span {
  display: block;
  font-size: 0.5em;
  color: #2980b9;
}

.snip1336 p {
  margin: 0 0 10px;
  font-size: 0.8em;
  letter-spacing: 1px;
  opacity: 0.8;
}
</style>
