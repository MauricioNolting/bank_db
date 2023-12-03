import { Sequelize } from 'sequelize';
import { envs } from '../enviroments/enviroments.js';

export const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export async function authenticate() {
  try {
    sequelize.authenticate();
    console.log('Contecion was autenticated :)');
  } catch (error) {
    console.log(error);
  }
}

export async function sync() {
  try {
    sequelize.sync();
    console.log('Coonection was synced! ;)');
  } catch (error) {
    console.log(error);
  }
}
