import redis from "ioredis";
import config from "./convict";

export const redisClient = new redis(config.get("redis.url"), {maxRetriesPerRequest: null});
