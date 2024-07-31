import mongoose from "mongoose";

export async function connectToDb() {
  try {
    mongoose.connect(process.env.MONGO_URL!);     // ! indicates that the force presence of mongoDB url

    const connection = mongoose.connection;        // it's a method on mongoDB

    connection.on("connected", () => {            // event listener in mongoose
      console.log("Connected to MongoDB");
    });
    connection.on("error", (err) => {             // event listener in mongoose
      console.error("Error connecting to MongoDB:", err);
      process.exit();                             // for exiting from here
    });
  } catch (error) {
    console.log("Something went wrong to connecting to db", error);
  }
}
