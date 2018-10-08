const mysql = require('mysql')

const connect = mysql.createPool({
	connectionLimit:50,
	hos: 'localhost',
	user: 'root',
	password: '',
	database: 'api_v2'
})

module.exports = connect