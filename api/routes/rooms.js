const Room = require('../controllers/rooms')

module.exports = api => {
    api.route('/rooms')
        .post(Room.create)
        .get(Room.getAll)
    
    api.route('/rooms/:id')
        .delete(Room.delete)
        .put(Room.update)
        .get(Room.getById)
}