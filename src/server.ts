import express from 'express';

const app = express();

// http://localhost:3333

app.get("/", (request, response) => {
    return response.json({ message: "Hello World - NLW04" });
});

// 1 parametro => rota/endpoint
// 2 parametro => request, response
app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log("Server is running!"));
