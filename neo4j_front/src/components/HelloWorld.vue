<template>
  <div class="hello">
    <el-row>
      <el-col :span="8">
        <div>
          <el-button @click="init">查询所有人</el-button>
          <el-input v-model="input" placeholder="依据姓名查询一度关系" @change="getFriends"></el-input>
          <el-button @click="getCommonFriends">查询二者共同好友</el-button>
          <el-input v-model="name1" placeholder="输入姓名1" ></el-input>
          <el-input v-model="name2" placeholder="输入姓名2" ></el-input>
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
      input:'',
      name1:'',
      name2:''
    }
  },
  created(){
  //  this.init()
  },
  methods:{
   init(){
     this.$axios.get('/user/getAll').then(res=>{
       this.user=res.data
     //  console.log("this.user="+JSON.stringify(this.user));
     })
   },
    getFriends(){
      this.$axios.get('/user/getByName/'+this.input).then(res=>{
        this.user=res.data.userModels
        console.log("this.user="+JSON.stringify(this.user));
      })
    },
    getCommonFriends(){
      this.$axios.get('/user/getCommonFriends/'+this.name1+'/'+this.name2).then(res=>{
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
