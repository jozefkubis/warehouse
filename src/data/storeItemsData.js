import { supabaseUrl } from "../services/supabase"

const imageUrl = `${supabaseUrl}//storage/v1/object/public/order-images/`

export const storeItems = [
  {
    code: 12345,
    name: "Dell XPS 13",
    regularPrice: 1200,
    discount: 10,
    description:
      "Dell XPS 13 is a compact and powerful ultrabook for professionals.",
    image: imageUrl + "item-001.jpg",
  },
  {
    code: 54321,
    name: "Apple MacBook Air M2",
    regularPrice: 1400,
    discount: 5,
    description:
      "Apple MacBook Air M2 delivers excellent performance and portability.",
    image: imageUrl + "item-002.jpg",
  },
  {
    code: 67890,
    name: "Asus ROG Zephyrus G14",
    regularPrice: 1500,
    discount: 15,
    description: "Asus ROG Zephyrus G14 - ideal for gaming and creative tasks.",
    image: imageUrl + "item-003.jpg",
  },
  {
    code: 98765,
    name: "HP Spectre x360",
    regularPrice: 1350,
    discount: 8,
    description:
      "HP Spectre x360 is a premium convertible laptop with excellent build quality.",
    image: imageUrl + "item-004.jpg",
  },
  {
    code: 11223,
    name: "Microsoft Surface Laptop 5",
    regularPrice: 1300,
    discount: 12,
    description:
      "Microsoft Surface Laptop 5 combines sleek design with powerful performance.",
    image: imageUrl + "item-005.jpg",
  },
  {
    code: 44556,
    name: "Razer Blade 15",
    regularPrice: 2000,
    discount: 10,
    description:
      "Razer Blade 15 is the ultimate laptop for gamers and content creators.",
    image: imageUrl + "item-006.jpg",
  },
  {
    code: 77889,
    name: "Lenovo Yoga 9i",
    regularPrice: 1450,
    discount: 7,
    description:
      "Lenovo Yoga 9i offers excellent performance in a stylish convertible design.",
    image: imageUrl + "item-007.jpg",
  },
  {
    code: 99000,
    name: "Acer Predator Helios 300",
    regularPrice: 1700,
    discount: 12,
    description:
      "Acer Predator Helios 300 is designed for gamers who demand performance.",
    image: imageUrl + "item-008.jpg",
  },
  {
    code: 55443,
    name: "Gigabyte Aorus 15",
    regularPrice: 1600,
    discount: 20,
    description:
      "Gigabyte Aorus 15 - a high-performance gaming laptop with a sleek design.",
    image: imageUrl + "item-009.jpg",
  },
  {
    code: 66778,
    name: "Samsung Galaxy Book Pro",
    regularPrice: 1100,
    discount: 0,
    description:
      "Samsung Galaxy Book Pro offers great connectivity and performance.",
    image: imageUrl + "item-010.jpg",
  },
]
