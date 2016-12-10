'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
sequelize.sync({
    force: true
}).then(function() {

    db.User.create({
        username: "testuser1",
        email: "test@test.com",
        password: "Test123",
        first_name: "Joe",
        last_name: "Doe",
    }),
    db.User.create({
        username: "jptomanelli",
        email: "jptomanelli@gmail.com",
        password: "password",
        first_name: "John",
        last_name: "Tomanelli",
    }),
    db.Post.create({
        title: "Android-design-template",
        description: "This is a State of the Art Android Material Design template. You can use this project as a template for upcoming App projects. Just clone the project, change package name and make all necessary cus… ",
        link : "https://github.com/rodriguez10100/",
        language : "Java",
        skill : "Intermediate",
    }),
    db.Post.create({
        title: "Pixi.js",
        description: "The aim of this project is to provide a fast lightweight 2D library that works across all devices. The Pixi renderer allows everyone to enjoy the power of hardware acceleration without prior knowledge of WebGL. Also, it's fast. Really fast.",
        link : "https://github.com/pixijs/pixi.js",
        language : "Javascript",
        skill : "Advanced",
    }),
    db.Post.create({
        title: "Scrapy",
        description: "Scrapy is a fast high-level web crawling and web scraping framework, used to crawl websites and extract structured data from their pages. It can be used for a wide range of purposes, from data mining to monitoring and automated testing.",
        link : "https://github.com/scrapy/scrapy",
        language : "Python",
        skill : "Advanced",
    }),
    db.Post.create({
        title: "Fake ATM",
        description: "I'm a freshman looking to create an ATM program to get a better understanding of OOP and pointers within C++. After the class is build I would like to create a running application with a GUI using QT.",
        link : "https://github.com/amaclean199/ATM-App",
        language : "C++",
        skill : "Beginner",
    })

});
module.exports = db;
