import {Router} from "express";
import proxy from "express-http-proxy";

export const setupProxies = (router: Router) => {
    router.use(
      `/v1/*`,
      (request, response, next) => {
        if (request.timedout) {
          console.log(`Request for ${request.originalUrl} timed out!`);
        } else {
          next();
        }
      },
      proxy("http://foreldrepenger-inntektsmelding-api"),
    );
};
