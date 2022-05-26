export default {
  port: {
    dev: 3002,
    prod: 2034,
  },
  env: 'dev',
  debug: true,
  db: {
    host: 'localhost',
    port: 27017,
    name: 'test',
  },
  session: {
    secret:
      'MPKCNDALQCJCCGKRJMZXDENKMXELQVUNMQALSQKERELCRGKLYSFWEGZFZVETLPCMSWNVVEXUAUNKJBJGRNCNWEGMZZADSDQNWHPGFJWXLBWGFGWXTCAQPQVWJNKBHXRH',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 1, // 1 day
    },
  },
};
