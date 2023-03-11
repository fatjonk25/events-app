const MongoClient = require('mongodb').MongoClient;

// URL e serverit MongoDB
const url = 'mongodb://localhost:27017';

// Emri i bazës së të dhënave
const dbName = 'emri-i-bazes-se-te-dhenave';

// Krijo një instancë të MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Lidhu me serverin MongoDB
client.connect(function(err) {
  if (err) throw err;
  console.log("Lidhja me MongoDB u bë me sukses!");

  // Krijo një lidhje me bazën e të dhënave të caktuar
  const db = client.db(dbName);

  // Kryeni operacionet e nevojshme në bazën e të dhënave
  // Këtu mund të kryeni ndryshime, shtimin, fshirjen dhe leximin e të dhënave.
});
