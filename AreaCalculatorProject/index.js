const { app, PORT, hostName } = require('./app');


app.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
})