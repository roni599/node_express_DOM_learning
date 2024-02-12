const { app, PORT, hostName } = require('./app');

app.get('/', (req, res) => {
    res.send('<h1>I am a get request at home page route</h1>')
});

app.post('/', (req, res) => {
    res.send('<h1>I am a post request at home page route</h1>');
});

app.put('/', (req, res) => {
    res.send('<h1>I am a put request at home page route</h1>');
});

app.delete('/', (req, res) => {
    res.send('<h1>I am a delete request at home page route</h1>');
});

app.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
})