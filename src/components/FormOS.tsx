function FormOS(){
    return(
        <form className="translate-y-20 translate-x-16 bg-white shadow-lg border border-slate-200 rounded-xl w-90 h-110">
            <label htmlFor="titulo">
                <h1 className="text-4xl font-bold translate-y-10 translate-x-24">Cadastro</h1>
            </label>
            <label htmlFor="Cliente">
                <h2 className="translate-x-8 translate-y-15 text-xl">Cliente</h2>
            </label>
            <input
            id="Cliente"
            type="text"
            placeholder="Nome"
            className="border border-gray-300 rounded-lg translate-x-8 translate-y-19 placeholder:text-gray-400 w-70"
            />
            <label htmlFor="Equipamento">
                <h2 className="translate-x-8 translate-y-23 text-xl">Equipamento</h2>
            </label>
            <input
            id="Equipamento"
            type="text"
            placeholder="Modelo do aparelho"
            className="border border-gray-300 rounded-lg translate-x-8 translate-y-27 placeholder:text-gray-400 w-70"
            />
            <label htmlFor="Defeito">
                <h2 className="translate-x-8 translate-y-31 text-xl">Defeito</h2>
            </label>
            <input
            id="Defeito"
            type="text"
            placeholder="Qual é o defeito do aparelho?"
            className="border border-gray-300 rounded-lg translate-x-8 translate-y-35 placeholder:text-gray-400 w-70"
            />
        </form>
    );
}
export default FormOS;