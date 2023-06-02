import Quadra from "./Quadra";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";

export default class QuadraFutebol extends Quadra {
    public futebolData: IFutebol = normas.futebol;
    public reservar<Ifutebol>() {
        return {
            protocolo: Math.random().toString(36).substr(2, 10),
            data: new Date(),
            regras: { chuteira: 'cravo'}
        }
    }