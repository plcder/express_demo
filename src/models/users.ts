import { Sequelize, DataTypes } from 'sequelize';
import Conn from '../database/conn';



function Users() {
  const conn = Conn();
  const User = conn.define('users', {
    name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'users'
  });
  
  return User
}

export default Users;