const express = require('express')

const app = express()
//在当前app实例上设置一个变量, 值为第二参数
app.set('secret', 'jndvjsd32j23')
//允许跨域
app.use(require('cors')())
//识别客户端提交过来的 json 数据
app.use(express.json())
//设置静态托管
app.use('/uploads', express.static(__dirname + '/uploads'))
//把从web admin打包到server端的文件托管
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))




require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)


app.listen(3333, () => {
    console.log('http://localhost:3333')
    //res.send('🐂🍺')
})


