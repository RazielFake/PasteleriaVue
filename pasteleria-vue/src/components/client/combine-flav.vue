<template>
    <div class="combineFlavours">
      <h1>Combinacion de sabores</h1>
      <table>
        <tbody>
          <tr>
            <td rowspan="4">Combinaciones de 2 diferentes panes</td>
            <td>4 personas</td>
            <td>${{ $store.getters.getDoubleComb4 }}</td>
            <td rowspan="4">
              <img src="../../assets/img/chocoVanilla.jpg" alt="twoFlavours" class="image">
            </td>
          </tr>
          <tr>
            <td>8 personas</td>
            <td>${{ $store.getters.getDoubleComb8 }}</td>
          </tr>
          <tr>
            <td>12 personas</td>
            <td>${{ $store.getters.getDoubleComb12 }}</td>
          </tr>
          <tr>
            <td>20 personas</td>
            <td>${{ $store.getters.getDoubleComb20 }}</td>
          </tr>

          <tr>
            <td rowspan="4">Combinaciones de 3 diferentes panes</td>
            <td>4 personas</td>
            <td>${{ $store.getters.getThreeComb4 }}</td>
            <td rowspan="4" class="image">
              <img src="../../assets/img/threeFlavours.png" alt="combine">
            </td>
          </tr>
          <tr>
            <td>8 personas</td>
            <td>${{ $store.getters.getThreeComb8 }}</td>
          </tr>
          <tr>
            <td>12 personas</td>
            <td>${{ $store.getters.getThreeComb12 }}</td>
          </tr>
          <tr>
            <td>20 personas</td>
            <td>${{ $store.getters.getThreeComb20 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'CombineFlavours',
}
</script>
<style scoped>
.combineFlavours{
  width: 100%;
  height: auto;
}
table{
  width: 100%;
}
table, td{
  border: 4px solid;
  border-collapse: collapse;
}
img{
  width: 80%;
  height: 300px;
}
.image{
  width: 40%;
}
</style>