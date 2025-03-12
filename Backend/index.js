import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path';
// import Clothing from './models/CategoriesModel/clothing.model.js'
// import Accessories from './models/CategoriesModel/accessories.model.js'
// import Food from './models/CategoriesModel/food.model.js';
// import Electronic from './models/CategoriesModel/electronic.model.js';
// // import addClothRouter from './Routes/CategoryRoutes/ClothingRoutes.js';
// import itemRouter from './Routes/ItemRoutes.js';
// // import getItemRouter from './Routes/getItemRoutes.js';
// import { getClothing } from './Controller/Categories/ClotingController.js';
// import { getAccessories } from './Controller/Categories/AccessoriesController.js';
import productRouter from './Routes/productsRoutes.js';
import userRouter from './Routes/userRoutes.js';
import authRouter from './Routes/authUserRoutes.js';
import categoryRouter from './Routes/CategoryRouter.js';
import addCartRouter from './Routes/addCartRoutes.js';
import fetchCartRoute from './Routes/fetchCartRoutes.js';
import deleteRouter from './Routes/deleteAllRoutes.js';
import deleteItemRouter from './Routes/deleteItemRoutes.js';
import deleteProductRouter from './Routes/deleteProductsRoutes.js';
import searchProductRouter from './Routes/searchProductRouter.js';

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())

app.use(productRouter)
app.use(userRouter);
app.use(authRouter);
app.use(categoryRouter);
app.use(addCartRouter)
app.use(fetchCartRoute)
app.use(deleteRouter)
app.use(deleteItemRouter)
app.use("/api", deleteProductRouter);
app.use("/api", searchProductRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});


// app.use(addClothRouter)
// app.use(itemRouter)
// app.use(getItemRouter)
// app.use(getAccessories)
// app.use(getClothing)

// const __dirname = path.dirname(new URL(import.meta.url).pathname);
// console.log(path.join(__dirname, "public"));

app.use(express.static("public"));

const PORT=process.env.PORT || 4000
const URi=process.env.MONGO_URL

mongoose
  .connect(URi)
  .then(() => {
    console.log("Connected to MongoDB");
    

    //===add Electronic to the DB=======


    // const addElectronicItem = new Electronic({
    //     title: "Cabel",
    //     desc: "long wire",
    //     image:"images/Electronic/Cabel.png",
    //     price: "200",
    //   });
  
    //   addElectronicItem.save()
    //     .then(() => {
    //       console.log("Item added successfully");
    //       mongoose.connection.close();  // Close connection after saving
    //     })
    //     .catch((err) => {
    //       console.log("Error adding item:", err);
    //       mongoose.connection.close();  // Close connection on error
    //     });


//========add Food tot the DB=========


    // const addFoodItem = new Food({
    //       title: "Chocolate",
    //       desc: "Silk",
    //       image:"images/Food/Chocolate.png",
    //       price: "120",
    //     });
    
    //     addFoodItem.save()
    //       .then(() => {
    //         console.log("Item added successfully");
    //         mongoose.connection.close();  // Close connection after saving
    //       })
    //       .catch((err) => {
    //         console.log("Error adding item:", err);
    //         mongoose.connection.close();  // Close connection on error
    //       });
    

    //=========Add Accessory to the DB

    // const addAccessoriesItem = new Accessories({
    //   title: "Ring",
    //   desc: "latest model",
    //   image:"images/Accessories/ring.png",
    //   price: "50",
    // });

    // addAccessoriesItem.save()
    //   .then(() => {
    //     console.log("Item added successfully");
    //     mongoose.connection.close();  // Close connection after saving
    //   })
    //   .catch((err) => {
    //     console.log("Error adding item:", err);
    //     mongoose.connection.close();  // Close connection on error
    //   });

    // ===========Add a clothing item directly to the database==========
    // const addClothItem = new Clothing({
    //   title: "Dress",
    //   desc: "latest model",
    //   image:"images/Clothes/Dress.png",
    //   price: "1500",
    //   gender: "Women"
    // });



    // addClothItem.save()
    //   .then(() => {
    //     console.log("Item added successfully");
    //     mongoose.connection.close();  // Close connection after saving
    //   })
    //   .catch((err) => {
    //     console.log("Error adding item:", err);
    //     mongoose.connection.close();  // Close connection on error
    //   });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
    

app.listen(PORT,()=>{console.log(`connected to server:${PORT}`)})
