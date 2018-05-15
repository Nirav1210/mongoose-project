let EmailModel = require('../models/email');
let UserModel = require('../models/user');

let msg = new EmailModel({
    email: 'someEmail.12@gmail.com'
})

let user = new UserModel({
    firstName: 'hello',
    lastName: 'world'
})

function virtualPropTest() {
    user.fullName = 'Nirav Bhut'

    console.log(user.toJSON())
    console.log(user.fullName)
}

function instacneMethodUsecase() {
    let initials = user.getInitials()
    console.log(initials);
}

function staticMethodUsecase() {
    UserModel.getUsers()
        .then(records => {
            console.log(records)
        })
        .catch(err => {
            console.error(err)
        })
}

function saveData() {
    msg.save()
    .then(record => {
        console.log(record)
    })
    .catch(err => {
        console.error(err)
    })
}

function findRecord() {
    EmailModel.find({ email: 'someemail.12@gmail.com' })
        .then(record => {
            console.log(record)
        })
        .catch(err => {
            console.error(err)
        })
}

function updateRecord() {
    EmailModel.findOneAndUpdate({
        email: 'someemail.12@gmail.com'
    },
    {
        email: 'some@gmail.com'
    },
    {
        new: true,
        runValidators: true
    })
    .then(record => {
        console.log(record)
    })
    .catch(err => {
        console.error(err)
    })
}

function deleteRecord() {
    EmailModel.findOneAndRemove({
        email: 'some@gmail.com'
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    })
}

// saveData();
// findRecord();
// updateRecord();
// deleteRecord();
// virtualPropTest();
// instacneMethodUsecase();
staticMethodUsecase();