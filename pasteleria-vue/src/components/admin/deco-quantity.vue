<template>
<div class="decorationQuantity">
  <h1>Cantidad de adornos que quedan</h1>
  <table>
      <thead>
          <tr>
              <th>Producto</th>
              <th>Cantidad</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>Fresas</td>
              <td>{{ $store.getters.getStrawberryQuantity }}</td>
          </tr>
          <tr>
              <td>Duraznos</td>
              <td>{{ $store.getters.getPeachesQuantity }}</td>
          </tr>
          <tr>
              <td>Kiwis</td>
              <td>{{ $store.getters.getKiwiQuantity }}</td>
          </tr>
          <tr>
              <td>Frambuesas</td>
              <td>{{ $store.getters.getRaspberryQuantity }}</td>
          </tr>
          <tr>
              <td>Conejitos</td>
              <td>{{ $store.getters.getBunnyQuantity }}</td>
          </tr>
          <tr>
              <td>Tabletas de chocolate</td>
              <td>{{ $store.getters.getChocolateQuantity }}</td>
          </tr>
          <tr>
              <td>Chantilly</td>
              <td>{{ $store.getters.getCremeQuantity }}</td>
          </tr>
      </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: 'DecorationQuantity',
}
</script>
<style scoped>
.decorationQuantity{
    width: 100%;
    height: auto;
}
table{
    width: 100%;
}
table, th, td{
    border: 4px solid;
    border-collapse: collapse;
}
th{
    width: 50%;
}
</style>