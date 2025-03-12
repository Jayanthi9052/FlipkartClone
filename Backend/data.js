import dotenv from 'dotenv'

dotenv.config()
const BASE_URL=process.env.BASE_URL;
export const products=[
    {
        category:"Kitchen",
        sub_category:"utensils",
        title:"Dosa Pan",
        description:"latest model",
        price:400,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Kitchen/pan.jpg`


    },
    {
        category:"Kitchen",
        sub_category:"utensils",
        title:"chopping Board",
        description:"legth-30cm and width-20cm",
        price:150,
        rating:{
            rate:4.5,
            count:98
        },
        image:`${BASE_URL}/images/Kitchen/choppingboard.jpg`

    },
    {
        category:"Kitchen",
        sub_category:"utensils",
        title:"Dinner set",
        description:"4 bowls and non stick coating",
        price:1500,
        rating:{
            rate:4.5,
            count:98
        },
        image:`${BASE_URL}/images/Kitchen/dinner_set.jepg`

    },
    {
        category:"Kitchen",
        sub_category:"utensils",
        title:"Grater",
        description:"sharp blades and thin slicing",
        price:250,
        rating:{
            rate:4.5,
            count:98
        },
        image:`${BASE_URL}/images/Kitchen/grater.png`

    },
    {
        category:"Kitchen",
        sub_category:"utensils",
        title:"spoons",
        description:"6 piece table spoon set",
        price:100,
        rating:{
            rate:4.5,
            count:98
        },
        image:`${BASE_URL}/images/Kitchen/spoons.jpeg`

    },
    {
        category:"Kitchen",
        sub_category:"utensils",
        title:"whisker",
        description:"stainless steel material",
        price:199,
        rating:{
            rate:4.5,
            count:98
        },
        image:`${BASE_URL}/images/Kitchen/whisker.jpg`

    },
    {
        category:"Clothes",
        sub_category:"women",
        title:"Party ware Dress",
        description:"Trendy model",
        price:1500,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Clothes/Dress.png`

    },{
        category:"Clothes",
        sub_category:"men",
        title:"Cotton Shirt",
        description:"cotton trendy checks shirt",
        price:500,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Clothes/Shirt.png`

    },{
        category:"Clothes",
        sub_category:"kids",
        title:"Traditional Pattu dress",
        description:"latest model",
        price:900,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Clothes/kids2.jpg`

    },
    {
        category:"Clothes",
        sub_category:"kids",
        title:"Dress",
        description:"latest model kids dresses",
        price:1500,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Clothes/kidsFashion.jpeg`

    },
    {
        category:"Clothes",
        sub_category:"men",
        title:"black pant",
        description:"latest model balck pant ",
        price:590,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Clothes/blackpant.jpeg`

    },
    {
        category:"Clothes",
        sub_category:"women",
        title:"Dress",
        description:"latest model  dresses",
        price:1000,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Clothes/dress2.jpeg`

    },
    {
        category:"Clothes",
        sub_category:"women",
        title:"Lehenga",
        description:"latest model partyware lehenga",
        price:2400,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Clothes/lehenga.jpeg`

    },
     
    {
        category:"Electronic",
        sub_category:"electronic",
        title:"Cable",
        description:"2m long",
        price:300,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Electronic/Cabel.png`

    },
    {
        category:"Electronic",
        sub_category:"electronic",
        title:"Fridge",
        description:"5 star fridge",
        price:30000,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Electronic/fridge.jpg`

    },
    {
        category:"Electronic",
        sub_category:"electronic",
        title:"HaedSet",
        description:"trendy red headset",
        price:3000,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Electronic/headset.jpeg`

    },
    {
        category:"Electronic",
        sub_category:"electronic",
        title:"Remote",
        description:" tv spare remote",
        price:200,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Electronic/remote.jpeg`

    },
    {
        category:"Electronic",
        sub_category:"electronic",
        title:"House cleaning Robot",
        description:" cute house cleaning robot",
        price:1500,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Electronic/robotcleaner.jpeg`

    },
    {
        category:"Food",
        sub_category:"Sweets",
        title:"Chocolate",
        description:"silk",
        price:200,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Food/Chocolate.png`

    },
    {
        category:"Food",
        sub_category:"Sweets",
        title:"Chocolate",
        description:"sweet chocolate",
        price:100,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Food/chocolate1.jpeg`

    },
    {
        category:"Food",
        sub_category:"Sweets",
        title:"KitKat",
        description:"KitKat",
        price:200,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Food/kitkat.jpg`

    },
    {
        category:"Food",
        sub_category:"Snacks",
        title:"Kurkure",
        description:"kurkure",
        price:20,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Food/kurkure.webp`

    },
    {
        category:"Food",
        sub_category:"snacks",
        title:"Kurkure",
        description:"kurkure",
        price:20,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Food/kurkure2.png`

    },
    {
        category:"Food",
        sub_category:"snacks",
        title:"Kurkure",
        description:"kurkure",
        price:20,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Food/kurkure3.jpeg`

    },
    {
        category:"Accessories",
        sub_category:"mens",
        title:"Ring",
        description:"latest model",
        price:3000,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Accessories/ring.png`

    },
    {
        category:"Accessories",
        sub_category:"womens",
        title:"hairband",
        description:"latest model",
        price:50,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Accessories/hairband.jpg`

    },
    {
        category:"Accessories",
        sub_category:"women",
        title:"hairpins",
        description:"latest model",
        price:30,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Accessories/hairpins.jpg`

    },
    {
        category:"Accessories",
        sub_category:"women",
        title:"necklace",
        description:"latest model",
        price:30000,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Accessories/necklace.jpg`

    },
    {
        category:"Accessories",
        sub_category:"women",
        title:"watch",
        description:"latest model",
        price:2000,
        rating:{
            rate:4.5,
            count:100
        },
        image:`${BASE_URL}/images/Accessories/watch.jpg`

    }
]