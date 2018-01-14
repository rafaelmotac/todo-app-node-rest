const sequelize = require('sequelize');
const db = require('../../config/database');
const Todo = db.define('user', {
    description: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {args: true, msg: 'Descrição não pode ser vazia'},
        }
    },
    done: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    }
});

// force: true will drop the table if it already exists
Todo.sync({ force: false });

module.exports = Todo
