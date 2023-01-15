const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const apiUrl = '/api/v1';
const authData = require('../server/data/auth');
const userData = require('../server/data/users');
const notificationData = require('../server/data/notifications');

server.post(`${apiUrl}/token`, (req, res, next) => {
  res.status(200).send(authData.getToken);
});

server.get(`${apiUrl}/users/me`, (req, res, next) => {
  res.status(200).send(userData.getMe);
});

server.get(`${apiUrl}/notifications`, (req, res, next) => {
  res.status(200).send(notificationData.listNotifications);
});

server.post(`${apiUrl}/notifications`, (req, res, next) => {
  const id = getRandomInteger(100, 1000000);
  res.status(201).send({ id, ...req.body });
});

server.delete(`${apiUrl}/notifications`, (req, res, next) => {
  res.status(204).send();
});

server.delete(`${apiUrl}/notifications/:id`, (req, res, next) => {
  res.status(204).send();
});

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
