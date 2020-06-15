module.exports = app => {
    const mongoose =require('mongoose')
    //链接数据库
    mongoose.connect('mongodb://localhost:27017/node_vue_moba', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })

    //利用require-all 包 导入model文件夹下所有文件
    require('require-all')(__dirname + '/../models')
}