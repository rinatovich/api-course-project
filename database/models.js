import {DataTypes, Model} from "sequelize";
import {sequelize} from "./db.js";


class User extends Model {}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active'
    },
}, {
    sequelize,
    modelName: "user"
});
export default User;


export class Collection extends Model {}
Collection.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    theme: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'white'
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Это крутая коллекция"
    }
}, {
    sequelize,
    modelName: "collection"
});

export class Item extends Model {}
Item.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'white'
    }
}, {
    sequelize,
    modelName: "item"
});

Collection.hasMany(Item,{ onDelete: "cascade" });




sequelize.sync({alert:true}).then(result=>{
    console.log("DB synchronized");
})
    .catch(err=> console.log(err));
