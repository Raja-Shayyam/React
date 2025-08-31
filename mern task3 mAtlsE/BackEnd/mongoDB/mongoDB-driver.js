// import { MongoClient } from 'mongodb'
const { MongoClient } = require('mongodb')

async function main() {
  const client = new MongoClient("mongodb://127.0.0.1")
  await client.connect()
  console.log('user connected');


  const db = client.db("mongoDB-ren3")
  console.log('dataBase Created');

  const userColection = db.collection('user')
  console.log('collection created');




  userColection.insertOne({ name: "3o3oo", rollNo : 777 , class :12})
  console.log('insertion completed');

  // userColection.insertMany([
  //   { name: "nonJoo", rollNo: 338, class: 12 },
  //   { name: "dodoo", rollNo: 456, class: 12 },
  //   { name: "dudoo", rollNo: 134, class: 12 },
  //   { name: "zoi", rollNo: 952, class: 12 },
  //   { name: "fahad", rollNo: 869, class: 12 }
  // ])
  // console.log('many insertions completed');

  //    # method 1
  // const userCursor = userColection.find()
  // console.log(userCursor);
  // for await(const user of userCursor)

  //    # method 2
  // if no await then have that result >>  (user connected) (dataBase Created) (collection created) (insertion completed) >>  Promise { <pending> }
  const userCursor = await userColection.find().toArray();
  console.log(">> ", userCursor);

  const myuser = await userColection.findOne({ name: 'kokoo' })
  // console.log(myuser);
  // console.log('-----------\n', myuser._id.toHexString(), myuser.rollNo);

  // await userColection.updateOne({ name: 'joJoo' }, { $set: { class: 10 } })

  // await userColection.updateOne({ rollNo: 338 }, { $set: { name: 'nonoo' } })

  await userColection.deleteOne({ name: 'nonoo' })

  const deleteOnes = await userColection.deleteMany({ class: 12 })
  console.log(`there  ${deleteOnes.deletedCount } documents deleted now form user Data Base`);



}

main()

// const client = new MongoClient("mongodb://127.0.0.1")
// await client.connect()

// const db = client.db("mongoDB-ren3")

// const userClooection = db.collection('úser')

// userClooection.insertOne({ name: "kokoo", rollNo : 232 })


// main()

// mongoDB-driver.js
// import { MongoClient } from "mongodb";

// const uri = "mongodb://127.0.0.1:27017"; // 👈 use localhost if MongoDB is installed locally
// const client = new MongoClient(uri);

// async function main() {
//   try {
//     await client.connect();
//     console.log("✅ Connected to MongoDB");

//     const db = client.db("testDB"); // pick a DB name (auto-created if missing)
//     const collection = db.collection("users");

//     // Insert one document
//     const result = await collection.insertOne({ name: "Ali", age: 25 });
//     console.log("Inserted document ID:", result.insertedId);

//     // Find it back
//     const user = await collection.findOne({ name: "Ali" });
//     console.log("Found user:", user);

//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//   } finally {
//     await client.close();
//   }
// }

// main();
