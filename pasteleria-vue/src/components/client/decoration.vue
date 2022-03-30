<template>
    <div class="decorations">
      <h1>Decoraciones</h1>

    <ul class="elements">
      <li>
        Conejitos de chocolate
        <ul>
          <li>${{ $store.getters.getPriceBunny }}</li>
          <li>
            <img src="../../assets/img/bunnyChocolate.jpg" alt="chocolate Bunnys">
          </li>
        </ul>
      </li>

      <li>
        Durazno
          <ul>
            <li>${{ $store.getters.getPricePeaches }}</li>
            <li>
              <img src="../../assets/img/peach.jpg" alt="peaches">
            </li>
          </ul>
      </li>

      <li>
        Fresas
          <ul>
            <li>${{ $store.getters.getPriceStraw }}</li>
            <li>
              <img src="../../assets/img/strawberryDeco.jpeg" alt="strawberryDecy">
            </li>
          </ul>
      </li>

      <li>
        Frambuesa
        <ul>
          <li>${{ $store.getters.getPriceRasp }}</li>
          <li>
            <img src="../../assets/img/raspberry.jpg" alt="raspberryDeco">
          </li>
        </ul> 
      </li>

      <li>
        Kiwi
        <ul>
          <li>${{ $store.getters.getPriceKiwi }}</li>
          <li>
            <img src="../../assets/img/kiwi.jpg" alt="kiwiDeco">
          </li>
        </ul>
      </li>
      
      <li>
        Tabletas de chocolate
        <ul>
          <li>${{ $store.getters.getPriceChoco }}</li>
          <li><img src="../../assets/img/chocolateDeco.jpg" alt="cocolateDecoration"></li>
        </ul>  
      </li>
      <li>
        Rosas de Chantilly
        <ul>
          <li>${{ $store.getters.getPriceRoses }}</li>
          <li><img src="../../assets/img/roses.jpg" alt="roses"></li>
        </ul>
      </li>
    </ul>




    </div>
</template>

<script>
export default {
  name: 'Decorations',
}
</script>
<style scoped>
.decorations{
  width: 100%;
  height: auto;
}
.elements{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
img{
  width: 70%;
  height: 50%;
}
ul{
  padding-bottom: 25px;
}
ul, li{
  list-style: none;
}
</style>