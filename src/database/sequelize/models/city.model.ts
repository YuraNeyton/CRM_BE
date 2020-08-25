import {DataTypes, Model, ModelAttributes} from 'sequelize';

import {
  Application,
  DBModelFieldInit,
  Group,
  UserCity
} from '../models';
import {DatabaseModel} from '../constants';
import {sequelize} from '../../../configs';

export interface ICityModel {
  id: number;
  name: string;
  createdAt?: Date;
  updateAt?: Date;
}

export interface ICity {
  id: number;
  name: string;
  createdAt?: Date;
  updateAt?: Date;
}

const modelAttributes: DBModelFieldInit<ICityModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

export class City extends Model {
}

City.init(modelAttributes as ModelAttributes, {
  sequelize,
  modelName: DatabaseModel.CITY_MODEL_NAME,
  tableName: DatabaseModel.CITY_MODEL_NAME
});

City.hasMany(UserCity, {foreignKey: 'city_id'});
City.hasMany(Application, {foreignKey: 'city_id'});
City.hasMany(Group, {foreignKey: 'city_id'});
