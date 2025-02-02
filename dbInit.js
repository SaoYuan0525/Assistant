const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const force = process.argv.includes('--force') || process.argv.includes('-f');
const user = require('./modules/socialCreditScore/user')(sequelize, Sequelize.DataTypes);

sequelize.sync({ force }).then(() => {
	console.log('Database synced');
	sequelize.close();
}).catch(console.error);