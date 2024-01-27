import winston from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console()],
  });

  logger.log({ level: "error", message: "Hello error" });
  logger.log({ level: "warn", message: "Hello warning" });
  logger.log({ level: "info", message: "Hello logging" });
  logger.log({ level: "http", message: "Hello http" });
  logger.log({ level: "verbose", message: "Hello verbose" });
  logger.log({ level: "debug", message: "Hello debugging" });
  logger.log({ level: "silly", message: "Hello silly" });
});

test("logging with shorcut function", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console()],
  });

  logger.error("Hello error");
  logger.warn("Hello warn");
  logger.info("Hello info");
  logger.http("Hello http");
  logger.verbose("Hello verbose");
  logger.debug("Hello debug");
  logger.silly("Hello silly");
});
