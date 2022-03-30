<template>
  <div class="navigation">
    <nav>
      <ul class="elements">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
        <router-link to="/about">Admin</router-link>
        </li>
      </ul>
    </nav>
    <img class="logo" src="./assets/img/Logo.png" alt="bakeryLogo">
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navigation{
  width: 100%;
  height: 200px;
}
nav {
  height: 100px;
  top: 30px;
  position: absolute;
  width: 100%;
  z-index: 1;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #f8cb1a;
}
.elements{
  display: flex;
  justify-content: space-around;
  align-content: center;
  list-style: none;
}
img{
  width: 20%;
  height: 100%;
  border-radius: 50%;
}
.logo{
  margin-top: 5px;
}
</style>
