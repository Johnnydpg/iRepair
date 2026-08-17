import {app} from "./config/expressConfig.js"

app.listen(3030, ()=>{
    console.log(`Servidor rodando na porta 3030`);
});