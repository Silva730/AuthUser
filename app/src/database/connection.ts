import mysql from "mysql2/promise";

console.log("Initializing database connection...");

export async function createConnection() {
  try {
    const conn = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "pablosilva2011@",
      database: "login"
    });

    console.log("Database connection established successfully.");

    const [rows] = await conn.query("SELECT * FROM users;");
    console.log("Tabelas encontradas:", rows);

    return conn;

  } catch (error) {
    console.error("Error creating database connection:", error);
    throw error;
  }
}

createConnection().catch((err) => {
  console.error("Failed to initialize database connection:", err);
});
