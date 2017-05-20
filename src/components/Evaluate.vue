
<template>
    <div  class="tabs__content">
       <div @click="handle">
       {{arr}}
       </div>
        
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    data () {
        return {
            lists:[1,2,3]
        }
    },
    created: function () {
        console.log(this.$store.state)
    },
    computed: mapState({
        arr:state=>state.a.arr,
        count:state=>state.a.count
    }),
    
    methods: {
        handle: function () {
            this.$store.dispatch('add', 2).then(()=>{
                this.$store.dispatch("delec")
            })
        }
    }
}

</script>