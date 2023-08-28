import { DataTypes } from 'sequelize';
import sequelize from '../index.js';
import { USER_ROLES } from '../../const/userRoles.js';

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: USER_ROLES.BASIC,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
       },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
  }, {});

export default Users;
