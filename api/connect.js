import myqsl from "mysql"

export const db = myqsl.createConnection({
    host:"localhost",
    user:"root",
    password:"SRGfotbalistul123",
    database:"social"
})