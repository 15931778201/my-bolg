<!--修改文章-->
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
        <el-button type="primary" native-type="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ModifyArticle',
  data () {
    return {
      article: {}
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    onSubmit () {
      // eslint-disable-next-line no-template-curly-in-string
      this.$http.put(`/article/${this.$route.params.id}`, this.article).then(res => {
        this.$message({
          message: '文章修改成功!',
          type: 'success'
        })
        this.$router.push('/article/index')
        console.log(res.data)
      })
      console.log('submit!')
    },
    fetch () {
      // eslint-disable-next-line no-template-curly-in-string
      this.$http.get(`/article/${this.$route.params.id}`).then(res => {
        console.log(res.data)
        this.article = res.data
      })
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
