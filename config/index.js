const config = {
    app : {
        port: 5000,
        baseURL: "http://api.football-data.org/v2/",
        APIToken: process.env.API_SECRET_KEY,
    }
};

module.exports = config;