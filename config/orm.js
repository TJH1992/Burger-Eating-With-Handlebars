// Import MySQL connection.
var connection = require("../config/connection.js");

function createQmarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
	var arr = [];
	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}
	return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var dbQuery = "INSERT INTO " + table;
        dbQuery += " (" + cols.toString();
        dbQuery += ") ";
        dbQuery += "VALUES (";
        dbQuery += createQmarks(vals.length);
        dbQuery += ") ";

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var dbQuery = "UPDATE " + table + " SET " + objToSql(objColVals); + " WHERE " + condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

};

// Export the orm object for the model.
module.exports = orm;