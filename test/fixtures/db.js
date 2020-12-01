const { response } = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/users')
const Task = require('../../src/models/tasks')


const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Tore',
    email: 'BasqaTore@gmail.com',
    password: '779977',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Tore2',
    email: 'BasqaTore2@gmail.com',
    password: '779977',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'first task',
    completed: false,
    owner: userOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'second task',
    completed: true,
    owner: userOne._id
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'third task',
    completed: true,
    owner: userTwo._id
}

const setupDatabase = async() => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()

}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase,

}