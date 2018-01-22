const Todo = require('../api/model/todo');
const express = require('express');
const router = express.Router();
const Op = require('sequelize').Op;


module.exports = function (server) {

    router.get('/todo', function (req, res) {
        if (req.query.description) {
            Todo.findAll({
                where: {
                    description: { [Op.like]: `%${req.query.description}` }
                }
            }).then(todo => {
                res.json(todo);
            })
        } else {
            Todo.findAll().then(todo => {
                res.json(todo);
            });
        }
    });

    router.get('/todo/:id', function (req, res) {
        Todo.findAll({
            where: {
                id: {
                    [Op.eq]:
                        req.params.id
                }
            }
        }).then(todo => {
            res.json(todo);
        }).catch(error => {
            res.json(error);
        });
    });

    router.post('/todo', function (req, res, next) {
        let todo = Todo.create({
            description: req.body.description
        }).then((result) => {
            res.json(result);
        }).catch((error) => {
            res.json(error);
        })
    });

    router.put('/todo/:id', function (req, res) {
        Todo.update({
            description: req.body.description,
            done: req.body.done
        },
            {
                where: {
                    id:
                        { [Op.eq]: req.params.id }
                }
            }
        ).then(() => {
            Todo.findById(req.params.id).then(result => {
                res.json(result)
            })
        }).catch((error) => {
            res.json(error);
        })

    });

    router.delete('/todo/:id', function (req, res) {
        Todo.destroy({
            where: {
                id:
                    { [Op.eq]: req.params.id }
            }
        }).then((result) => {
            res.json('success')
        }).catch((error) => {
            res.json(error);
        })
    });

    server.use('/api', router);

}