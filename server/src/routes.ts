import express from "express";
import swaggerUi from "swagger-ui-express";
import {setupProxies} from "./reverseProxy.js";

const router = express.Router();

export const setupRoutes = () => {

  const options = {
    swaggerOptions: {
      url: '/v1/openapi.json'
    }
  };
  console.log(options);
  // set up swagger services and routes
  router.use("/", swaggerUi.serve);
  router.get("/",  swaggerUi.setup(undefined, options));

  // set up reverse proxy for calling APIs/backends using the on-behalf-of flow
  setupProxies(router);

  return router;
};
