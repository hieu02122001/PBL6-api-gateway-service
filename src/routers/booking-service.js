const axios = require('axios').default;
const express = require('express');
const router = new express.Router();

//
// const USER_SERVICE_URL = "http://0.0.0.0:3000";
const USER_SERVICE_URL = "https://pbl6-prod-pbl-dspnq9.mo6.mogenius.io";
const PATH = '/api/booking/*';
// test

router.get(PATH, async (req, res) => {
  try {
    const response = await axios({
      method: 'get',
      url: USER_SERVICE_URL + req.originalUrl,
      data: req.body,
      headers: {
        'authorization': req.headers.authorization
      }
    });
    res.status(response.status).send(response.data);
  } catch (error) {
    if (error.response) {
      res.status(400).send(error.response.data);
    } else {
      req.status(400).send(error);
    }
  }
});

router.post(PATH, async (req, res) => {
  try {
    const response = await axios({
      method: 'post',
      url: USER_SERVICE_URL + req.originalUrl,
      data: req.body,
      headers: {
        'authorization': req.headers.authorization
      }
    });
    res.status(response.status).send(response.data);
  } catch (error) {
    if (error.response) {
      res.status(400).send(error.response.data);
    } else {
      req.status(400).send(error);
    }
  }
});

router.put(PATH, async (req, res) => {
  try {
    const response = await axios({
      method: 'put',
      url: USER_SERVICE_URL + req.originalUrl,
      data: req.body,
      headers: {
        'authorization': req.headers.authorization
      }
    });
    res.status(response.status).send(response.data);
  } catch (error) {
    if (error.response) {
      res.status(400).send(error.response.data);
    } else {
      req.status(400).send(error);
    }
  }
});

router.delete(PATH, async (req, res) => {
  try {
    const response = await axios({
      method: 'delete',
      url: USER_SERVICE_URL + req.originalUrl,
      data: req.body,
      headers: {
        'authorization': req.headers.authorization
      }
    });
    res.status(response.status).send(response.data);
  } catch (error) {
    if (error.response) {
      res.status(400).send(error.response.data);
    } else {
      req.status(400).send(error);
    }
  }
});

//
module.exports = router