const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.storeToken = functions.https.onRequest(
  async (
    req: { body: { token: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: string): void; new (): any };
      };
    }
  ) => {
    const { token } = req.body; // Assuming Expo sends token in the request body
    if (!token) {
      res.status(400).send("No token provided");
      return;
    }

    // Store the token in Firebase Realtime Database or Firestore
    // Example storing in Firestore
    try {
      await admin.firestore().collection("tokens").add({ token: token });
      res.status(200).send("Token stored successfully");
    } catch (error) {
      res.status(500).send("Error storing token");
    }
  }
);
