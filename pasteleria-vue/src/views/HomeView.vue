<template>
  <div class="home">
    <Flavours/>
    <Decorations/>
    <Combine-flavours/>
    <Combine-deco/>
    <FormClient/>
    <InfoPasteleria/>
  </div>
</template>

<script>
import InfoPasteleria from '../components/client/information.vue';
import Flavours from '../components/client/flavours.vue';
import Decorations from '../components/client/decoration.vue';
import CombineFlavours from '../components/client/combine-flav.vue';
import CombineDeco from '../components/client/combine-deco.vue';
import FormClient from '../components/client/form-client.vue';

export default {
  name: 'HomeView',
  components: {
    InfoPasteleria,
    Flavours,
    CombineFlavours,
    Decorations,
    CombineDeco,
    FormClient,
  }
}
</script>
<style>
html, body{
    padding: 0;
    margin: 0;
    font-size: 30px;
    background: url("../assets/img/background.png");
}
</style>