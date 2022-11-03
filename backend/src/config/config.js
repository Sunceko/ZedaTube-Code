var admin = require("firebase-admin");

var serviceAccount = require("beckend/src/config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});