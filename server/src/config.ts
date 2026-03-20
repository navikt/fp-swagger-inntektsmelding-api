import "dotenv/config";

const envVar = (name: string, required: boolean) => {
  if (!process.env[name] && required) {
    const errorMessage = `Missing required environment variable '${name}'`;
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
  return process.env[name];
};

const server = {
  // should be equivalent to the URL this application is hosted on for correct CORS origin header
  host: envVar("HOST", false) || "localhost",

  // port for your application
  port: envVar("PORT", false) || 3000,
};

const cors = {
  allowedHeaders: envVar("CORS_ALLOWED_HEADERS", false) || "Nav-CallId",
  exposedHeaders: envVar("CORS_EXPOSED_HEADERS", false) || "",
  allowedMethods: envVar("CORS_ALLOWED_METHODS", false) || "",
};

export default {
  server,
  cors,
};
