import { Injectable } from '@nestjs/common';
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Optional, Sequelize} from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';

interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
  willCome: boolean;
  confirmedOn: Date
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'willCome' | 'confirmedOn'> {}

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column
  username: string;

  @Column
  password: string;

  @Column({ defaultValue: null })
  willCome: boolean;

  @Column
  confirmedOn: string; // new Date().toISOString()
}
