<template>
    <div class="combineDeco">
      <h1>Combinación de distintas decoraciones</h1>
      <h4>
        Puedes elegir entre dos o más decoraciones si así lo deseas!
        <br>
        Estos son algunos diseños!
      </h4>
      <ul class="elements">
        <ul>
          <li>Frambuesas y chocolate</li>
          <li>
            <img src="../../assets/img/raspChocolate.jpg" alt="raspberryChocolate">
          </li>
        </ul>
        <ul>
          <li>
            Kiwi y Fresas
          </li>
          <li>
          <img src="../../assets/img/kiwiStrawberry.jpg" alt="KiwiStrawberry">
          </li>
        </ul>
        <ul>
          <li>
            Duraznos, Kiwi y Fresas
          </li>
          <li>
          <img src="../../assets/img/peachesKiwi.png" alt="peachesKiwi">
          </li>
        </ul>
        <ul>
          <li>
            Fresas y Rosas
          </li>
          <li>
          <img src="../../assets/img/rosesStrawberry.jpeg" alt="strawberryRoses">
          </li>
        </ul>
      </ul>
      <h5>Los precios pueden variar dependiendo los adornos seleccionados</h5>
    </div>
</template>

<script>
export default {
  name: 'CombineDeco',
}
</script>
<style scoped>
.combineDeco{
  width: 100%;
  height: auto;
}
h5{
  opacity: 0.6;
}
.elements{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
img{
  width: 400px;
  height: 300px;
}
ul{
  padding-bottom: 25px;
}
ul, li{
  list-style: none;
}
</style>