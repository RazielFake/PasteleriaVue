<template>
    <div class="flavoursQuantity">
        <h1>Cantidad de sabores restantes</h1>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Vainilla</td>
                    <td>{{ $store.getters.getVanillaBreadQuantity }}</td>
                </tr>
                <tr>
                    <td>Chocolate</td>
                    <td>{{ $store.getters.getStrawberryBreadQuantity }}</td>
                </tr>
                <tr>
                    <td>Fresa</td>
                    <td>{{ $store.getters.getChocolateBreadQuantity }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'FlavoursQuantity',
}
</script>
<style scoped>
.flavoursQuantity{
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