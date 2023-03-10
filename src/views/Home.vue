<template>
  <div class="home-page">
    <div class="block">
      <h1>Welcome to JobSherpa</h1>
      <p class="intro">We help you stay organized in your job search.</p>
      <br />
      <p class="intro">
        With plenty of tools to help find jobs already, we aim to keep it all
        organized, with a free, open-source tool, that doesn't sell your
        information.
      </p>
      <v-btn to="register" color="black" size="x-large" class="button"
        >Try It Out</v-btn
      >
    </div>
    <div class="block">
      <v-img src="../../public/icon.png" alt="JobSherpa Logo" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
img {
  height: auto;
  max-width: 100%;
}

.site-header {
  background-color: #fedf9e;
  margin: 5%;
}

nav a {
  color: black;
  display: inline-block;
  margin: 0 4px;
  text-decoration: none;
}
nav a:first-child {
  margin: 0 4px 0 0;
}

main {
  margin: 0 5%;
}

.home-page {
  display: grid;
  font-size: 24px;
  grid-template-columns: 50% 50%;
  line-height: 1.4;
  margin: 2em auto 0 auto;
  max-width: 45em;
  padding: 0;
}
.home-page h1 {
  font-size: 1em;
  margin: 4em 0 0 0;
}
.home-page .button {
  margin: 1em 0;
}

footer {
  background-color: #000000;
  color: rgba(255, 255, 255, 0.6);
  padding: 5%;
}

@media screen and (max-width: 45em) {
  .home-page {
    display: block;
  }
}
</style>
