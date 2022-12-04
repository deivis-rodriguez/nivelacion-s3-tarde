export interface Tripulante {
    idTripulante: string;
    nombre: string;
    cursos: string;
    direccion: Direccion;
    calificaciones: Calificacion[]
}

interface Direccion {
    calle: string;
    numero: string;
    complemento: string
}
interface Calificacion {
    nota: string;
    comentario: string;
    tipoNota: string
}