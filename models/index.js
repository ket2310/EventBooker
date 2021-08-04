const Event  = require('./Event');
const User  = require('./User');

// ASSOCIATIONS:
User.hasMany(Event, {
    foreignKey: 'event_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(Poster, {
    foreignKey: 'event_id'
})


module.exports = { Event, User}