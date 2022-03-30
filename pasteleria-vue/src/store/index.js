import { createStore } from 'vuex'

export default createStore({
  state: {
    vanilla4 : 70,
    vanilla8 : 130,
    vanilla12 : 200,
    vanilla20 : 300,
    fresa4 : 80,
    fresa8 : 150,
    fresa12 : 220,
    fresa20 : 350,
    chocolate4 : 90,
    chocolate8 : 170,
    chocolate12 : 250,
    chocolate20 : 400,

    vanillaBreadQuanqity : 30,
    strawBreadQuantity : 30,
    chocolateBreadQuantity : 30,

    priceBunny : 70,
    pricePeaches : 50, 
    priceStrawberry : 70,
    priceRasperry : 80, 
    priceKiwi : 70, 
    priceDecoChocolate : 130, 
    priceRoses : 80,

    bunnyQuant : 30,
    peachesQuant : 30,
    strawberryQuant : 30,
    raspberryQuant : 30,
    kiwiQuant : 30,
    chocolateQuant : 30,
    cremeQuant : 30,
    
    doubleComb4 : 100, 
    doubleComb8: 180,
    doubleComb12 : 250, 
    doubleComb20 : 430, 
    threComb4 : 150, 
    threComb8 : 230,
    threComb12 : 300,
    threComb20 : 480,


  },
  getters: {
    getVanilla4(state){
        return state.vanilla4;
    },
    getVanilla8(state){
        return state.vanilla8;
    },
    getVanilla12(state){
        return state.vanilla12;
    },
    getVanilla20(state){
        return state.vanilla20;
    },
    getFresa4(state){
      return state.fresa4;
    },
    getFresa8(state){
        return state.fresa8;
    },
    getFresa12(state){
        return state.fresa12;
    },
    getFresa20(state){
        return state.fresa20;
    },
    getChocolate4(state){
      return state.chocolate4;
    },
    getChocolate8(state){
        return state.chocolate8;
    },
    getChocolate12(state){
        return state.chocolate12;
    },
    getChocolate20(state){
        return state.chocolate20;
    },
    getPriceBunny(state){
      return state.priceBunny;
    },
    getPricePeaches(state){
      return state.pricePeaches;
    },
    getPriceStraw(state){
      return state.priceStrawberry;
    },
    getPriceRasp(state){
      return state.priceRasperry;
    },
    getPriceKiwi(state){
      return state.priceKiwi;
    },
    getPriceChoco(state){
      return state.priceDecoChocolate;
    },
    getPriceRoses(state){
      return state.priceRoses;
    },
    getDoubleComb4(state){
      return state.doubleComb4;
    },
    getDoubleComb8(state){
      return state.doubleComb8;
    },
    getDoubleComb12(state){
      return state.doubleComb12;
    },
    getDoubleComb20(state){
      return state.doubleComb20;
    },
    getThreeComb4(state){
      return state.threComb4;
    },
    getThreeComb8(state){
      return state.threComb8;
    },
    getThreeComb12(state){
      return state.threComb12;
    },
    getThreeComb20(state){
      return state.threComb20;
    },
    getVanillaBreadQuantity(state){
      return state.vanillaBreadQuanqity;
    },
    getStrawberryBreadQuantity(state){
      return state.strawBreadQuantity;
    },
    getChocolateBreadQuantity(state){
      return state.chocolateBreadQuantity;
    },
    //DECORATIONS
    getBunnyQuantity(state){
      return state.bunnyQuant;
    },
    getStrawberryQuantity(state){
      return state.strawberryQuant;
    },
    getRaspberryQuantity(state){
      return state.raspberryQuant;
    },
    getKiwiQuantity(state){
      return state.kiwiQuant;
    },
    getPeachesQuantity(state){
      return state.peachesQuant;
    },
    getChocolateQuantity(state){
      return state.chocolateQuant;
    },
    getCremeQuantity(state){
      return state.cremeQuant;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
