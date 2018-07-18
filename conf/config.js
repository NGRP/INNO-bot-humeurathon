let config = {};

config.dev = {
  "admin": {
    "users": 
      [{
        "username": "poc",
        "password": "$2a$08$xB7HApXcSi6yo7i6RFAeueVlM32JDbE5q1gMZrIYYL8gmRnKybzh2",
        "permissions": "*"
      }]
  },
  "server": {
    "host": "https://v2.poc.viseo.io/humeurathon/"
  }
};

module.exports = config;
