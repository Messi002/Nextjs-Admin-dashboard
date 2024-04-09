import mongoose from "mongoose";

const connection = {};
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect("mongodb+srv://rostandmessi2:18OCrjEMetys3rS7@cluster0.ochjwnt.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0", {
      serverSelectionTimeoutMS: 3000,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(connection);
  } catch (error) {
    console.error(error); //errorResponse.errmsg
    throw new Error(error);
  }
};

// global.mongoose = {
//   conn: null,
//   promise: null,
// };

// export async function connectToDB() {
//   try {
//     if (global.mongoose && global.mongoose.conn) {
//       console.log("Connected from previous");
//       return global.mongoose.conn;
//     } else {
//       const conString = process.env.MONGO_URL;

//       const promise = mongoose.connect(conString, {
//         autoIndex: true,
//       });

//       global.mongoose = {
//         conn: await promise,
//         promise,
//       };

//       console.log("Newly connected");
//       return await promise;
//     }
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     throw new Error("Database connection failed");
//   }
// }
