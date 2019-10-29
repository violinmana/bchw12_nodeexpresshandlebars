var connection = require('./connection.js')

var orm = {
    selectAll: (table, cb) => {
        connection.query('SELECT * FROM ??', table, (err, res) => {
            if (err) throw err
            cb(res)
        })
    },
    insertOne: (table, column, value, cb) => {
        connection.query('INSERT INTO ?? (??) VALUES (??)', [table, column, value, cb], (err, res) => {
            if (err) throw err
            cb(res)
        })
    },
    updateOne: (table, column, value, primaryKey, cb) => {
        connection.query('UPDATE ?? SET ?? = ?? WHERE id = ??', [table, column, value, primaryKey], (err, res) => {
            if (err) throw err
            cb(res)
        })
    }
}

module.exports = orm