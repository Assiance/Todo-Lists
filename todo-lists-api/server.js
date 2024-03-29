const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const todoListRoutes = require('./routes/todo-list-routes');
const sequelize = require('./db/connect');

app.use(cors());
app.use(bodyParser.json());

app.use('/todos', todoListRoutes);

sequelize.sync({ force: false });
startServer();



async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(4000, () => {
      console.log('server started running on port 4000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}