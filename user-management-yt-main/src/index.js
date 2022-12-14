//* Función que arranca servidor 

import httpServer from "#Config/http.js"
import '#Config/env.js'
import connectDB from "#Config/db.js";

const boostrap = async () => {
  await connectDB(process.env.MONGODB_URL)
  httpServer.listen(process.env.PORT, () => {
    console.log("Servidor escuchando en el puerto 3000");
  });
}

boostrap();