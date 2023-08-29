import { NextResponse } from "next/server";
import {conn} from "../../../libs/mysql";


export async function GET(request,{params}){
    try{
        const result= await conn.query('SELECT * FROM vehiculos WHERE vehiculo_id=?',[params.id]);

    if (result.length===0){
        return NextResponse.json({message: "No se encontró el vehículo"},{
            status: 404
        });
    }
    return NextResponse.json(result[0]);
    }catch(error){
        console.log(error);
        return NextResponse.json({message: "No se pudo insertar"});
    }
}
