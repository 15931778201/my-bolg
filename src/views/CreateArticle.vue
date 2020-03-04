<!-- 创建文章 -->
<template>
  <div>
    <el-form @submit.native.prevent="onSubmit" ref="article" :model="article" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="article.name"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CreateArticle',
  data () {
    return {
      article: {}
    }
  },
  created () {

  },
  methods: {
    onSubmit () {
      this.$http.post('article', this.article).then(res => {
        this.$message({
          message: '文章创建成功!',
          type: 'success'
        })
        this.$router.push('/article/index')
        console.log(res.data)
      })
      console.log('submit!')
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
