<!-- 文章列表 -->
<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="name" label="标题" width="120"></el-table-column>
      <el-table-column prop="desc" label="内容" width="240"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="primary" size="mini">修改</el-button>
          <el-button @click="remove(scope.row._id)" type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ListArticle',
  data () {
    return {
      articles: []
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {
    this.fetch()
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  },
  methods: {
    fetch () {
      this.$http.get('article', this.articles).then(res => {
        console.log(res.data)
        this.articles = res.data
      })
    },
    edit (id) {
      console.log(id)
      // eslint-disable-next-line no-template-curly-in-string
      this.$router.push(`/article/modify/${id}`)
    },
    remove (id) {
      // eslint-disable-next-line no-template-curly-in-string
      this.$http.delete(`/article/${id}`).then(res => {
        this.$message({
          message: '文章删除成功!',
          type: 'success'
        })
        console.log(res.data)
        this.fetch()
      })
    }
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
