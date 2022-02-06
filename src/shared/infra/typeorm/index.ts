import { createConnection, getConnectionOptions } from 'typeorm';

export default async (host = 'database') => {
  const connection = await getConnectionOptions(); 

  return createConnection(
    Object.assign(connection, {
    host
  })
  )

}
