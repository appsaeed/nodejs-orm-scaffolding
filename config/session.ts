import { env } from "../app/base/helpers";


export default {
  /**
   * --------------------------------------------------------------------------
   * Express session configuration 
   * --------------------------------------------------------------------------
   */
  express: {
    secret: env('EXPRESS_SESSION_SECRET', 'secret'),
    resave: true,
    saveUninitialized: true
  },
};
