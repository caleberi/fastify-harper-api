require('dotenv').config();
const app = require("fastify")({
    logger:true
});


app.get('/', (req, res) => {
    res.send({
        message: "hello world"
    });
});

app.listen(process.env.PORT, (err, addr) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server running on port ${process.env.PORT}`)
})