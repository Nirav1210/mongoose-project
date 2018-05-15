let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

// virtual property getter
userSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName
})

// virtual property setter
userSchema.virtual('fullName').set(function(name) {
    let str = name.split(' ')

    this.firstName = str[0]
    this.lastName = str[1]
})

/**
 * Adding instance and static methods is a nice approach to implement an 
 * interface to database interactions on collections and records.
 */

// Instance method example (get initials from a full name)
userSchema.methods.getInitials = function() {
    return this.firstName[0] + this.lastName[0]
}

// static method example (retrive all users in a database)
userSchema.statics.getUsers = function() {
    return new Promise((resolve, reject) => {
        this.find((err, records) => {
            if(err) {
                console.error(err)
                return reject(err)
            }

            resolve(records)
        })
    })
}

module.exports = mongoose.model('User', userSchema);