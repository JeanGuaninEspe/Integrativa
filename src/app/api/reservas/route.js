import {NextResponse} from "next/server";
import {conn} from "../../libs/mysql";

export async function GET() {
  const result= await conn.query('SELECT NOW()');
    console.log(result);
  return NextResponse.json({message: "Hello World!"});
}

export async function POST(request){
  try{
  const {conductor_id,nombre,edad}= await request.json();
    const result= await conn.query('INSERT INTO conductores (conductor_id,nombre,edad) VALUES (?,?,?)',[conductor_id,nombre,edad]);
    console.log(result);
    return NextResponse.json({message: "Reserva Creada!"});}
    catch(error){
        console.log(error);
        return NextResponse.json({message: "No se pudo insertar"});
    }
}

