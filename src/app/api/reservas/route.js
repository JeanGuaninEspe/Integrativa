import {NextResponse} from "next/server";
import {conn} from "../../libs/mysql";

export async function GET() {
  const result= await conn.query('SELECT NOW()');
    console.log(result);
  return NextResponse.json({message: "Hello World!"});
}

export async function POST(request){
  try{
    const {pasajero_nombre,vehiculo_id,origen_id,destino_id,fecha,precio_estimado}= await request.json();
    const result= await conn.query('INSERT INTO reservas (pasajero_nombre,vehiculo_id,origen_id,destino_id,fecha,precio_estimado) VALUES (?,?,?,?,?,?)',[pasajero_nombre,vehiculo_id,origen_id,destino_id,fecha,precio_estimado]);
    console.log(result);
    return NextResponse.json({message: "Reserva Creada!"});
    }catch(error){
    console.log(error);
    return NextResponse.json({message: "No se pudo insertar"});
  }

}
