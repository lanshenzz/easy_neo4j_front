<template>
  <div class="hello">
    <el-row>
      <el-col :span="8">
        <div><el-button>查询所有人</el-button></div></el-col>
      <el-col :span="16"><div>
        <el-table
          :data="user"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="日期"
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
      user:[]
    }
  },
  created(){
    this.init()
  },
  methods:{
   init(){
     this.$axios.get('/user/getAll').then(res=>{
       this.user=res.data
       console.log("this.user="+JSON.stringify(this.user));
     })
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
