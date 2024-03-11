import Redis from "ioredis";

// Variable defines the redis client to be re-used globally across the app.
const redisClient = new Redis();

export default redisClient;
