import {conn} from "../../libs/mysql";
import {NextResponse} from "next/server";

export async function GET(){
    const result= await conn.query('SELECT * FROM vehiculos');
    return NextResponse.json(result);
}
