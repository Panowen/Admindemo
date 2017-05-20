import Vue from "vue"
import Vuex from "vuex"
// import * as actions from './actions'
// import * as getters from './getters'
import Allorder from "./modules/Evaluate.js"
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        a:Allorder
    }
    
})