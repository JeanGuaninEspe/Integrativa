import {NextResponse} from "next/server";
import {conn} from "../../libs/mysql";


export async function POST(request) {
    try {
        const {nombre, edad} = await request.json();
        const result = await conn.query('INSERT INTO pasajeros (nombre,edad) VALUES (?,?)', [nombre, edad]);
        console.log(result);
        return NextResponse.json({message: "Pasajero Creado!"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "No se pudo insertar"});
    }
}
    export async function GET() {
        const result = await conn.query('SELECT * FROM pasajeros');
        return NextResponse.json(result);

    }


