<template>
    <div class="orders">
      <h3>Pedidos</h3>
      <table>
        <thead>
          <tr>
            <th>Numero de pédido</th>
            <th>Datos del cliente</th>
            <th>Sabor del pan</th>
            <th>Adornos</th>
            <th>Detalles extras</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>002</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Orders',
}
</script>
<style scoped>
.orders{
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
</style>