export interface PrintTicketData {
    vale: string;
    placa: string;
    piloto: string;
    viaje: string;
    galones: number;
    combustible: CombustibleType;
}

export interface CombustibleType{
    id: number;
    nombre: string;
}