const app = require('./src/app');

const stringsRouter = require('./src/Routes/Strings');

app.use('./lib/strings', stringsRouter);

const APP_PORT = 3000;

app.listen(APP_PORT, () => {
  console.log(`Now serving your Express app at http://localhost:${APP_PORT}`); // eslint-disable-line
});
