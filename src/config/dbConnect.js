import 'dotenv/config';
import mongoose, { connect } from 'mongoose';

async function conecaNaDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
};

export default conecaNaDatabase;
