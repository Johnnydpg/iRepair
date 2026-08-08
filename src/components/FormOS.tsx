function FormOS(){
    return(
        <form>
            <label htmlFor="Cliente">
                <h2>Cliente</h2>
            </label>
            <input
            id="Cliente"
            type="text"
            placeholder="Nome"
            />
            <label htmlFor="Equipamento">
                <h2>Equipamento</h2>
            </label>
            <input
            id="Equipamento"
            type="text"
            placeholder="Modelo do aparelho"
            />
            <label>
                <h2>Defeito</h2>
            </label>
            <input
            id="Defeito"
            type="text"
            placeholder="Qual é o defeito do aparelho?"
            />
        </form>
    );
}
export default FormOS;