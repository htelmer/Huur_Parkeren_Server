const { Router } = require("express");
const router = new Router();
const Area = require("../models").rentalArea;
const rentedArea = require("../models").rentedArea;
const areaOwner = require("../models").areaOwner;

const authMiddleware = require("../auth/middleware");
const { toJWT } = require("../auth/jwt");
const User = require("../models").user;
const { SALT_ROUNDS } = require("../config/constants");
