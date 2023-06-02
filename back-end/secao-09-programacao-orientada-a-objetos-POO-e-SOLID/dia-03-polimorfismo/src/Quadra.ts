import IAgenda from "./interfaces/IAgenda";

// src/Quadra.ts
abstract class Quadra { 
    public abstract reservar<T>(params: Date):IAgenda<T>;
}

export default Quadra;