<template>
    <div class="flavours">
      <h1>Sabores y precios</h1>
      <table>
        <thead>
          <tr>
            <th class="flavourTag">Sabor del pan</th>
            <th>Tamaño</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="4">Pan de vainilla</td>
            <td>4 personas</td>
            <td>${{ $store.getters.getVanilla4  }}</td>
            <td rowspan="4" colspan="2">
              <img src="../../assets/img/vanilla.jpg" alt="Vanilla">
            </td>
          </tr>
          <tr>
            <td>8 personas</td>
            <td>${{ $store.getters.getVanilla8  }}</td>
          </tr>
          <tr>
            <td>12 personas</td>
            <td>${{ $store.getters.getVanilla12  }}</td>
          </tr>
          <tr>
            <td>20 personas</td>
            <td>${{ $store.getters.getVanilla20  }}</td>
          </tr>

          <tr>
            <td rowspan="4">Pan de Fresa</td>
            <td>4 personas</td>
            <td>${{ $store.getters.getFresa4  }}</td>
            <td rowspan="4">
              <img src="../../assets/img/strawberry.jpg" alt="Strawberry">
            </td>
          </tr>
          <tr>
            <td>8 personas</td>
            <td>${{ $store.getters.getFresa8  }}</td>
          </tr>
          <tr>
            <td>12 personas</td>
            <td>${{ $store.getters.getFresa12  }}</td>
          </tr>
          <tr>
            <td>20 personas</td>
            <td>${{ $store.getters.getFresa20  }}</td>
          </tr>

          <tr style="">
            <td rowspan="4">Pan de chocolate</td>
            <td>4 personas</td>
            <td>{{ $store.getters.getChocolate4 }}</td>
            <td rowspan="4">
              <img src="../../assets/img/chocolate.jpg" alt="Chocolate">
            </td>
          </tr>
          <tr>
            <td>8 personas</td>
            <td>${{ $store.getters.getChocolate8 }}</td>
          </tr>
          <tr>
            <td>12 personas</td>
            <td>${{ $store.getters.getChocolate12 }}</td>
          </tr>
          <tr>
            <td>20 personas</td>
            <td>${{ $store.getters.getChocolate20 }}</td>
          </tr>

          
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Flavours',
}
</script>
<style scoped>
.flavours{
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
img{
  width: 50%;
  height: 300px;
}
.flavourTag{
  width: 20%;
}
</style>