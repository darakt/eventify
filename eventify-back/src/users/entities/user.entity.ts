import { Optional } from 'sequelize';
import { Table, Model, Column, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

// export default interface UserAttributes { // good
//   id: number;
//   username: string;
//   password: string;
//   willCome: boolean;
//   confirmedOn: Date;
// }
//
// to change
// interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'willCome' | 'confirmedOn'> {}
//
// @Table
// class User extends Model<UserAttributes, UserCreationAttributes> {}


@Table
export default class user extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  username: string;

  @Column
  password: string;

  @Column({ defaultValue: null })
  willCome: boolean;

  @Column
  confirmedOn: string;

  @Column
  createdAt: string;

  @Column
  updatedAt: string;
}