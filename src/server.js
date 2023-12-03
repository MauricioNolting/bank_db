import app from './app.js';
import { authenticate, sync } from './config/database/database.js';
import { envs } from './config/enviroments/enviroments.js';

async function main() {
  try {
    await authenticate();
    await sync();
  } catch (error) {
    console.error(error);
  }
}

main();

app.listen(envs.PORT, () => {
  console.log(`Server is running con port ${envs.PORT}`);
});
