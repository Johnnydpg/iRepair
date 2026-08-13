import {app} from "./config/expressConfig"

app.listen(3333, ()=>{
    console.log(`Servidor rodando na porta 3333`);
});