class Apperror extends Error{
    constructor(message:string, public statusCode:number){
        super(message);
    }
}
export {Apperror}