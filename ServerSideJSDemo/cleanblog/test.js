const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

BlogPost.create({
    title: '红楼梦',
    body: '这是一个关于石头的故事！'
}, (error, blogpost) => {
    console.log(error, blogpost);
});