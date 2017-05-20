<template>
     <el-form label-position="left" :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="商品名称">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="订单号">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="外部单号">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="付款方式">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="物流方式">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="下单时间">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="完成时间">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="订单状态">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="维权状态">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="订单状态">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="收货人姓名">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="收货人手机">
              <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">筛选</el-button>
            <el-button size="small"><img class="statement" src="../assets/img/1-15.png" />生成报表</el-button>
            <el-button size="small"><img class="statement" src="../assets/img/1-17.png"  />查看已生成报表</el-button>
    </el-form>
</template>
<script>
export default {
    data () {
        return {
                formInline: {
                user: '',
                region: ''
            }
        }
    },
    methods: {
        onSubmit:function (params) {
            
        }
    }
}

</script>
<style>
  .statement{
    
    vertical-align:bottom
  }
</style>
