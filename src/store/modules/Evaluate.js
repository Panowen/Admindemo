import * as type from "../mutation-types.js"
const state={
    arr:[1,2,3],
    count:"woa"
}
const getters={

}
const actions={
    add({commit},value){
       return new Promise((resolve,reject)=>{
            setTimeout(function() {
                 commit("typesadd",value)
                 resolve()
            }, 1000);
       })
    },
    delec({commit}){
         setTimeout(function() {
                commit("typedelc")
            }, 1000);
        
    }
}
const mutations={
    typesadd(state,value){
        state.arr.push(value)
    },
    typedelc(state){
        state.arr.pop()
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}