import coliFlower from "./coliflower.avif"
import tomato from "./tomato.jpg"
import profile_pic from "./profile_image.avif"
import banner from "./banner1.jpg"
import banner2 from "./banner2.jpg"
import Organic_vaggies from "./organic_veggies.jpg"
import fresh_fruits from "./fresh_fruits.jpg"
import cold_drinks from "./cold_drinks.jpg"
import instance_food from "./instance_food.jpg"
import dairy_product from "./dairy_product.jpg"
import backery_and_breads from "./backery_and_breads.jpg"
import grains from "./grains.jpg"
import patato1 from "./patato1.webp"
import patato2 from "./patato2.webp"
import patato3 from "./patato3.webp"
import patato4 from "./patato4.webp"
import patato from "./patato.jpg"
import onion from "./onion.jpg"
import onion1 from "./onion1.webp"
import onion2 from "./onion2.webp"
import onion3 from "./onion3.webp"
import onion4 from "./onion4.webp"
import spinach from "./spinach.jpg"
import spinach1 from "./spinach1.webp"
import spinach2 from "./spinach2.webp"
import spinach3 from "./spinach3.webp"
import spinach4 from "./spinach4.webp"
import tomato1 from "./tomato1.webp"
import tomato2 from "./tomato2.webp"
import tomato3 from "./tomato3.webp"
import tomato4 from "./tomato4.webp"
import carrot from "./carrot.jpg"
import carrot1 from "./carrot1.webp"
import carrot2 from "./carrot2.webp"
import carrot3 from "./carrot3.webp"
import carrot4 from "./carrot4.webp"
import star_icon from "./star_icon.png"
import dull_star_icon from "./dull_star_icon.png"
import Bottom_image_sm from "./Bottom_image_sm.jpg"
import bottom_image from "./bottom_image.jpg"
import delivery_truck from "./delivery_truck.png"
import leaf from "./leaf.gif"
import coin from "./coin.png"
import star from "./star_icon.png"
import trust from "./trust.png"
import amul_milk from "./amul_milk.webp"
import apple from "./apple.jpg"
import apple1 from "./apple1.webp"
import apple2 from "./apple2.webp"
import apple3 from "./apple3.webp"
import aata from "./aata.webp"
import banana1 from "./banana1.webp"
import banana2 from "./banana2.webp"
import banana3 from "./banana3.webp"
import banana from "./banana.webp"
import basmati_rice from "./basmati_rice.webp"
import biskut from "./biskut.webp"
import chips from "./chips.webp"
import fizz from "./fizz.webp"
import grapes from "./grapes.webp"
import grapes1 from "./grapes1.webp"
import grapes2 from "./grapes3.webp"
import grapes3 from "./grapes3.webp"
import namkin from "./namkin.webp"
import noodles from "./noodles.webp"
import noodles1 from "./noodles1.webp"
import orange from "./orange.webp"
import orange1 from "./orange1.webp"
import orange2 from "./orange2.webp"
import orange3 from "./orange3.webp"
import orange4 from "./orange4.webp"
import coco_cola from "./coco_cola.webp"
import kitkat from "./kitkat.webp"
import chiken from "./chiken.webp"
import fish from "./fish.webp"
import eggs from "./eggs.webp"
import bakery from "./bakery.webp"
import cookies from "./cookies.webp"
import remove from "./remove.png"
import arrow from "./arrow.png"
import gps from "./gps.png"
import plus from "./plus.png"
import list from "./list.png"
import shoppingBag from "./shopping-bag.png"
import upload from "./upload.png"
import chocolate from "./chocolate.avif"










export const assets = {
    coliFlower,
    tomato,
    profile_pic,
    banner,
    banner2,
    patato,
    patato1,
    patato2,
    patato3,
    patato4,
    onion,
    onion1,
    onion2,
    onion3,
    onion4,
    spinach,
    spinach1,
    spinach2,
    spinach3,
    spinach4,
    carrot,
    carrot1,
    carrot2,
    carrot3,
    carrot4,
    star_icon,
    dull_star_icon,
    bottom_image,
    Bottom_image_sm,
    delivery_truck,
    coin,
    leaf,
    star_icon,
    orange,
    orange1,
    orange2,
    orange3,
    orange4,
    noodles,
    noodles1,
    namkin,
    grapes,
    grapes1,
    grapes2,
    grapes3,
    fizz,
    coco_cola,
    chips,
    biskut,
    basmati_rice,
    banana,
    banana1,
    banana2,
    banana3,
    apple,
    apple1,
    apple2,
    apple3,
    amul_milk,
    aata,
    kitkat,
    chiken,
    fish,
    eggs,
    bakery,
    cookies,
    remove,
    arrow,
    gps,
    list,
    plus,
    shoppingBag,
    upload
};



