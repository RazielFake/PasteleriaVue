<template>
  <div class="about">
    <FlavoursQuantity/>
    <DecorationQuantity/>
    <Orders/>
  </div>
</template>
<script>
import FlavoursQuantity from '../components/admin/flavours-quantity.vue';
import DecorationQuantity from '../components/admin/deco-quantity.vue';
import Orders from '../components/admin/orders.vue';

export default {
  name: 'AboutView',
  components: {
    FlavoursQuantity,
    DecorationQuantity,
    Orders,
  }
}
</script>
<style>
html, body{
    padding: 0;
    margin: 0;
    font-size: 30px;
}
</style>