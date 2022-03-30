<template>
    <div class="formClient">
      <h1>Realiza tu pedido con nosotros!</h1>
      <form action="pedido.js">
        
        <div class="generalData">
          <label for="nombre">Nombre de quien realiza el pedido:</label><br>
          <input v-model="name" placeholder="Nombre"><br>
          <label for="telefono">Telefono de contacto:</label><br>
          <input v-model="phoneNumber" type="number" name="telefono" id="telefono" placeholder="Telefono"><br>
          <label for="correo">Email de contacto: </label><br>
          <input v-model="email" type="email" name="email" id="email" placeholder="email">
        </div>
        
        <br><br>
        <p>Elige el sabor del pan</p>
        <div class="bread box">
          <div>
            <input v-model="flavourStrawberry" type="checkbox" name="panFresa" id="panFresa" value="panFresa">
            <label for="strawberry"> Fresa</label><br>
          </div>
          <div>
            <input v-model="flavourVanilla" type="checkbox" name="panVainilla" id="panVainilla" value="panVainilla">
           <label for="vainilla"> Vainilla</label><br>
          </div>
          <div>
            <input v-model="flavourChocolate" type="checkbox" name="panChocolate" id="panChocolate" value="panChocolate">
            <label for="chocolate"> Chocolate</label>
          </div>
        </div>
        <br><br>

        <p>Elige los extras de tu pastel</p>
        <div class="extras box">
          <div>
            <input v-model="bunnys" type="checkbox" name="extraConejitos" id="extraConejitos" value="extraConejitos">
            <label for="extraConejitos">Conejitos de chocolate</label>
          </div>
          <div>
            <input v-model="chocolateDeco" type="checkbox" name="extraTabletas" id="extraTabletas" value="extraTabletas">
            <label for="extraTabletas">Tabletas de Chocolate</label>
          </div>
          <div>
            <input v-model="roses" type="checkbox" name="extraRosas" id="extraRosas" value="extraRosas">
            <label for="extraRosas">Rosas de Chantilly</label>
          </div>
          <div>
            <input v-model="peaches" type="checkbox" name="extraDurazno" id="extraDurazno" value="extraDurazno">
            <label for="extraDurazno">Duraznos</label>
          </div>
          <div>
            <input v-model="strawberryDeco" type="checkbox" name="extraFresa" id="extraFresa" value="extra">
            <label for="extrFresaa">Fresas</label>
          </div>
          <div>
            <input v-model="kiwi" type="checkbox" name="extraKiwi" id="extraKiwi" value="extraKiwi">
            <label for="extraKiwi">Kiwis</label>
          </div>
          <div>
            <input v-model="raspberry" type="checkbox" name="extraFramb" id="extraFramb" value="extraFramb">
            <label for="extraFramb">Frambuesas</label>
          </div>
        </div>
        <br><br>

        <p>Para cuantas personas?</p>
        <select v-model="size" name="personas" id="personas" style="font-size:30px">
            <option value="cuatro">4</option>
            <option value="ocho">8</option>
            <option value="doce">12</option>
            <option value="veinte">20</option>
        </select>

        <h4>Necesitas especificar algún detalle extra o deseas realizar un pedido distinto? 
        </h4>
        <textarea v-model="details" name="detalles" rows="10" cols="50" placeholder="Cuentanos lo que necesitas!" style="font-size:30px"></textarea>
        <br><br>

        <div class="finish box">
          <input type="reset" value="Restablecer">
          <input type="submit" value="Hacer pedido">
        </div>
    </form>
    </div>
</template>

<script>
export default {
  name: 'FormClient',
  computed: {
    flavourStrawberry: {
      get(){
        return this.$store.state.flavour;
      },
      set(flavour){
        this.$store.dispatch("colorChange",flavour);
      }
    }
  },
}
</script>
<style scoped>
.formClient{
    width: 100%;
    height: auto;
}
.box{
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
}
.bread input, .extras input{
  height: 25px;
  width: 25px;
}
.extras div, .bread div{
  width: 33%;
  margin-top: 2%;
}
.generalData input{
  font-size: 30px;
  margin-bottom: 2%;
}
.finish input{
  font-size: 30px;
}
</style>