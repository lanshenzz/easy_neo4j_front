<template>
  <div class="hello">
    <el-row>
      <el-col :span="8">
        <div>
          <el-button @click="init">查询所有人</el-button>
          <el-input v-model="input" placeholder="依据姓名模糊查询"></el-input>
        </div></el-col>
      <el-col :span="16"><div>
        <el-table
          :data="user"
          style="width: 100%">
          <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="180">
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄"
            width="180">
          </el-table-column>
          <el-table-column
            prop="hobby"
            label="爱好"
            width="180">
          </el-table-column>
        </el-table>
      </div>

    </el-col>
    </el-row>

  </div>
</template>

<script >

export default {
  name: 'HelloWorld',
  data () {
    return {
      user:[],
      input:''
    }
  },
  created(){
  //  this.init()
  },
  methods:{
   init(){
     this.$axios.get('/user/getAll').then(res=>{
       this.user=res.data
       console.log("this.user="+JSON.stringify(this.user));
     })
   },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
