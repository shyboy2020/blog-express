const express = require('express')
const path = require('path')

const app = express()

//开放静态资源
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))
app.use('/public/',express.static(path.join(__dirname,'./public/')))

//配置模板引擎
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

app.get('/',(req,res) => {
    res.render('index.html')
})

app.get('/register',(req,res) => {
    res.render('register.html')
})

app.listen(6324,() => {
    console.log('app is running...')
})