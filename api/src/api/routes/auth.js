// const express = require("express");
import express from "express"
import AuthService from '../../services/Auth.js';
import middlewares from '../middlewares/index.js';
import celebrate from 'celebrate';
// const celebrate = require('celebrate');

const route = express.Router();

export default (app) => {
  app.use('/auth', route);

  route.post(
    '/signup',
    celebrate.celebrate({
      body: celebrate.Joi.object({
        name: celebrate.Joi.string().required(),
      }),
    }),
    async (req, res, next) => {
      try {
        const { user, token } = await AuthService.SignUp(req.body);
        return res.status(201).json({ user, token });
      } catch (e) {
        console.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );

  route.post('/logout', middlewares.isAuth, (req, res, next) => {
    console.log('Calling Sign-Out endpoint with body: %o', req.body)
    try {
      return res.status(200).end();
    } catch (e) {
      console.error('🔥 error %o', e);
      return next(e);
    }
  });
};