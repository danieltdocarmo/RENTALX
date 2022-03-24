import { createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database') => {
  const connection = await getConnectionOptions(); 

  return createConnection(
    Object.assign(connection, {
      host : process.env.NODE_ENV === 'test' 
      ? 'localhost' 
      : host,
      database : process.env.NODE_ENV === 'test' 
      ? 'rentx_test' 
      : connection.database
    })
  );
}
