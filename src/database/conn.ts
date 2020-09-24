import { Sequelize } from 'sequelize';

function Conn() {
  const dbName = process.env.DB_NAME
  const dbUser = process.env.DB_USER
  const dbPass = process.env.DB_PASS

  const conn = new Sequelize(`postgres://${dbUser}:${dbPass}@127.0.0.1:5432/postgres`);
  return conn

}

export default Conn;