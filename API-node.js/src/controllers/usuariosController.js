const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        } else {
            conn.query('select * from usuarios', (err, usuarios) => {
                res.render('usuarios', {
                    data: usuarios
                });
            });
        }

    })
};

controller.agregar = (req, res) => {
    const datos = req.body;
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        } else {
            conn.query('insert into usuarios set ?', [datos], (err, usuarios) => {
                res.redirect('/');
            });
        }

    });
};

controller.borrar = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('delete from usuarios where id = ?', [id], (err, usuarios) => {
            res.redirect('/');
        });
    });
};

controller.editar = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('select * from usuarios where id = ?', [id], (err, usuarios) => {
            res.render('usuarios_edit', {
                data: usuarios[0]
            });
        });
    });
};


controller.actualizar = (req, res) => {
    const { id } = req.params;
    const nuevosDatos = req.body;
    req.getConnection((err, conn) => {
        conn.query('update usuarios set ? where id = ?', [nuevosDatos, id], (err, usuarios) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;