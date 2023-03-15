import {  DataSourceOptions } from "typeorm";

const config:DataSourceOptions ={
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "password",
  "database": "notes",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}

export default config