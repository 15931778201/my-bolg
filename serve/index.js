const express = require('express')
const app = express()

const mongoose = require('mongoose')

app.use(require('cors')())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/my-blog', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const Article = mongoose.model('Article', new mongoose.Schema({
  name: {
    type: String
  },
  desc: {
    type: String
  }
}))

app.get('/', async (req, res) => {
  res.send('index')
})

// 新增文章
app.post('/api/article', async (req, res) => {
  const article = await Article.create(req.body)
  res.send(article)
})

// 文章列表
app.get('/api/article', async (req, res) => {
  const article = await Article.find()
  res.send(article)
})

// 查看文章
app.get('/api/article/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})

// 删除文章
app.delete('/api/article/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})

// 修改文章
app.put('/api/article/:id', async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body)
  res.send(article)
})

app.listen('3001', () => {
  console.log('http://localhost:3001')
})
