const express = require('express');
const userServiceRouter = require('./routers/user-service');
const bookingServiceRouter = require('./routers/booking-service');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 8080;
//
app.use(express.json());
//
app.use(userServiceRouter);
app.use(bookingServiceRouter);
//
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});