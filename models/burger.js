const orm = require('../config/orm.js')

var burger = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res)
        })
    },
    insertOne: (column, value, cb) => {
        orm.insertOne('burgers', column, value, (res) => {
            cb(res)
        })
    },
    updateOne: (column, value, primaryKey, cb) => {
        orm.updateOne('burgers', column, value, primaryKey, (res) => {
            cb(res)
        })
    }
}

module.exports = burger