export const categiries = [
    {
        text: "Organic Veggies",
        path: "Vegetables",
        image: Organic_vaggies,
        bgColor: "#EFE6DA"
    },
    {
        text: "Fresh Fruits",
        path: "Fruits",
        image: fresh_fruits,
        bgColor: "#EFE6DA"
    },
    {
        text: "Cold Drinks",
        path: "Drinks",
        image: cold_drinks,
        bgColor: "#EFE6DA"
    },
    {
        text: "Instance Food",
        path: "Instance",
        image: instance_food,
        bgColor: "#EFE6DA"
    },
    {
        text: "Dairy Products",
        path: "Dairy",
        image: dairy_product,
        bgColor: "#EFE6DA"
    },
    {
        text: "Bakery & Breads",
        path: "Bakery",
        image: backery_and_breads,
        bgColor: "#EFE6DA"
    },
    {
        text: "Grains & Cereals",
        path: "Grains",
        image: grains,
        bgColor: "#EFE6DA"
    },
    {
        text: "Sea Foods",
        path: "sea",
        image: chiken,
        bgColor: "#EFE6DA"
    },
    {
        text: "Snacks & Chocolates",
        path: "Chocolates",
        image: chocolate,
        bgColor: "#EFE6DA"
    },
]



export const dummyProducts = [
  // Vegetables

  {
    _id: "carrot",
    name: "Carrot 500g",
    category: "Vegetables",
    price: 40,
    offerPrice: 30,
    image: [carrot, carrot2, carrot3, carrot4],
    description: [
      "Fresh and crunchy",
      "Rich in vitamins",
      "Good for eyesight"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "onion",
    name: "Onion 1kg",
    category: "Vegetables",
    price: 50,
    offerPrice: 45,
    image: [onion, onion2, onion3, onion4],
    description: [
      "Strong flavor",
      "Used in daily cooking",
      "Rich in antioxidants"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
     inStock: true,
  },

  {
    _id: "spinach",
    name: "Spinach 500g",
    category: "Vegetables",
    price: 30,
    offerPrice: 25,
    image: [spinach, spinach2, spinach3, spinach4],
    description: [
      "Rich in iron",
      "Healthy leafy vegetable",
      "Good for immunity"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
     inStock: true,
  },

  {
    _id: "tomato",
    name: "Tomato 1kg",
    category: "Vegetables",
    price: 35,
    offerPrice: 28,
    image: [tomato, tomato2, tomato3, tomato4],
    description: [
      "Juicy and fresh",
      "Used in salads and cooking",
      "Rich in vitamins"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
     inStock: true,
  },

  {
    _id: "potato",
    name: "Potato 1kg",
    category: "Vegetables",
    price: 25,
    offerPrice: 20,
    image: [patato, patato2, patato3, patato4],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for fries and curry"
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
     inStock: true,
  },
   {
    _id: "apple",
    name: "Apple 1kg",
    category: "Fruits",
    price: 180,
    offerPrice: 150,
    image: [apple, apple1, apple2, apple3],
    description: [
      "Fresh and juicy apples",
      "Rich in vitamins",
      "Good for health",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "orange",
    name: "Orange 1kg",
    category: "Fruits",
    price: 120,
    offerPrice: 99,
    image: [orange, orange1, orange2, orange3],
    description: [
      "Sweet and fresh oranges",
      "High in Vitamin C",
      "Healthy and tasty",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "banana",
    name: "Banana 1 Dozen",
    category: "Fruits",
    price: 70,
    offerPrice: 55,
    image: [banana, banana1, banana2, banana3],
    description: [
      "Fresh bananas",
      "Energy boosting fruit",
      "Rich in potassium",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "grapes",
    name: "Grapes 500g",
    category: "Fruits",
    price: 90,
    offerPrice: 75,
    image: [grapes, grapes1, grapes2, grapes3],
    description: [
      "Fresh green grapes",
      "Sweet and juicy",
      "Rich in antioxidants",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

 
  {
    _id: "noodles",
    name: "Instant Noodles",
    category: "Instance",
    price: 40,
    offerPrice: 30,
    image: [noodles, noodles],
    description: [
      "Quick to cook",
      "Delicious masala flavor",
      "Perfect evening snack",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "cococola",
    name: "Coco Cola 2L",
    category: "Drinks",
    price: 110,
    offerPrice: 95,
    image: [coco_cola],
    description: [
      "Refreshing soft drink",
      "Perfect chilled beverage",
      "Best for parties",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "milk",
    name: "Amul Milk 1L",
    category: "Dairy",
    price: 68,
    offerPrice: 62,
    image: [amul_milk],
    description: [
      "Fresh cow milk",
      "Rich in calcium",
      "Healthy daily drink",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "basmati rice",
    name: "Basmati Rice 5kg",
    category: "Grains",
    price: 550,
    offerPrice: 499,
    image: [basmati_rice],
    description: [
      "Premium basmati rice",
      "Long grain quality",
      "Perfect for biryani",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "aata",
    name: "Wheat Aata 5kg",
    category: "Grains",
    price: 260,
    offerPrice: 230,
    image: [aata],
    description: [
      "Fresh wheat flour",
      "Soft and healthy rotis",
      "Daily kitchen essential",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  
  {
    _id: "chips",
    name: "Potato Chips",
    category: "Instance",
    price: 30,
    offerPrice: 25,
    image: [chips],
    description: [
      "Crispy potato chips",
      "Tasty and crunchy",
      "Perfect snack item",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "biskut",
    name: "Biscuits Pack",
    category: "Instance",
    price: 50,
    offerPrice: 42,
    image: [biskut],
    description: [
      "Crunchy biscuits",
      "Tea time favorite",
      "Delicious taste",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "namkin",
    name: "Namkeen Mix",
    category: "Instance",
    price: 80,
    offerPrice: 65,
    image: [namkin],
    description: [
      "Spicy namkeen mix",
      "Crunchy and tasty",
      "Perfect tea snack",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  {
    _id: "fizz",
    name: "Fizz Cold Drink",
    category: "Drinks",
    price: 45,
    offerPrice: 38,
    image: [fizz],
    description: [
      "Refreshing soda drink",
      "Cool and fizzy",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "kitkat",
    name: "kit Kat",
    category: "Instance",
    price: 45,
    offerPrice: 38,
    image: [kitkat],
    description: [
      "Refreshing soda drink",
      "Cool and fizzy",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "chiken",
    name: "Chiken Lag",
    category: "sea",
    price: 45,
    offerPrice: 38,
    image: [chiken],
    description: [
      "Refreshing soda drink",
      "Cool and fizzy",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "fish",
    name: "Rohu Fish",
    category: "sea",
    price: 45,
    offerPrice: 38,
    image: [fish],
    description: [
      "Refreshing soda drink",
      "Cool and fizzy",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "eggs",
    name: "Farm Eggs",
    category: "sea",
    price: 45,
    offerPrice: 38,
    image: [eggs],
    description: [
      "Refreshing soda drink",
      "Cool and fizzy",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bakery",
    name: "Gur Atta Biscuits",
    category: "Bakery",
    price: 45,
    offerPrice: 38,
    image: [bakery],
    description: [
      "Refreshing soda drink",
      "Cool and fizzy",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "cookies",
    name: "Chocochip - Cookies",
    category: "Bakery",
    price: 45,
    offerPrice: 38,
    image: [cookies],
    description: [
      "Refreshing soda drink",
      "Cool and fizzy",
      "Best served chilled",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
];


export const feature = [
  {
    icon: delivery_truck,
    title: " Fastest Delivery",
    description: "Groceries delivered in under 30 minutes."
  },
  {
    icon: leaf,
    title: "Freshness Guaranteed",
    description: "Fresh produce straight from the source."
  },
  {
    icon: coin,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices."
  },
  {
    icon: trust,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers."
  },
]


export const dummyAddresses = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    pincode: "390001",
    street: "fefhsehifsef",
    city: "Vadodara",
    state: "Gujarat",
    country: "India",
    houseNo: "A-102",
    area: "Alkapuri",
    landmark: "Near Inorbit Mall",
    addressType: "Home",
  }
]


export const dummyOrders = [
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddresses[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },

  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddresses[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },  
];