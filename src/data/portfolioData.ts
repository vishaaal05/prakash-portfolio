import type { PortfolioData, ImageData, NavigationItem } from "../types/index";

const fashionImages: ImageData[] = [
  {
    id: "fashion-1",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_1600,q_auto,f_auto/v1754632661/portfolio/Fashion/_MG_0423_ff.jpg",
    alt: "Fashion Photography 1",
    category: "Fashion",
  },
  {
    id: "fashion-2",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627474/portfolio/Fashion/01_copy.jpg",
    alt: "Fashion Photography 2",
    category: "Fashion",
  },
  {
    id: "fashion-3",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627509/portfolio/Fashion/0F0A0174_fianl.jpg",
    alt: "Fashion Photography 3",
    category: "Fashion",
  },
  {
    id: "fashion-4",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627516/portfolio/Fashion/0F0A0218_final.jpg",
    alt: "Fashion Photography 4",
    category: "Fashion",
  },
  {
    id: "fashion-5",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627524/portfolio/Fashion/0F0A0220_fianl.jpg",
    alt: "Fashion Photography 5",
    category: "Fashion",
  },
  {
    id: "fashion-6",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627535/portfolio/Fashion/0F0A0297_fianl.jpg",
    alt: "Fashion Photography 6",
    category: "Fashion",
  },
  {
    id: "fashion-7",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627540/portfolio/Fashion/0F0A0347_fianl.jpg",
    alt: "Fashion Photography 7",
    category: "Fashion",
  },
  {
    id: "fashion-8",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627545/portfolio/Fashion/0F0A0392_fianl.jpg",
    alt: "Fashion Photography 8",
    category: "Fashion",
  },
  {
    id: "fashion-9",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627549/portfolio/Fashion/0F0A0454_fianl.jpg",
    alt: "Fashion Photography 9",
    category: "Fashion",
  },
  {
    id: "fashion-10",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627556/portfolio/Fashion/0F0A0464_fianl.jpg",
    alt: "Fashion Photography 10",
    category: "Fashion",
  },
  {
    id: "fashion-11",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627563/portfolio/Fashion/0F0A0545_fianl.jpg",
    alt: "Fashion Photography 11",
    category: "Fashion",
  },
  {
    id: "fashion-12",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627654/portfolio/Fashion/0U9A9354_final_crop.jpg",
    alt: "Fashion Photography 12",
    category: "Fashion",
  },
  {
    id: "fashion-13",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627684/portfolio/Fashion/3.png",
    alt: "Fashion Photography 13",
    category: "Fashion",
  },
  {
    id: "fashion-14",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627682/portfolio/Fashion/3_2.png",
    alt: "Fashion Photography 14",
    category: "Fashion",
  },
  {
    id: "fashion-15",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627728/portfolio/Fashion/3J3A7611_final.jpg",
    alt: "Fashion Photography 15",
    category: "Fashion",
  },
  {
    id: "fashion-16",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627786/portfolio/Fashion/3J3A7722_final.jpg",
    alt: "Fashion Photography 16",
    category: "Fashion",
  },
  {
    id: "fashion-17",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627791/portfolio/Fashion/3J3A7795_final.jpg",
    alt: "Fashion Photography 17",
    category: "Fashion",
  },
  {
    id: "fashion-18",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754627797/portfolio/Fashion/3J3A7812_final.jpg",
    alt: "Fashion Photography 18",
    category: "Fashion",
  },
  {
    id: "fashion-19",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754628112/portfolio/Fashion/7.png",
    alt: "Fashion Photography 19",
    category: "Fashion",
  },
  {
    id: "fashion-20",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_1600,q_auto,f_auto/v1754628118/portfolio/Fashion/A_copy.jpg",
    alt: "Fashion Photography 20",
    category: "Fashion",
  },
  {
    id: "fashion-21",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630958/portfolio/Fashion/DSC_1228.jpg_final.jpg",
    alt: "Fashion Photography 21",
    category: "Fashion",
  },
  {
    id: "fashion-22",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630965/portfolio/Fashion/DSC_1268.jpg_final.jpg",
    alt: "Fashion Photography 22",
    category: "Fashion",
  },
  {
    id: "fashion-23",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630972/portfolio/Fashion/DSC_1326.jpg_final.jpg",
    alt: "Fashion Photography 23",
    category: "Fashion",
  },
  {
    id: "fashion-24",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630977/portfolio/Fashion/DSC_1342.jpg_final.jpg",
    alt: "Fashion Photography 24",
    category: "Fashion",
  },
  {
    id: "fashion-25",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630980/portfolio/Fashion/DSC_1434.jpg_fianl.jpg",
    alt: "Fashion Photography 25",
    category: "Fashion",
  },
  {
    id: "fashion-26",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630983/portfolio/Fashion/DSC_1460.jpg_final.jpg",
    alt: "Fashion Photography 26",
    category: "Fashion",
  },
  {
    id: "fashion-27",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630986/portfolio/Fashion/DSC_1512.jpg_final.jpg",
    alt: "Fashion Photography 27",
    category: "Fashion",
  },
  {
    id: "fashion-28",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630992/portfolio/Fashion/DSC_1522.jpg_final.jpg",
    alt: "Fashion Photography 28",
    category: "Fashion",
  },
  {
    id: "fashion-29",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630998/portfolio/Fashion/DSC_1549.jpg_final.jpg",
    alt: "Fashion Photography 29",
    category: "Fashion",
  },
  {
    id: "fashion-30",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631003/portfolio/Fashion/DSC_1581.jpg_final.jpg",
    alt: "Fashion Photography 30",
    category: "Fashion",
  },
  {
    id: "fashion-31",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631009/portfolio/Fashion/DSC_1612.jpg_final.jpg",
    alt: "Fashion Photography 31",
    category: "Fashion",
  },
  {
    id: "fashion-32",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631014/portfolio/Fashion/DSC_1616.jpg_final.jpg",
    alt: "Fashion Photography 32",
    category: "Fashion",
  },
  {
    id: "fashion-33",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631022/portfolio/Fashion/DSC_1640.jpg_final.jpg",
    alt: "Fashion Photography 33",
    category: "Fashion",
  },
  {
    id: "fashion-34",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631025/portfolio/Fashion/DSC_1676.jpg_final.jpg",
    alt: "Fashion Photography 34",
    category: "Fashion",
  },
  {
    id: "fashion-35",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631029/portfolio/Fashion/DSC_1784.jpg_final.jpg",
    alt: "Fashion Photography 35",
    category: "Fashion",
  },
  {
    id: "fashion-36",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631034/portfolio/Fashion/DSC_1947.jpg_final.jpg",
    alt: "Fashion Photography 36",
    category: "Fashion",
  },
  {
    id: "fashion-37",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631037/portfolio/Fashion/DSC_1969.jpg_final.jpg",
    alt: "Fashion Photography 37",
    category: "Fashion",
  },
  {
    id: "fashion-38",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631041/portfolio/Fashion/DSC_2100.jpg_final.jpg",
    alt: "Fashion Photography 38",
    category: "Fashion",
  },
  {
    id: "fashion-39",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631047/portfolio/Fashion/DSC_2263.jpg_final.jpg",
    alt: "Fashion Photography 39",
    category: "Fashion",
  },
  {
    id: "fashion-40",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754628149/portfolio/Fashion/DSC00056.jpg_final.jpg",
    alt: "Fashion Photography 40",
    category: "Fashion",
  },
  {
    id: "fashion-41",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754628157/portfolio/Fashion/DSC00059._final.jpg",
    alt: "Fashion Photography 41",
    category: "Fashion",
  },
  {
    id: "fashion-42",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754628161/portfolio/Fashion/DSC00379.jpg_fianl.jpg",
    alt: "Fashion Photography 42",
    category: "Fashion",
  },
  {
    id: "fashion-43",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754628163/portfolio/Fashion/DSC00384.jpg_final.jpg",
    alt: "Fashion Photography 43",
    category: "Fashion",
  },
  {
    id: "fashion-44",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754628170/portfolio/Fashion/DSC00398.jpg_final.jpg",
    alt: "Fashion Photography 44",
    category: "Fashion",
  },
  {
    id: "fashion-45",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754628180/portfolio/Fashion/DSC00431.jpg_final.jpg",
    alt: "Fashion Photography 45",
    category: "Fashion",
  },
  {
    id: "fashion-46",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754628183/portfolio/Fashion/DSC00437.jpg_final.jpg",
    alt: "Fashion Photography 46",
    category: "Fashion",
  },
  {
    id: "fashion-47",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754628195/portfolio/Fashion/DSC00480.jpg_final.jpg",
    alt: "Fashion Photography 47",
    category: "Fashion",
  },
  {
    id: "fashion-48",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629422/portfolio/Fashion/DSC00516._final.jpg",
    alt: "Fashion Photography 48",
    category: "Fashion",
  },
  {
    id: "fashion-49",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629760/portfolio/Fashion/DSC00609.jpg_final.jpg",
    alt: "Fashion Photography 49",
    category: "Fashion",
  },
  {
    id: "fashion-50",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629766/portfolio/Fashion/DSC00627.jpg_final.jpg",
    alt: "Fashion Photography 50",
    category: "Fashion",
  },
  {
    id: "fashion-51",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629780/portfolio/Fashion/DSC00690.jpg_fianl.jpg",
    alt: "Fashion Photography 51",
    category: "Fashion",
  },
  {
    id: "fashion-52",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629818/portfolio/Fashion/DSC00851.jpg_final.jpg",
    alt: "Fashion Photography 52",
    category: "Fashion",
  },
  {
    id: "fashion-53",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629832/portfolio/Fashion/DSC00861.jpg_final.jpg",
    alt: "Fashion Photography 53",
    category: "Fashion",
  },
  {
    id: "fashion-54",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629844/portfolio/Fashion/DSC00866.jpg_final.jpg",
    alt: "Fashion Photography 54",
    category: "Fashion",
  },
  {
    id: "fashion-55",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629851/portfolio/Fashion/DSC00870.jpg_final.jpg",
    alt: "Fashion Photography 55",
    category: "Fashion",
  },
  {
    id: "fashion-56",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629858/portfolio/Fashion/DSC00902.jpg_final.jpg",
    alt: "Fashion Photography 56",
    category: "Fashion",
  },
  {
    id: "fashion-57",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629866/portfolio/Fashion/DSC00904._final._w_copy._w.jpg",
    alt: "Fashion Photography 57",
    category: "Fashion",
  },
  {
    id: "fashion-58",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629933/portfolio/Fashion/DSC01038.jpg_final.jpg",
    alt: "Fashion Photography 58",
    category: "Fashion",
  },
  {
    id: "fashion-59",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629944/portfolio/Fashion/DSC01045._final_copy._w.jpg",
    alt: "Fashion Photography 59",
    category: "Fashion",
  },
  {
    id: "fashion-60",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754629958/portfolio/Fashion/DSC01056.jpg_final.jpg",
    alt: "Fashion Photography 60",
    category: "Fashion",
  },
  {
    id: "fashion-61",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630061/portfolio/Fashion/DSC01420.jpg_final.jpg",
    alt: "Fashion Photography 61",
    category: "Fashion",
  },
  {
    id: "fashion-62",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630077/portfolio/Fashion/DSC01452._final_copy._w.jpg",
    alt: "Fashion Photography 62",
    category: "Fashion",
  },
  {
    id: "fashion-63",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630085/portfolio/Fashion/DSC01457.jpg_final.jpg",
    alt: "Fashion Photography 63",
    category: "Fashion",
  },
  {
    id: "fashion-64",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630091/portfolio/Fashion/DSC01509.jpg_final.jpg",
    alt: "Fashion Photography 64",
    category: "Fashion",
  },
  {
    id: "fashion-65",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630153/portfolio/Fashion/DSC01806.jpg_final.jpg",
    alt: "Fashion Photography 65",
    category: "Fashion",
  },
  {
    id: "fashion-66",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630161/portfolio/Fashion/DSC01815.jpg_final.jpg",
    alt: "Fashion Photography 66",
    category: "Fashion",
  },
  {
    id: "fashion-67",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630268/portfolio/Fashion/DSC04566.jpg_final.jpg",
    alt: "Fashion Photography 67",
    category: "Fashion",
  },
  {
    id: "fashion-68",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630284/portfolio/Fashion/DSC04587.jpg_final.jpg",
    alt: "Fashion Photography 68",
    category: "Fashion",
  },
  {
    id: "fashion-69",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630459/portfolio/Fashion/DSC04890.jpg",
    alt: "Fashion Photography 69",
    category: "Fashion",
  },
  {
    id: "fashion-70",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630446/portfolio/Fashion/DSC04890_copy.jpg",
    alt: "Fashion Photography 70",
    category: "Fashion",
  },
  {
    id: "fashion-71",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630476/portfolio/Fashion/DSC05000.jpg_final.jpg",
    alt: "Fashion Photography 71",
    category: "Fashion",
  },
  {
    id: "fashion-72",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630509/portfolio/Fashion/DSC05521._final.jpg",
    alt: "Fashion Photography 72",
    category: "Fashion",
  },
  {
    id: "fashion-73",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630541/portfolio/Fashion/DSC05712._final.jpg",
    alt: "Fashion Photography 73",
    category: "Fashion",
  },
  {
    id: "fashion-74",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630573/portfolio/Fashion/DSC05891.jpg_final.jpg",
    alt: "Fashion Photography 74",
    category: "Fashion",
  },
  {
    id: "fashion-75",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630577/portfolio/Fashion/DSC05892.jpg_fianl.jpg",
    alt: "Fashion Photography 75",
    category: "Fashion",
  },
  {
    id: "fashion-76",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630589/portfolio/Fashion/DSC05921.jpg_final.jpg",
    alt: "Fashion Photography 76",
    category: "Fashion",
  },
  {
    id: "fashion-77",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630613/portfolio/Fashion/DSC06033.jpg_fianl.jpg",
    alt: "Fashion Photography 77",
    category: "Fashion",
  },
  {
    id: "fashion-78",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630620/portfolio/Fashion/DSC06047.jpg_final.jpg",
    alt: "Fashion Photography 78",
    category: "Fashion",
  },
  {
    id: "fashion-79",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630628/portfolio/Fashion/DSC06051.jpg_final.jpg",
    alt: "Fashion Photography 79",
    category: "Fashion",
  },
  {
    id: "fashion-80",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630640/portfolio/Fashion/DSC06090.jpg_final.jpg",
    alt: "Fashion Photography 80",
    category: "Fashion",
  },
  {
    id: "fashion-81",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630651/portfolio/Fashion/DSC06131.jpg_final.jpg",
    alt: "Fashion Photography 81",
    category: "Fashion",
  },
  {
    id: "fashion-82",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630682/portfolio/Fashion/DSC06327.jpg_final.jpg",
    alt: "Fashion Photography 82",
    category: "Fashion",
  },
  {
    id: "fashion-83",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630687/portfolio/Fashion/DSC06342.jpg_final.jpg",
    alt: "Fashion Photography 83",
    category: "Fashion",
  },
  {
    id: "fashion-84",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630691/portfolio/Fashion/DSC06354.jpg_fianl.jpg",
    alt: "Fashion Photography 84",
    category: "Fashion",
  },
  {
    id: "fashion-85",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630698/portfolio/Fashion/DSC06355.jpg_final.jpg",
    alt: "Fashion Photography 85",
    category: "Fashion",
  },
  {
    id: "fashion-86",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630701/portfolio/Fashion/DSC06416.jpg_fianl.jpg",
    alt: "Fashion Photography 86",
    category: "Fashion",
  },
  {
    id: "fashion-87",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630715/portfolio/Fashion/DSC07557.jpg_final.jpg",
    alt: "Fashion Photography 87",
    category: "Fashion",
  },
  {
    id: "fashion-88",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630720/portfolio/Fashion/DSC07563.jpg_final.jpg",
    alt: "Fashion Photography 88",
    category: "Fashion",
  },
  {
    id: "fashion-89",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630726/portfolio/Fashion/DSC07565.jpg_final.jpg",
    alt: "Fashion Photography 89",
    category: "Fashion",
  },
  {
    id: "fashion-90",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630751/portfolio/Fashion/DSC07852_1._final.jpg",
    alt: "Fashion Photography 90",
    category: "Fashion",
  },
  {
    id: "fashion-91",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630858/portfolio/Fashion/DSC09515.jpg_final.jpg",
    alt: "Fashion Photography 91",
    category: "Fashion",
  },
  {
    id: "fashion-92",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630866/portfolio/Fashion/DSC09543.jpg_final.jpg",
    alt: "Fashion Photography 92",
    category: "Fashion",
  },
  {
    id: "fashion-93",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630881/portfolio/Fashion/DSC09566.jpg_final.jpg",
    alt: "Fashion Photography 93",
    category: "Fashion",
  },
  {
    id: "fashion-94",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630894/portfolio/Fashion/DSC09573.jpg_final.jpg",
    alt: "Fashion Photography 94",
    category: "Fashion",
  },
  {
    id: "fashion-95",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630899/portfolio/Fashion/DSC09580.jpg_final.jpg",
    alt: "Fashion Photography 95",
    category: "Fashion",
  },
  {
    id: "fashion-96",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630915/portfolio/Fashion/DSC09635.jpg_final.jpg",
    alt: "Fashion Photography 96",
    category: "Fashion",
  },
  {
    id: "fashion-97",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630938/portfolio/Fashion/DSC09748.jpg_final.jpg",
    alt: "Fashion Photography 97",
    category: "Fashion",
  },
  {
    id: "fashion-98",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754630944/portfolio/Fashion/DSC09778.jpg_final.jpg",
    alt: "Fashion Photography 98",
    category: "Fashion",
  },
  {
    id: "fashion-99",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631054/portfolio/Fashion/IMG_4449_final.jpg",
    alt: "Fashion Photography 99",
    category: "Fashion",
  },
  {
    id: "fashion-100",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631062/portfolio/Fashion/IMG_4482_final.jpg",
    alt: "Fashion Photography 100",
    category: "Fashion",
  },
  {
    id: "fashion-101",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631067/portfolio/Fashion/IMG_4489_final.jpg",
    alt: "Fashion Photography 101",
    category: "Fashion",
  },
  {
    id: "fashion-102",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631072/portfolio/Fashion/IMG_4501_final.jpg",
    alt: "Fashion Photography 102",
    category: "Fashion",
  },
  {
    id: "fashion-103",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631078/portfolio/Fashion/IMG_4507_final.jpg",
    alt: "Fashion Photography 103",
    category: "Fashion",
  },
  {
    id: "fashion-104",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631086/portfolio/Fashion/IMG_4518_final.jpg",
    alt: "Fashion Photography 104",
    category: "Fashion",
  },
  {
    id: "fashion-105",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631093/portfolio/Fashion/IMG_4526_final.jpg",
    alt: "Fashion Photography 105",
    category: "Fashion",
  },
  {
    id: "fashion-106",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631100/portfolio/Fashion/IMG_4539_final.jpg",
    alt: "Fashion Photography 106",
    category: "Fashion",
  },
  {
    id: "fashion-107",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631106/portfolio/Fashion/IMG_4551_final.jpg",
    alt: "Fashion Photography 107",
    category: "Fashion",
  },
  {
    id: "fashion-108",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631111/portfolio/Fashion/IMG_4561_final.jpg",
    alt: "Fashion Photography 108",
    category: "Fashion",
  },
  {
    id: "fashion-109",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631120/portfolio/Fashion/IMG_4569_final.jpg",
    alt: "Fashion Photography 109",
    category: "Fashion",
  },
  {
    id: "fashion-110",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631135/portfolio/Fashion/IMG_4582_final.jpg",
    alt: "Fashion Photography 110",
    category: "Fashion",
  },
  {
    id: "fashion-111",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631147/portfolio/Fashion/IMG_4603_final.jpg",
    alt: "Fashion Photography 111",
    category: "Fashion",
  },
  {
    id: "fashion-112",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631153/portfolio/Fashion/IMG_4616_final.jpg",
    alt: "Fashion Photography 112",
    category: "Fashion",
  },
  {
    id: "fashion-113",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631162/portfolio/Fashion/IMG_4625_final.jpg",
    alt: "Fashion Photography 113",
    category: "Fashion",
  },
  {
    id: "fashion-114",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631168/portfolio/Fashion/IMG_4633_final.jpg",
    alt: "Fashion Photography 114",
    category: "Fashion",
  },
  {
    id: "fashion-115",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631174/portfolio/Fashion/IMG_4641_final.jpg",
    alt: "Fashion Photography 115",
    category: "Fashion",
  },
  {
    id: "fashion-116",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631179/portfolio/Fashion/IMG_4642_final.jpg",
    alt: "Fashion Photography 116",
    category: "Fashion",
  },
  {
    id: "fashion-117",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754631185/portfolio/Fashion/IMG_4659_final.jpg",
    alt: "Fashion Photography 117",
    category: "Fashion",
  },
  {
    id: "fashion-118",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754655472/portfolio/Fashion/IMG_4668_fianl.jpg",
    alt: "Fashion Photography 118",
    category: "Fashion",
  },
  {
    id: "fashion-119",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632529/portfolio/Fashion/IMG_4677_final.jpg",
    alt: "Fashion Photography 119",
    category: "Fashion",
  },
  {
    id: "fashion-120",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632532/portfolio/Fashion/IMG_4684_fianl.jpg",
    alt: "Fashion Photography 120",
    category: "Fashion",
  },
  {
    id: "fashion-121",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632541/portfolio/Fashion/IMG_4688_fianl.jpg",
    alt: "Fashion Photography 121",
    category: "Fashion",
  },
  {
    id: "fashion-122",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632549/portfolio/Fashion/IMG_4700_fianl.jpg",
    alt: "Fashion Photography 122",
    category: "Fashion",
  },
  {
    id: "fashion-123",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632555/portfolio/Fashion/IMG_4711_fianl.jpg",
    alt: "Fashion Photography 123",
    category: "Fashion",
  },
  {
    id: "fashion-124",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632563/portfolio/Fashion/IMG_4719_fianl.jpg",
    alt: "Fashion Photography 124",
    category: "Fashion",
  },
  {
    id: "fashion-125",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632570/portfolio/Fashion/IMG_4728_final.jpg",
    alt: "Fashion Photography 125",
    category: "Fashion",
  },
  {
    id: "fashion-126",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632577/portfolio/Fashion/IMG_4741_fianl.jpg",
    alt: "Fashion Photography 126",
    category: "Fashion",
  },
  {
    id: "fashion-127",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632587/portfolio/Fashion/IMG_6922_final.jpg",
    alt: "Fashion Photography 127",
    category: "Fashion",
  },
  {
    id: "fashion-128",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632593/portfolio/Fashion/IMG_7254_fianl.jpg",
    alt: "Fashion Photography 128",
    category: "Fashion",
  },
  {
    id: "fashion-129",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632599/portfolio/Fashion/IMG_7397_fianl.jpg",
    alt: "Fashion Photography 129",
    category: "Fashion",
  },
  {
    id: "fashion-130",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632603/portfolio/Fashion/IMG_7450_fianl.jpg",
    alt: "Fashion Photography 130",
    category: "Fashion",
  },
  {
    id: "fashion-131",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632608/portfolio/Fashion/IMG_7689_fianl.jpg",
    alt: "Fashion Photography 131",
    category: "Fashion",
  },
    {
    id: "fashion-132",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755197843/portfolio/Fashion/compressed_0F0A0630_final.jpg",
    alt: "Fashion Photography 132",
    category: "Fashion"
  },
  {
    id: "fashion-133",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755197844/portfolio/Fashion/compressed_0F0A0636_final.jpg",
    alt: "Fashion Photography 133",
    category: "Fashion"
  },
  {
    id: "fashion-134",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198024/portfolio/Fashion/compressed_0F0A0717_final.jpg",
    alt: "Fashion Photography 134",
    category: "Fashion"
  },
  {
    id: "fashion-135",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198026/portfolio/Fashion/compressed_0F0A0734_final.jpg",
    alt: "Fashion Photography 135",
    category: "Fashion"
  },
  {
    id: "fashion-136",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198027/portfolio/Fashion/compressed_0F0A0795_final.jpg",
    alt: "Fashion Photography 136",
    category: "Fashion"
  },
  {
    id: "fashion-137",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198029/portfolio/Fashion/compressed_0F0A0959_final.jpg",
    alt: "Fashion Photography 137",
    category: "Fashion"
  },
  {
    id: "fashion-138",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198030/portfolio/Fashion/compressed_0F0A1001_final.jpg",
    alt: "Fashion Photography 138",
    category: "Fashion"
  },
  {
    id: "fashion-139",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198032/portfolio/Fashion/compressed_0F0A1019_final.jpg",
    alt: "Fashion Photography 139",
    category: "Fashion"
  },
  {
    id: "fashion-140",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198033/portfolio/Fashion/compressed_0F0A1029_final.jpg",
    alt: "Fashion Photography 140",
    category: "Fashion"
  },
  {
    id: "fashion-141",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198035/portfolio/Fashion/compressed_0F0A1046_final.jpg",
    alt: "Fashion Photography 141",
    category: "Fashion"
  },
  {
    id: "fashion-142",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198037/portfolio/Fashion/compressed_0F0A1162_final.jpg",
    alt: "Fashion Photography 142",
    category: "Fashion"
  },
  {
    id: "fashion-143",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198038/portfolio/Fashion/compressed_0F0A1196_final.jpg",
    alt: "Fashion Photography 143",
    category: "Fashion"
  },
  {
    id: "fashion-144",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198040/portfolio/Fashion/compressed_0U9A9354_final.jpg",
    alt: "Fashion Photography 144",
    category: "Fashion"
  },
  {
    id: "fashion-145",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198041/portfolio/Fashion/compressed_0U9A9890_fianl.jpg",
    alt: "Fashion Photography 145",
    category: "Fashion"
  },
  {
    id: "fashion-146",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198043/portfolio/Fashion/compressed_0U9A9963_fianl.jpg",
    alt: "Fashion Photography 146",
    category: "Fashion"
  },
  {
    id: "fashion-148",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198058/portfolio/Fashion/compressed_3J3A7418_final.jpg",
    alt: "Fashion Photography 148",
    category: "Fashion"
  },
  {
    id: "fashion-149",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198059/portfolio/Fashion/compressed_3J3A7430_final.jpg",
    alt: "Fashion Photography 149",
    category: "Fashion"
  },
  {
    id: "fashion-150",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198061/portfolio/Fashion/compressed_3J3A7453_final.jpg",
    alt: "Fashion Photography 150",
    category: "Fashion"
  },
  {
    id: "fashion-151",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198064/portfolio/Fashion/compressed_3J3A7480_final.jpg",
    alt: "Fashion Photography 151",
    category: "Fashion"
  },
  {
    id: "fashion-152",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198066/portfolio/Fashion/compressed_3J3A7484_final.jpg",
    alt: "Fashion Photography 152",
    category: "Fashion"
  },
  {
    id: "fashion-153",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198067/portfolio/Fashion/compressed_3J3A7550_final.jpg",
    alt: "Fashion Photography 153",
    category: "Fashion"
  },
  {
    id: "fashion-154",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198069/portfolio/Fashion/compressed_3J3A7554_fianl.jpg",
    alt: "Fashion Photography 154",
    category: "Fashion"
  },
  {
    id: "fashion-155",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198071/portfolio/Fashion/compressed_3J3A7675_final.jpg",
    alt: "Fashion Photography 155",
    category: "Fashion"
  },
  {
    id: "fashion-156",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198073/portfolio/Fashion/compressed_3J3A7685_final.jpg",
    alt: "Fashion Photography 156",
    category: "Fashion"
  },
  {
    id: "fashion-157",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198075/portfolio/Fashion/compressed_3J3A7696_final.jpg",
    alt: "Fashion Photography 157",
    category: "Fashion"
  },
  {
    id: "fashion-158",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198077/portfolio/Fashion/compressed_3J3A7702_final.jpg",
    alt: "Fashion Photography 158",
    category: "Fashion"
  },
  {
    id: "fashion-159",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198079/portfolio/Fashion/compressed_3J3A7711_final.jpg",
    alt: "Fashion Photography 159",
    category: "Fashion"
  },
  {
    id: "fashion-160",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198080/portfolio/Fashion/compressed_4I9A0458_final_2.jpg",
    alt: "Fashion Photography 160",
    category: "Fashion"
  },
  {
    id: "fashion-161",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198083/portfolio/Fashion/compressed_4I9A0458_final_crop.jpg",
    alt: "Fashion Photography 161",
    category: "Fashion"
  },
  {
    id: "fashion-162",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198085/portfolio/Fashion/compressed_4I9A0458_final.jpg",
    alt: "Fashion Photography 162",
    category: "Fashion"
  },
  {
    id: "fashion-163",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198086/portfolio/Fashion/compressed_4I9A0513_final_crop.jpg",
    alt: "Fashion Photography 163",
    category: "Fashion"
  },
  {
    id: "fashion-164",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198087/portfolio/Fashion/compressed_4I9A0513_final.jpg",
    alt: "Fashion Photography 164",
    category: "Fashion"
  },
  {
    id: "fashion-165",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198089/portfolio/Fashion/compressed_4I9A0540_final_crop.jpg",
    alt: "Fashion Photography 165",
    category: "Fashion"
  },
  {
    id: "fashion-166",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198091/portfolio/Fashion/compressed_4I9A0540_final.jpg",
    alt: "Fashion Photography 166",
    category: "Fashion"
  },
  {
    id: "fashion-167",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198092/portfolio/Fashion/compressed_4I9A0659_final_crop.jpg",
    alt: "Fashion Photography 167",
    category: "Fashion"
  },
  {
    id: "fashion-168",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198094/portfolio/Fashion/compressed_4I9A0659_final.jpg",
    alt: "Fashion Photography 168",
    category: "Fashion"
  },
  {
    id: "fashion-169",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198095/portfolio/Fashion/compressed_4I9A1016_final_crop.jpg",
    alt: "Fashion Photography 169",
    category: "Fashion"
  },
  {
    id: "fashion-170",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198097/portfolio/Fashion/compressed_4I9A1016_final.jpg",
    alt: "Fashion Photography 170",
    category: "Fashion"
  },
  {
    id: "fashion-171",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198099/portfolio/Fashion/compressed_4I9A1028_final_crop.jpg",
    alt: "Fashion Photography 171",
    category: "Fashion"
  },
  {
    id: "fashion-172",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198101/portfolio/Fashion/compressed_4I9A1028_final.jpg",
    alt: "Fashion Photography 172",
    category: "Fashion"
  },
  {
    id: "fashion-173",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198103/portfolio/Fashion/compressed_4I9A1092_final_crop.jpg",
    alt: "Fashion Photography 173",
    category: "Fashion"
  },
  {
    id: "fashion-174",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198105/portfolio/Fashion/compressed_4I9A1092_final.jpg",
    alt: "Fashion Photography 174",
    category: "Fashion"
  },
  {
    id: "fashion-175",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198106/portfolio/Fashion/compressed_4I9A1109_final_2.jpg",
    alt: "Fashion Photography 175",
    category: "Fashion"
  },
  {
    id: "fashion-176",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198108/portfolio/Fashion/compressed_4I9A1109_final_crop.jpg",
    alt: "Fashion Photography 176",
    category: "Fashion"
  },
  {
    id: "fashion-177",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198110/portfolio/Fashion/compressed_4I9A1109_final.jpg",
    alt: "Fashion Photography 177",
    category: "Fashion"
  },
  {
    id: "fashion-178",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198111/portfolio/Fashion/compressed_4I9A1188_fianl_crop.jpg",
    alt: "Fashion Photography 178",
    category: "Fashion"
  },
  {
    id: "fashion-179",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198114/portfolio/Fashion/compressed_4I9A1188_fianl.jpg",
    alt: "Fashion Photography 179",
    category: "Fashion"
  },
  {
    id: "fashion-180",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198115/portfolio/Fashion/compressed_4I9A1220_fianl_crop.jpg",
    alt: "Fashion Photography 180",
    category: "Fashion"
  },
  {
    id: "fashion-181",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198117/portfolio/Fashion/compressed_4I9A1220_fianl.jpg",
    alt: "Fashion Photography 181",
    category: "Fashion"
  },
  {
    id: "fashion-182",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198118/portfolio/Fashion/compressed_4I9A1320_fianl_crop.jpg",
    alt: "Fashion Photography 182",
    category: "Fashion"
  },
  {
    id: "fashion-183",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198120/portfolio/Fashion/compressed_4I9A1320_fianl.jpg",
    alt: "Fashion Photography 183",
    category: "Fashion"
  },
  {
    id: "fashion-184",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198122/portfolio/Fashion/compressed_4I9A1327_fianl_crop.jpg",
    alt: "Fashion Photography 184",
    category: "Fashion"
  },
  {
    id: "fashion-185",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198125/portfolio/Fashion/compressed_4I9A1327_fianl.jpg",
    alt: "Fashion Photography 185",
    category: "Fashion"
  },
  {
    id: "fashion-186",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198127/portfolio/Fashion/compressed_4I9A1329_fianl_crop.jpg",
    alt: "Fashion Photography 186",
    category: "Fashion"
  },
  {
    id: "fashion-187",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198130/portfolio/Fashion/compressed_4I9A1329_fianl.jpg",
    alt: "Fashion Photography 187",
    category: "Fashion"
  },
  {
    id: "fashion-189",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198140/portfolio/Fashion/compressed_DSC00028.jpg",
    alt: "Fashion Photography 189",
    category: "Fashion"
  },
  {
    id: "fashion-190",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198142/portfolio/Fashion/compressed_DSC00040.jpg",
    alt: "Fashion Photography 190",
    category: "Fashion"
  },
  {
    id: "fashion-191",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198143/portfolio/Fashion/compressed_DSC00399.jpg",
    alt: "Fashion Photography 191",
    category: "Fashion"
  },
  {
    id: "fashion-192",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198145/portfolio/Fashion/compressed_DSC00480.jpg",
    alt: "Fashion Photography 192",
    category: "Fashion"
  },
  {
    id: "fashion-193",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198147/portfolio/Fashion/compressed_DSC00485.jpg",
    alt: "Fashion Photography 193",
    category: "Fashion"
  },
  {
    id: "fashion-194",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198148/portfolio/Fashion/compressed_DSC00487.jpg",
    alt: "Fashion Photography 194",
    category: "Fashion"
  },
  {
    id: "fashion-195",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198150/portfolio/Fashion/compressed_DSC00487.jpg",
    alt: "Fashion Photography 195",
    category: "Fashion"
  },
  {
    id: "fashion-196",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198152/portfolio/Fashion/compressed_DSC00489.jpg",
    alt: "Fashion Photography 196",
    category: "Fashion"
  },
  {
    id: "fashion-197",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198154/portfolio/Fashion/compressed_DSC00494.jpg",
    alt: "Fashion Photography 197",
    category: "Fashion"
  },
  {
    id: "fashion-198",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198157/portfolio/Fashion/compressed_DSC00497.jpg",
    alt: "Fashion Photography 198",
    category: "Fashion"
  },
  {
    id: "fashion-199",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198159/portfolio/Fashion/compressed_DSC00505.jpg",
    alt: "Fashion Photography 199",
    category: "Fashion"
  },
  {
    id: "fashion-200",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198160/portfolio/Fashion/compressed_DSC00515.jpg",
    alt: "Fashion Photography 200",
    category: "Fashion"
  },
  {
    id: "fashion-201",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198162/portfolio/Fashion/compressed_DSC00515.jpg",
    alt: "Fashion Photography 201",
    category: "Fashion"
  },
  {
    id: "fashion-202",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198164/portfolio/Fashion/compressed_DSC00516.jpg",
    alt: "Fashion Photography 202",
    category: "Fashion"
  },
  {
    id: "fashion-203",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198166/portfolio/Fashion/compressed_DSC00522.jpg",
    alt: "Fashion Photography 203",
    category: "Fashion"
  },
  {
    id: "fashion-204",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198168/portfolio/Fashion/compressed_DSC00528.jpg",
    alt: "Fashion Photography 204",
    category: "Fashion"
  },
  {
    id: "fashion-205",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198170/portfolio/Fashion/compressed_DSC00529.jpg",
    alt: "Fashion Photography 205",
    category: "Fashion"
  },
  {
    id: "fashion-206",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198171/portfolio/Fashion/compressed_DSC00530.jpg",
    alt: "Fashion Photography 206",
    category: "Fashion"
  },
  {
    id: "fashion-207",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198173/portfolio/Fashion/compressed_DSC00540.jpg",
    alt: "Fashion Photography 207",
    category: "Fashion"
  },
  {
    id: "fashion-208",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198176/portfolio/Fashion/compressed_DSC00549.jpg",
    alt: "Fashion Photography 208",
    category: "Fashion"
  },
  {
    id: "fashion-209",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198179/portfolio/Fashion/compressed_DSC00560.jpg",
    alt: "Fashion Photography 209",
    category: "Fashion"
  },
  {
    id: "fashion-210",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198180/portfolio/Fashion/compressed_DSC00579.jpg",
    alt: "Fashion Photography 210",
    category: "Fashion"
  },
  {
    id: "fashion-211",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198182/portfolio/Fashion/compressed_DSC00584.jpg",
    alt: "Fashion Photography 211",
    category: "Fashion"
  },
  {
    id: "fashion-212",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198184/portfolio/Fashion/compressed_DSC00585.jpg",
    alt: "Fashion Photography 212",
    category: "Fashion"
  },
  {
    id: "fashion-213",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198186/portfolio/Fashion/compressed_DSC00591.jpg",
    alt: "Fashion Photography 213",
    category: "Fashion"
  },
  {
    id: "fashion-214",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198188/portfolio/Fashion/compressed_DSC00592.jpg",
    alt: "Fashion Photography 214",
    category: "Fashion"
  },
  {
    id: "fashion-215",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198190/portfolio/Fashion/compressed_DSC00600.jpg",
    alt: "Fashion Photography 215",
    category: "Fashion"
  },
  {
    id: "fashion-216",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198192/portfolio/Fashion/compressed_DSC00604.jpg",
    alt: "Fashion Photography 216",
    category: "Fashion"
  },
  {
    id: "fashion-217",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198194/portfolio/Fashion/compressed_DSC00678.jpg",
    alt: "Fashion Photography 217",
    category: "Fashion"
  },
  {
    id: "fashion-218",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198195/portfolio/Fashion/compressed_DSC00697.jpg",
    alt: "Fashion Photography 218",
    category: "Fashion"
  },
  {
    id: "fashion-219",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198197/portfolio/Fashion/compressed_DSC00810.jpg",
    alt: "Fashion Photography 219",
    category: "Fashion"
  },
  {
    id: "fashion-220",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198199/portfolio/Fashion/compressed_DSC00830.jpg",
    alt: "Fashion Photography 220",
    category: "Fashion"
  },
  {
    id: "fashion-221",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198201/portfolio/Fashion/compressed_DSC00905.jpg",
    alt: "Fashion Photography 221",
    category: "Fashion"
  },
  {
    id: "fashion-222",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198203/portfolio/Fashion/compressed_DSC00963.jpg",
    alt: "Fashion Photography 222",
    category: "Fashion"
  },
  {
    id: "fashion-223",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198204/portfolio/Fashion/compressed_DSC00967.jpg",
    alt: "Fashion Photography 223",
    category: "Fashion"
  },
  {
    id: "fashion-224",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198206/portfolio/Fashion/compressed_DSC01011.jpg",
    alt: "Fashion Photography 224",
    category: "Fashion"
  },
  {
    id: "fashion-225",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198208/portfolio/Fashion/compressed_DSC01033.jpg",
    alt: "Fashion Photography 225",
    category: "Fashion"
  },
  {
    id: "fashion-226",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198209/portfolio/Fashion/compressed_DSC01033.jpg",
    alt: "Fashion Photography 226",
    category: "Fashion"
  },
  {
    id: "fashion-227",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198212/portfolio/Fashion/compressed_DSC01040_copy.jpg",
    alt: "Fashion Photography 227",
    category: "Fashion"
  },
  {
    id: "fashion-228",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198213/portfolio/Fashion/compressed_DSC01046_final.jpg",
    alt: "Fashion Photography 228",
    category: "Fashion"
  },
  {
    id: "fashion-229",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198215/portfolio/Fashion/compressed_DSC01082.jpg",
    alt: "Fashion Photography 229",
    category: "Fashion"
  },
  {
    id: "fashion-230",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198217/portfolio/Fashion/compressed_DSC01084.jpg",
    alt: "Fashion Photography 230",
    category: "Fashion"
  },
  {
    id: "fashion-231",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198219/portfolio/Fashion/compressed_DSC01089_final.jpg",
    alt: "Fashion Photography 231",
    category: "Fashion"
  },
  {
    id: "fashion-232",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198220/portfolio/Fashion/compressed_DSC01095.jpg",
    alt: "Fashion Photography 232",
    category: "Fashion"
  },
  {
    id: "fashion-233",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198222/portfolio/Fashion/compressed_DSC01102_final.jpg",
    alt: "Fashion Photography 233",
    category: "Fashion"
  },
  {
    id: "fashion-234",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198224/portfolio/Fashion/compressed_DSC01112.jpg",
    alt: "Fashion Photography 234",
    category: "Fashion"
  },
  {
    id: "fashion-235",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198226/portfolio/Fashion/compressed_DSC01118_final.jpg",
    alt: "Fashion Photography 235",
    category: "Fashion"
  },
  {
    id: "fashion-236",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198228/portfolio/Fashion/compressed_DSC01162_final.jpg",
    alt: "Fashion Photography 236",
    category: "Fashion"
  },
  {
    id: "fashion-237",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198229/portfolio/Fashion/compressed_DSC01181.jpg",
    alt: "Fashion Photography 237",
    category: "Fashion"
  },
  {
    id: "fashion-238",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198233/portfolio/Fashion/compressed_DSC01384.jpg",
    alt: "Fashion Photography 238",
    category: "Fashion"
  },
  {
    id: "fashion-239",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198237/portfolio/Fashion/compressed_DSC01392.jpg",
    alt: "Fashion Photography 239",
    category: "Fashion"
  },
  {
    id: "fashion-240",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198243/portfolio/Fashion/compressed_DSC01400.jpg",
    alt: "Fashion Photography 240",
    category: "Fashion"
  },
  {
    id: "fashion-241",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198245/portfolio/Fashion/compressed_DSC01404.jpg",
    alt: "Fashion Photography 241",
    category: "Fashion"
  },
  {
    id: "fashion-242",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198246/portfolio/Fashion/compressed_DSC01434.jpg",
    alt: "Fashion Photography 242",
    category: "Fashion"
  },
  {
    id: "fashion-243",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198248/portfolio/Fashion/compressed_DSC01531.jpg",
    alt: "Fashion Photography 243",
    category: "Fashion"
  },
  {
    id: "fashion-244",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198250/portfolio/Fashion/compressed_DSC01546.jpg",
    alt: "Fashion Photography 244",
    category: "Fashion"
  },
  {
    id: "fashion-245",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198251/portfolio/Fashion/compressed_DSC01571.jpg",
    alt: "Fashion Photography 245",
    category: "Fashion"
  },
  {
    id: "fashion-246",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198253/portfolio/Fashion/compressed_DSC01571.jpg",
    alt: "Fashion Photography 246",
    category: "Fashion"
  },
  {
    id: "fashion-247",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198255/portfolio/Fashion/compressed_DSC01646.jpg",
    alt: "Fashion Photography 247",
    category: "Fashion"
  },
  {
    id: "fashion-248",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198257/portfolio/Fashion/compressed_DSC01653.jpg",
    alt: "Fashion Photography 248",
    category: "Fashion"
  },
  {
    id: "fashion-249",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198258/portfolio/Fashion/compressed_DSC01764.jpg",
    alt: "Fashion Photography 249",
    category: "Fashion"
  },
  {
    id: "fashion-250",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198261/portfolio/Fashion/compressed_DSC04393_copy.jpg",
    alt: "Fashion Photography 250",
    category: "Fashion"
  },
  {
    id: "fashion-251",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198262/portfolio/Fashion/compressed_DSC04415.jpg",
    alt: "Fashion Photography 251",
    category: "Fashion"
  },
  {
    id: "fashion-252",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198264/portfolio/Fashion/compressed_DSC04479_copy.jpg",
    alt: "Fashion Photography 252",
    category: "Fashion"
  },
  {
    id: "fashion-253",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198264/portfolio/Fashion/compressed_DSC04479_copy.jpg",
    alt: "Fashion Photography 253",
    category: "Fashion"
  },
  {
    id: "fashion-254",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198264/portfolio/Fashion/compressed_DSC04479_copy.jpg",
    alt: "Fashion Photography 254",
    category: "Fashion"
  },
  {
    id: "fashion-255",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198269/portfolio/Fashion/compressed_DSC04479.jpg",
    alt: "Fashion Photography 255",
    category: "Fashion"
  },
  {
    id: "fashion-256",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198271/portfolio/Fashion/compressed_DSC04487.jpg",
    alt: "Fashion Photography 256",
    category: "Fashion"
  },
  {
    id: "fashion-257",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198272/portfolio/Fashion/compressed_DSC04508.jpg",
    alt: "Fashion Photography 257",
    category: "Fashion"
  },
  {
    id: "fashion-258",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198274/portfolio/Fashion/compressed_DSC04519_copy.jpg",
    alt: "Fashion Photography 258",
    category: "Fashion"
  },
  {
    id: "fashion-259",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198275/portfolio/Fashion/compressed_DSC04519_copy.jpg",
    alt: "Fashion Photography 259",
    category: "Fashion"
  },
  {
    id: "fashion-260",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198275/portfolio/Fashion/compressed_DSC04519_copy.jpg",
    alt: "Fashion Photography 260",
    category: "Fashion"
  },
  {
    id: "fashion-261",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198275/portfolio/Fashion/compressed_DSC04519_copy.jpg",
    alt: "Fashion Photography 261",
    category: "Fashion"
  },
  {
    id: "fashion-262",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198281/portfolio/Fashion/compressed_DSC04583.jpg",
    alt: "Fashion Photography 262",
    category: "Fashion"
  },
  {
    id: "fashion-263",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198283/portfolio/Fashion/compressed_DSC04597.jpg",
    alt: "Fashion Photography 263",
    category: "Fashion"
  },
  {
    id: "fashion-264",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198284/portfolio/Fashion/compressed_DSC04701_copy.jpg",
    alt: "Fashion Photography 264",
    category: "Fashion"
  },
  {
    id: "fashion-265",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198286/portfolio/Fashion/compressed_DSC04716_copy.jpg",
    alt: "Fashion Photography 265",
    category: "Fashion"
  },
  // {
  //   id: "fashion-266",
  //   url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198288/portfolio/Fashion/compressed_DSC04716_copy.jpg",
  //   alt: "Fashion Photography 266",
  //   category: "Fashion"
  // },
  // {
  //   id: "fashion-267",
  //   url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198288/portfolio/Fashion/compressed_DSC04716_copy.jpg",
  //   alt: "Fashion Photography 267",
  //   category: "Fashion"
  // },
  {
    id: "fashion-268",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198292/portfolio/Fashion/compressed_DSC04716_copy.jpg",
    alt: "Fashion Photography 268",
    category: "Fashion"
  },
  {
    id: "fashion-269",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198294/portfolio/Fashion/compressed_DSC04716.jpg",
    alt: "Fashion Photography 269",
    category: "Fashion"
  },
  {
    id: "fashion-270",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198295/portfolio/Fashion/compressed_DSC04742_copy.jpg",
    alt: "Fashion Photography 270",
    category: "Fashion"
  },
  {
    id: "fashion-271",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198297/portfolio/Fashion/compressed_DSC04744_copy.jpg",
    alt: "Fashion Photography 271",
    category: "Fashion"
  },
  {
    id: "fashion-272",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198299/portfolio/Fashion/compressed_DSC04745_copy.jpg",
    alt: "Fashion Photography 272",
    category: "Fashion"
  },
  {
    id: "fashion-273",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198300/portfolio/Fashion/compressed_DSC04755_copy.jpg",
    alt: "Fashion Photography 273",
    category: "Fashion"
  },
  {
    id: "fashion-274",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198302/portfolio/Fashion/compressed_DSC04756_copy.jpg",
    alt: "Fashion Photography 274",
    category: "Fashion"
  },
  {
    id: "fashion-275",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198304/portfolio/Fashion/compressed_DSC04763_2_copy.jpg",
    alt: "Fashion Photography 275",
    category: "Fashion"
  },
  {
    id: "fashion-276",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198306/portfolio/Fashion/compressed_DSC04763_copy.jpg",
    alt: "Fashion Photography 276",
    category: "Fashion"
  },
  {
    id: "fashion-277",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198308/portfolio/Fashion/compressed_DSC04791_copy.jpg",
    alt: "Fashion Photography 277",
    category: "Fashion"
  },
  {
    id: "fashion-278",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198310/portfolio/Fashion/compressed_DSC04844_copy.jpg",
    alt: "Fashion Photography 278",
    category: "Fashion"
  },
  {
    id: "fashion-279",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198313/portfolio/Fashion/compressed_DSC04853_copy.jpg",
    alt: "Fashion Photography 279",
    category: "Fashion"
  },
  {
    id: "fashion-280",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198314/portfolio/Fashion/compressed_DSC04855_copy.jpg",
    alt: "Fashion Photography 280",
    category: "Fashion"
  },
  {
    id: "fashion-281",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198316/portfolio/Fashion/compressed_DSC04885_copy.jpg",
    alt: "Fashion Photography 281",
    category: "Fashion"
  },
    {
    id: "fashion-282",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198318/portfolio/Fashion/compressed_DSC04890.jpg",
    alt: "Fashion Photography 282",
    category: "Fashion"
  },
  {
    id: "fashion-283",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198318/portfolio/Fashion/compressed_DSC04890.jpg",
    alt: "Fashion Photography 283",
    category: "Fashion"
  },
  {
    id: "fashion-284",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198319/portfolio/Fashion/compressed_DSC04891.jpg",
    alt: "Fashion Photography 284",
    category: "Fashion"
  },
  {
    id: "fashion-285",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198321/portfolio/Fashion/compressed_DSC04899_copy.jpg",
    alt: "Fashion Photography 285",
    category: "Fashion"
  },
  {
    id: "fashion-286",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198323/portfolio/Fashion/compressed_DSC05059.jpg",
    alt: "Fashion Photography 286",
    category: "Fashion"
  },
  {
    id: "fashion-287",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198325/portfolio/Fashion/compressed_DSC05254.jpg",
    alt: "Fashion Photography 287",
    category: "Fashion"
  },
  {
    id: "fashion-288",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198326/portfolio/Fashion/compressed_DSC05332.jpg",
    alt: "Fashion Photography 288",
    category: "Fashion"
  },
  {
    id: "fashion-289",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198328/portfolio/Fashion/compressed_DSC05562.jpg",
    alt: "Fashion Photography 289",
    category: "Fashion"
  },
  {
    id: "fashion-290",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198330/portfolio/Fashion/compressed_DSC05575.jpg",
    alt: "Fashion Photography 290",
    category: "Fashion"
  },
  {
    id: "fashion-291",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198332/portfolio/Fashion/compressed_DSC05614.jpg",
    alt: "Fashion Photography 291",
    category: "Fashion"
  },
  {
    id: "fashion-292",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198333/portfolio/Fashion/compressed_DSC05743.jpg",
    alt: "Fashion Photography 292",
    category: "Fashion"
  },
  {
    id: "fashion-293",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198335/portfolio/Fashion/compressed_DSC05777.jpg",
    alt: "Fashion Photography 293",
    category: "Fashion"
  },
  {
    id: "fashion-294",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198337/portfolio/Fashion/compressed_DSC05851.jpg",
    alt: "Fashion Photography 294",
    category: "Fashion"
  },
  {
    id: "fashion-295",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198339/portfolio/Fashion/compressed_DSC05858.jpg",
    alt: "Fashion Photography 295",
    category: "Fashion"
  },
  {
    id: "fashion-296",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198341/portfolio/Fashion/compressed_DSC05896.jpg",
    alt: "Fashion Photography 296",
    category: "Fashion"
  },
  {
    id: "fashion-297",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198342/portfolio/Fashion/compressed_DSC05989.jpg",
    alt: "Fashion Photography 297",
    category: "Fashion"
  },
  {
    id: "fashion-298",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198344/portfolio/Fashion/compressed_DSC06030.jpg",
    alt: "Fashion Photography 298",
    category: "Fashion"
  },
  {
    id: "fashion-299",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198346/portfolio/Fashion/compressed_DSC06087.jpg",
    alt: "Fashion Photography 299",
    category: "Fashion"
  },
  {
    id: "fashion-300",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198347/portfolio/Fashion/compressed_DSC06129.jpg",
    alt: "Fashion Photography 300",
    category: "Fashion"
  },
  {
    id: "fashion-301",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198349/portfolio/Fashion/compressed_DSC06141.jpg",
    alt: "Fashion Photography 301",
    category: "Fashion"
  },
  {
    id: "fashion-302",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198353/portfolio/Fashion/compressed_DSC06148.jpg",
    alt: "Fashion Photography 302",
    category: "Fashion"
  },
  {
    id: "fashion-303",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198355/portfolio/Fashion/compressed_DSC06172.jpg",
    alt: "Fashion Photography 303",
    category: "Fashion"
  },
  {
    id: "fashion-304",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198356/portfolio/Fashion/compressed_DSC06279.jpg",
    alt: "Fashion Photography 304",
    category: "Fashion"
  },
  {
    id: "fashion-305",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198358/portfolio/Fashion/compressed_DSC06812.jpg",
    alt: "Fashion Photography 305",
    category: "Fashion"
  },
  {
    id: "fashion-306",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198359/portfolio/Fashion/compressed_DSC07814_1.jpg",
    alt: "Fashion Photography 306",
    category: "Fashion"
  },
  {
    id: "fashion-307",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198361/portfolio/Fashion/compressed_DSC07825_1.jpg",
    alt: "Fashion Photography 307",
    category: "Fashion"
  },
  {
    id: "fashion-308",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198362/portfolio/Fashion/compressed_DSC07847_2_1.jpg",
    alt: "Fashion Photography 308",
    category: "Fashion"
  },
  {
    id: "fashion-309",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198364/portfolio/Fashion/compressed_DSC08902.jpg",
    alt: "Fashion Photography 309",
    category: "Fashion"
  },
  {
    id: "fashion-310",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198365/portfolio/Fashion/compressed_DSC09130.jpg",
    alt: "Fashion Photography 310",
    category: "Fashion"
  },
  {
    id: "fashion-311",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198367/portfolio/Fashion/compressed_DSC09158.jpg",
    alt: "Fashion Photography 311",
    category: "Fashion"
  },
  {
    id: "fashion-312",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198369/portfolio/Fashion/compressed_DSC09285.jpg",
    alt: "Fashion Photography 312",
    category: "Fashion"
  },
  {
    id: "fashion-313",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198370/portfolio/Fashion/compressed_DSC09289.jpg",
    alt: "Fashion Photography 313",
    category: "Fashion"
  },
  {
    id: "fashion-314",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198372/portfolio/Fashion/compressed_DSC09321.jpg",
    alt: "Fashion Photography 314",
    category: "Fashion"
  },
  {
    id: "fashion-315",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198374/portfolio/Fashion/compressed_DSC09322.jpg",
    alt: "Fashion Photography 315",
    category: "Fashion"
  },
  {
    id: "fashion-316",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198376/portfolio/Fashion/compressed_DSC09323.jpg",
    alt: "Fashion Photography 316",
    category: "Fashion"
  },
  {
    id: "fashion-317",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198378/portfolio/Fashion/compressed_DSC09432.jpg",
    alt: "Fashion Photography 317",
    category: "Fashion"
  },
  {
    id: "fashion-318",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198379/portfolio/Fashion/compressed_DSC09440.jpg",
    alt: "Fashion Photography 318",
    category: "Fashion"
  },
  {
    id: "fashion-319",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198381/portfolio/Fashion/compressed_DSC09441.jpg",
    alt: "Fashion Photography 319",
    category: "Fashion"
  },
  {
    id: "fashion-320",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198383/portfolio/Fashion/compressed_DSC09475.jpg",
    alt: "Fashion Photography 320",
    category: "Fashion"
  },
  {
    id: "fashion-321",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198385/portfolio/Fashion/compressed_DSC09491.jpg",
    alt: "Fashion Photography 321",
    category: "Fashion"
  },
  {
    id: "fashion-322",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198386/portfolio/Fashion/compressed_DSC09507.jpg",
    alt: "Fashion Photography 322",
    category: "Fashion"
  },
  {
    id: "fashion-323",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198388/portfolio/Fashion/compressed_DSC09537.jpg",
    alt: "Fashion Photography 323",
    category: "Fashion"
  },
  {
    id: "fashion-324",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198390/portfolio/Fashion/compressed_DSC09549.jpg",
    alt: "Fashion Photography 324",
    category: "Fashion"
  },
  {
    id: "fashion-325",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198391/portfolio/Fashion/compressed_DSC09573_2.jpg",
    alt: "Fashion Photography 325",
    category: "Fashion"
  },
  {
    id: "fashion-326",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198393/portfolio/Fashion/compressed_DSC09581.jpg",
    alt: "Fashion Photography 326",
    category: "Fashion"
  },
  {
    id: "fashion-327",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198395/portfolio/Fashion/compressed_DSC09619.jpg",
    alt: "Fashion Photography 327",
    category: "Fashion"
  },
  {
    id: "fashion-328",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198397/portfolio/Fashion/compressed_DSC09653.jpg",
    alt: "Fashion Photography 328",
    category: "Fashion"
  },
  {
    id: "fashion-329",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198399/portfolio/Fashion/compressed_DSC09707.jpg",
    alt: "Fashion Photography 329",
    category: "Fashion"
  },
  {
    id: "fashion-330",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198400/portfolio/Fashion/compressed_DSC09790_ff.jpg",
    alt: "Fashion Photography 330",
    category: "Fashion"
  },
  {
    id: "fashion-332",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198411/portfolio/Fashion/compressed__MG_0111_ff.jpg",
    alt: "Fashion Photography 332",
    category: "Fashion"
  },
  {
    id: "fashion-333",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198412/portfolio/Fashion/compressed__MG_0179_ff.jpg",
    alt: "Fashion Photography 333",
    category: "Fashion"
  },
  {
    id: "fashion-334",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198416/portfolio/Fashion/compressed__MG_0239_ff.jpg",
    alt: "Fashion Photography 334",
    category: "Fashion"
  },
  {
    id: "fashion-335",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198420/portfolio/Fashion/compressed__MG_0366_ff.jpg",
    alt: "Fashion Photography 335",
    category: "Fashion"
  },
  {
    id: "fashion-336",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198421/portfolio/Fashion/compressed__MG_0454_ff.jpg",
    alt: "Fashion Photography 336",
    category: "Fashion"
  }, 
  {
    id: "fashion-337",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755198423/portfolio/Fashion/compressed__MG_9968_ff.jpg",
    alt: "Fashion Photography 337",
    category: "Fashion"
  }
];

const productImages: ImageData[] = [
  {
    id: "product-1",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_1600,q_auto,f_auto/v1754632757/portfolio/Product/100.jpg",
    alt: "Product Photography 1",
    category: "Product",
  },
  {
    id: "product-2",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632758/portfolio/Product/101.jpg",
    alt: "Product Photography 2",
    category: "Product",
  },
  {
    id: "product-3",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632764/portfolio/Product/102.jpg",
    alt: "Product Photography 3",
    category: "Product",
  },
  {
    id: "product-4",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632890/portfolio/Product/12.jpg",
    alt: "Product Photography 4",
    category: "Product",
  },
  {
    id: "product-5",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632891/portfolio/Product/13.jpg",
    alt: "Product Photography 5",
    category: "Product",
  },
  {
    id: "product-6",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632893/portfolio/Product/14.jpg",
    alt: "Product Photography 6",
    category: "Product",
  },
  {
    id: "product-7",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632901/portfolio/Product/16.jpg",
    alt: "Product Photography 7",
    category: "Product",
  },
  {
    id: "product-8",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632904/portfolio/Product/17.jpg",
    alt: "Product Photography 8",
    category: "Product",
  },
  {
    id: "product-9",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754632972/portfolio/Product/2.jpg",
    alt: "Product Photography 9",
    category: "Product",
  },
  {
    id: "product-10",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633010/portfolio/Product/22.jpg",
    alt: "Product Photography 10",
    category: "Product",
  },
  {
    id: "product-11",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633013/portfolio/Product/23.jpg",
    alt: "Product Photography 11",
    category: "Product",
  },
  {
    id: "product-12",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633017/portfolio/Product/24.jpg",
    alt: "Product Photography 12",
    category: "Product",
  },
  {
    id: "product-13",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633055/portfolio/Product/27.jpg",
    alt: "Product Photography 13",
    category: "Product",
  },
  {
    id: "product-14",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633056/portfolio/Product/28.jpg",
    alt: "Product Photography 14",
    category: "Product",
  },
  {
    id: "product-15",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633067/portfolio/Product/3.jpg",
    alt: "Product Photography 15",
    category: "Product",
  },
  {
    id: "product-16",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633136/portfolio/Product/33.jpg",
    alt: "Product Photography 16",
    category: "Product",
  },
  {
    id: "product-17",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633138/portfolio/Product/34.jpg",
    alt: "Product Photography 17",
    category: "Product",
  },
  {
    id: "product-18",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633140/portfolio/Product/35.jpg",
    alt: "Product Photography 18",
    category: "Product",
  },
  {
    id: "product-19",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633141/portfolio/Product/36.jpg",
    alt: "Product Photography 19",
    category: "Product",
  },
  {
    id: "product-20",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633193/portfolio/Product/41.jpg",
    alt: "Product Photography 20",
    category: "Product",
  },
  {
    id: "product-21",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633198/portfolio/Product/42.jpg",
    alt: "Product Photography 21",
    category: "Product",
  },
  {
    id: "product-22",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633200/portfolio/Product/43.jpg",
    alt: "Product Photography 22",
    category: "Product",
  },
  {
    id: "product-23",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633203/portfolio/Product/44.jpg",
    alt: "Product Photography 23",
    category: "Product",
  },
  {
    id: "product-24",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633207/portfolio/Product/45.jpg",
    alt: "Product Photography 24",
    category: "Product",
  },
  {
    id: "product-25",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633208/portfolio/Product/46.jpg",
    alt: "Product Photography 25",
    category: "Product",
  },
  {
    id: "product-26",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633213/portfolio/Product/47.jpg",
    alt: "Product Photography 26",
    category: "Product",
  },
  {
    id: "product-27",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633215/portfolio/Product/48.jpg",
    alt: "Product Photography 27",
    category: "Product",
  },
  {
    id: "product-28",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633217/portfolio/Product/49.jpg",
    alt: "Product Photography 28",
    category: "Product",
  },
  {
    id: "product-29",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633220/portfolio/Product/5.jpg",
    alt: "Product Photography 29",
    category: "Product",
  },
  {
    id: "product-30",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633221/portfolio/Product/50.jpg",
    alt: "Product Photography 30",
    category: "Product",
  },
  {
    id: "product-31",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633223/portfolio/Product/51.jpg",
    alt: "Product Photography 31",
    category: "Product",
  },
  {
    id: "product-32",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633224/portfolio/Product/52.jpg",
    alt: "Product Photography 32",
    category: "Product",
  },
  {
    id: "product-33",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633225/portfolio/Product/53.jpg",
    alt: "Product Photography 33",
    category: "Product",
  },
  {
    id: "product-34",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633227/portfolio/Product/54.jpg",
    alt: "Product Photography 34",
    category: "Product",
  },
  {
    id: "product-35",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633233/portfolio/Product/55.jpg",
    alt: "Product Photography 35",
    category: "Product",
  },
  {
    id: "product-36",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633235/portfolio/Product/56.jpg",
    alt: "Product Photography 36",
    category: "Product",
  },
  {
    id: "product-37",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633237/portfolio/Product/57.jpg",
    alt: "Product Photography 37",
    category: "Product",
  },
  {
    id: "product-38",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633238/portfolio/Product/58.jpg",
    alt: "Product Photography 38",
    category: "Product",
  },
  {
    id: "product-39",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633257/portfolio/Product/6.jpg",
    alt: "Product Photography 39",
    category: "Product",
  },
  {
    id: "product-40",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633271/portfolio/Product/63.jpg",
    alt: "Product Photography 40",
    category: "Product",
  },
  {
    id: "product-41",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633276/portfolio/Product/65.jpg",
    alt: "Product Photography 41",
    category: "Product",
  },
  {
    id: "product-42",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633326/portfolio/Product/7.jpg",
    alt: "Product Photography 42",
    category: "Product",
  },
  {
    id: "product-43",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633330/portfolio/Product/70.jpg",
    alt: "Product Photography 43",
    category: "Product",
  },
  {
    id: "product-44",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633334/portfolio/Product/71.jpg",
    alt: "Product Photography 44",
    category: "Product",
  },
  {
    id: "product-45",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633385/portfolio/Product/75.jpg",
    alt: "Product Photography 45",
    category: "Product",
  },
  {
    id: "product-46",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633465/portfolio/Product/80.jpg",
    alt: "Product Photography 46",
    category: "Product",
  },
  {
    id: "product-47",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633506/portfolio/Product/84.jpg",
    alt: "Product Photography 47",
    category: "Product",
  },
  {
    id: "product-48",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633518/portfolio/Product/86.jpg",
    alt: "Product Photography 48",
    category: "Product",
  },
  {
    id: "product-49",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633519/portfolio/Product/87.jpg",
    alt: "Product Photography 49",
    category: "Product",
  },
  {
    id: "product-50",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633521/portfolio/Product/88.jpg",
    alt: "Product Photography 50",
    category: "Product",
  },
  {
    id: "product-51",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633522/portfolio/Product/89.jpg",
    alt: "Product Photography 51",
    category: "Product",
  },
  {
    id: "product-52",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633527/portfolio/Product/9.jpg",
    alt: "Product Photography 52",
    category: "Product",
  },
  {
    id: "product-53",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633528/portfolio/Product/90.jpg",
    alt: "Product Photography 53",
    category: "Product",
  },
  {
    id: "product-54",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633530/portfolio/Product/91.jpg",
    alt: "Product Photography 54",
    category: "Product",
  },
  {
    id: "product-55",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633532/portfolio/Product/92.jpg",
    alt: "Product Photography 55",
    category: "Product",
  },
  {
    id: "product-56",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633533/portfolio/Product/93.jpg",
    alt: "Product Photography 56",
    category: "Product",
  },
  {
    id: "product-57",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754633535/portfolio/Product/94.jpg",
    alt: "Product Photography 57",
    category: "Product",
  },
  {
    id: "product-58",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754644519/portfolio/Product/95.jpg",
    alt: "Product Photography 58",
    category: "Product",
  },
  {
    id: "product-59",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754644521/portfolio/Product/96.jpg",
    alt: "Product Photography 59",
    category: "Product",
  },
  {
    id: "product-60",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754644523/portfolio/Product/97.jpg",
    alt: "Product Photography 60",
    category: "Product",
  },
  {
    id: "product-61",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754644526/portfolio/Product/98.jpg",
    alt: "Product Photography 61",
    category: "Product",
  },
  {
    id: "product-62",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754644527/portfolio/Product/99.jpg",
    alt: "Product Photography 62",
    category: "Product",
  },
  {
    id: "product-63",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196275/portfolio/Product/compressed_02_copy.jpg",
    alt: "Product Photography 63",
    category: "Product"
  },
  {
    id: "product-64",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196277/portfolio/Product/compressed_1.jpg",
    alt: "Product Photography 64",
    category: "Product"
  },
  {
    id: "product-65",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196279/portfolio/Product/compressed_10.jpg",
    alt: "Product Photography 65",
    category: "Product"
  },
  {
    id: "product-66",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196281/portfolio/Product/compressed_11.jpg",
    alt: "Product Photography 66",
    category: "Product"
  },
  {
    id: "product-67",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196283/portfolio/Product/compressed_15.jpg",
    alt: "Product Photography 67",
    category: "Product"
  },
  {
    id: "product-68",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196285/portfolio/Product/compressed_18.jpg",
    alt: "Product Photography 68",
    category: "Product"
  },
  {
    id: "product-69",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196288/portfolio/Product/compressed_19.jpg",
    alt: "Product Photography 69",
    category: "Product"
  },
  {
    id: "product-70",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_1600,q_auto,f_auto/v1755196291/portfolio/Product/compressed_20.jpg",
    alt: "Product Photography 70",
    category: "Product"
  },
  {
    id: "product-71",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196293/portfolio/Product/compressed_21.jpg",
    alt: "Product Photography 71",
    category: "Product"
  },
  {
    id: "product-72",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196296/portfolio/Product/compressed_25.jpg",
    alt: "Product Photography 72",
    category: "Product"
  },
  {
    id: "product-73",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196298/portfolio/Product/compressed_26.jpg",
    alt: "Product Photography 73",
    category: "Product"
  },
  {
    id: "product-74",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196301/portfolio/Product/compressed_29.jpg",
    alt: "Product Photography 74",
    category: "Product"
  },
  {
    id: "product-75",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196303/portfolio/Product/compressed_30.jpg",
    alt: "Product Photography 75",
    category: "Product"
  },
  {
    id: "product-76",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196306/portfolio/Product/compressed_31.jpg",
    alt: "Product Photography 76",
    category: "Product"
  },
  {
    id: "product-77",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196308/portfolio/Product/compressed_32.jpg",
    alt: "Product Photography 77",
    category: "Product"
  },
  {
    id: "product-78",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196310/portfolio/Product/compressed_37.jpg",
    alt: "Product Photography 78",
    category: "Product"
  },
  {
    id: "product-79",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196311/portfolio/Product/compressed_38.jpg",
    alt: "Product Photography 79",
    category: "Product"
  },
  {
    id: "product-80",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196313/portfolio/Product/compressed_39.jpg",
    alt: "Product Photography 80",
    category: "Product"
  },
  {
    id: "product-81",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196315/portfolio/Product/compressed_4.jpg",
    alt: "Product Photography 81",
    category: "Product"
  },
  {
    id: "product-82",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196319/portfolio/Product/compressed_40.jpg",
    alt: "Product Photography 82",
    category: "Product"
  },
  {
    id: "product-83",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196322/portfolio/Product/compressed_59.jpg",
    alt: "Product Photography 83",
    category: "Product"
  },
  {
    id: "product-84",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196325/portfolio/Product/compressed_60.jpg",
    alt: "Product Photography 84",
    category: "Product"
  },
  {
    id: "product-85",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196327/portfolio/Product/compressed_61.jpg",
    alt: "Product Photography 85",
    category: "Product"
  },
  {
    id: "product-86",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196329/portfolio/Product/compressed_62.jpg",
    alt: "Product Photography 86",
    category: "Product"
  },
  {
    id: "product-87",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196331/portfolio/Product/compressed_64.jpg",
    alt: "Product Photography 87",
    category: "Product"
  },
  {
    id: "product-88",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196334/portfolio/Product/compressed_66.jpg",
    alt: "Product Photography 88",
    category: "Product"
  },
  {
    id: "product-89",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196336/portfolio/Product/compressed_67.jpg",
    alt: "Product Photography 89",
    category: "Product"
  },
  {
    id: "product-90",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196339/portfolio/Product/compressed_68.jpg",
    alt: "Product Photography 90",
    category: "Product"
  },
  {
    id: "product-91",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196342/portfolio/Product/compressed_69.jpg",
    alt: "Product Photography 91",
    category: "Product"
  },
  {
    id: "product-92",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196344/portfolio/Product/compressed_72.jpg",
    alt: "Product Photography 92",
    category: "Product"
  },
  {
    id: "product-93",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196346/portfolio/Product/compressed_73.jpg",
    alt: "Product Photography 93",
    category: "Product"
  },
  {
    id: "product-94",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196349/portfolio/Product/compressed_76.jpg",
    alt: "Product Photography 94",
    category: "Product"
  },
  {
    id: "product-95",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196351/portfolio/Product/compressed_77.jpg",
    alt: "Product Photography 95",
    category: "Product"
  },
  {
    id: "product-96",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196353/portfolio/Product/compressed_78.jpg",
    alt: "Product Photography 96",
    category: "Product"
  },
  {
    id: "product-97",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196355/portfolio/Product/compressed_79.jpg",
    alt: "Product Photography 97",
    category: "Product"
  },
  {
    id: "product-98",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196357/portfolio/Product/compressed_8.jpg",
    alt: "Product Photography 98",
    category: "Product"
  },
  {
    id: "product-99",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196359/portfolio/Product/compressed_81.jpg",
    alt: "Product Photography 99",
    category: "Product"
  },
  {
    id: "product-100",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196360/portfolio/Product/compressed_82.jpg",
    alt: "Product Photography 100",
    category: "Product"
  },
  {
    id: "product-101",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196362/portfolio/Product/compressed_83.jpg",
    alt: "Product Photography 101",
    category: "Product"
  },
  {
    id: "product-102",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755196364/portfolio/Product/compressed_85.jpg",
    alt: "Product Photography 102",
    category: "Product"
  }
];


const ecommerceImages: ImageData[] = [
  {
    id: "ecommerce-1",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760057/portfolio/Ecommerce/1.jpg",
    alt: "Ecommerce Photography 1",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-2",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760086/portfolio/Ecommerce/10.jpg",
    alt: "Ecommerce Photography 2",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-3",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760133/portfolio/Ecommerce/100.jpg",
    alt: "Ecommerce Photography 3",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-4",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760219/portfolio/Ecommerce/101.jpg",
    alt: "Ecommerce Photography 4",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-5",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760281/portfolio/Ecommerce/102.jpg",
    alt: "Ecommerce Photography 5",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-6",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760290/portfolio/Ecommerce/103.jpg",
    alt: "Ecommerce Photography 6",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-7",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760353/portfolio/Ecommerce/104.jpg",
    alt: "Ecommerce Photography 7",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-8",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760395/portfolio/Ecommerce/105.jpg",
    alt: "Ecommerce Photography 8",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-9",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760420/portfolio/Ecommerce/106.jpg",
    alt: "Ecommerce Photography 9",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-10",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760437/portfolio/Ecommerce/107.jpg",
    alt: "Ecommerce Photography 10",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-11",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760455/portfolio/Ecommerce/108.jpg",
    alt: "Ecommerce Photography 11",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-12",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760498/portfolio/Ecommerce/109.jpg",
    alt: "Ecommerce Photography 12",
    category: "Ecommerce",
  },
  // New entries start here
  {
    id: "ecommerce-13",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760536/portfolio/Ecommerce/11.jpg",
    alt: "Ecommerce Photography 11",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-14",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760604/portfolio/Ecommerce/110.jpg",
    alt: "Ecommerce Photography 110",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-15",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760958/portfolio/Ecommerce/14.jpg",
    alt: "Ecommerce Photography 14",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-16",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754760987/portfolio/Ecommerce/15.jpg",
    alt: "Ecommerce Photography 15",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-17",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761028/portfolio/Ecommerce/16.jpg",
    alt: "Ecommerce Photography 16",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-18",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761059/portfolio/Ecommerce/17.jpg",
    alt: "Ecommerce Photography 17",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-19",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761072/portfolio/Ecommerce/18.jpg",
    alt: "Ecommerce Photography 18",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-20",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761094/portfolio/Ecommerce/19.jpg",
    alt: "Ecommerce Photography 19",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-21",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761113/portfolio/Ecommerce/2.jpg",
    alt: "Ecommerce Photography 2",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-22",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761129/portfolio/Ecommerce/20.jpg",
    alt: "Ecommerce Photography 20",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-23",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761236/portfolio/Ecommerce/22.jpg",
    alt: "Ecommerce Photography 22",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-24",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761256/portfolio/Ecommerce/23.jpg",
    alt: "Ecommerce Photography 23",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-25",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761305/portfolio/Ecommerce/25.jpg",
    alt: "Ecommerce Photography 25",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-26",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761361/portfolio/Ecommerce/26.jpg",
    alt: "Ecommerce Photography 26",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-27",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761436/portfolio/Ecommerce/28.jpg",
    alt: "Ecommerce Photography 28",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-28",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761439/portfolio/Ecommerce/29.jpg",
    alt: "Ecommerce Photography 29",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-29",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761469/portfolio/Ecommerce/3.jpg",
    alt: "Ecommerce Photography 3",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-30",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761483/portfolio/Ecommerce/30.jpg",
    alt: "Ecommerce Photography 30",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-31",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761495/portfolio/Ecommerce/31.jpg",
    alt: "Ecommerce Photography 31",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-32",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761517/portfolio/Ecommerce/32.jpg",
    alt: "Ecommerce Photography 32",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-33",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761538/portfolio/Ecommerce/34.jpg",
    alt: "Ecommerce Photography 34",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-34",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761559/portfolio/Ecommerce/36.jpg",
    alt: "Ecommerce Photography 36",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-35",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761566/portfolio/Ecommerce/37.jpg",
    alt: "Ecommerce Photography 37",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-36",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761585/portfolio/Ecommerce/39.jpg",
    alt: "Ecommerce Photography 39",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-37",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_1600,q_auto,f_auto/v1754761591/portfolio/Ecommerce/4.jpg",
    alt: "Ecommerce Photography 4",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-38",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761595/portfolio/Ecommerce/40.jpg",
    alt: "Ecommerce Photography 40",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-39",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761604/portfolio/Ecommerce/41.jpg",
    alt: "Ecommerce Photography 41",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-40",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761623/portfolio/Ecommerce/43.jpg",
    alt: "Ecommerce Photography 43",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-41",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761632/portfolio/Ecommerce/44.jpg",
    alt: "Ecommerce Photography 44",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-42",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761650/portfolio/Ecommerce/45.jpg",
    alt: "Ecommerce Photography 45",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-43",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761705/portfolio/Ecommerce/47.jpg",
    alt: "Ecommerce Photography 47",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-44",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761731/portfolio/Ecommerce/48.jpg",
    alt: "Ecommerce Photography 48",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-45",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761762/portfolio/Ecommerce/49.jpg",
    alt: "Ecommerce Photography 49",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-46",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761773/portfolio/Ecommerce/5.jpg",
    alt: "Ecommerce Photography 5",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-47",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761899/portfolio/Ecommerce/52.jpg",
    alt: "Ecommerce Photography 52",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-48",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761924/portfolio/Ecommerce/53.jpg",
    alt: "Ecommerce Photography 53",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-49",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761970/portfolio/Ecommerce/54.jpg",
    alt: "Ecommerce Photography 54",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-50",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754761998/portfolio/Ecommerce/55.jpg",
    alt: "Ecommerce Photography 55",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-51",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805128/portfolio/Ecommerce/56.jpg",
    alt: "Ecommerce Photography 56",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-52",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754773918/portfolio/Ecommerce/57.jpg",
    alt: "Ecommerce Photography 57",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-53",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805132/portfolio/Ecommerce/58.jpg",
    alt: "Ecommerce Photography 58",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-54",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805149/portfolio/Ecommerce/6.jpg",
    alt: "Ecommerce Photography 6",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-55",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805204/portfolio/Ecommerce/61.jpg",
    alt: "Ecommerce Photography 61",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-56",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805205/portfolio/Ecommerce/62.jpg",
    alt: "Ecommerce Photography 62",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-57",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805207/portfolio/Ecommerce/63.jpg",
    alt: "Ecommerce Photography 63",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-58",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805210/portfolio/Ecommerce/64.jpg",
    alt: "Ecommerce Photography 64",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-59",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805215/portfolio/Ecommerce/65.jpg",
    alt: "Ecommerce Photography 65",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-60",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805218/portfolio/Ecommerce/66.jpg",
    alt: "Ecommerce Photography 66",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-61",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805225/portfolio/Ecommerce/67.jpg",
    alt: "Ecommerce Photography 67",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-62",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805230/portfolio/Ecommerce/68.jpg",
    alt: "Ecommerce Photography 68",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-63",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805242/portfolio/Ecommerce/7.jpg",
    alt: "Ecommerce Photography 7",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-64",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754804046/portfolio/Ecommerce/72.jpg",
    alt: "Ecommerce Photography 72",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-65",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805286/portfolio/Ecommerce/74.jpg",
    alt: "Ecommerce Photography 74",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-66",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805290/portfolio/Ecommerce/75.jpg",
    alt: "Ecommerce Photography 75",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-67",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805297/portfolio/Ecommerce/76.jpg",
    alt: "Ecommerce Photography 76",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-68",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805300/portfolio/Ecommerce/77.jpg",
    alt: "Ecommerce Photography 77",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-69",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805305/portfolio/Ecommerce/78.jpg",
    alt: "Ecommerce Photography 78",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-70",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805320/portfolio/Ecommerce/8.jpg",
    alt: "Ecommerce Photography 8",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-71",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805325/portfolio/Ecommerce/80.jpg",
    alt: "Ecommerce Photography 80",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-72",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805332/portfolio/Ecommerce/81.jpg",
    alt: "Ecommerce Photography 81",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-73",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805336/portfolio/Ecommerce/82.jpg",
    alt: "Ecommerce Photography 82",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-74",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805349/portfolio/Ecommerce/84.jpg",
    alt: "Ecommerce Photography 84",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-75",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805355/portfolio/Ecommerce/85.jpg",
    alt: "Ecommerce Photography 85",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-76",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805360/portfolio/Ecommerce/86.jpg",
    alt: "Ecommerce Photography 86",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-77",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805367/portfolio/Ecommerce/87.jpg",
    alt: "Ecommerce Photography 87",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-78",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805372/portfolio/Ecommerce/88.jpg",
    alt: "Ecommerce Photography 88",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-79",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805377/portfolio/Ecommerce/89.jpg",
    alt: "Ecommerce Photography 89",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-80",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805383/portfolio/Ecommerce/9.jpg",
    alt: "Ecommerce Photography 9",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-81",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805386/portfolio/Ecommerce/90.jpg",
    alt: "Ecommerce Photography 90",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-82",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805391/portfolio/Ecommerce/91.jpg",
    alt: "Ecommerce Photography 91",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-83",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805394/portfolio/Ecommerce/92.jpg",
    alt: "Ecommerce Photography 92",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-84",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805397/portfolio/Ecommerce/93.jpg",
    alt: "Ecommerce Photography 93",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-85",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805403/portfolio/Ecommerce/94.jpg",
    alt: "Ecommerce Photography 94",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-86",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805408/portfolio/Ecommerce/95.jpg",
    alt: "Ecommerce Photography 95",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-87",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805410/portfolio/Ecommerce/96.jpg",
    alt: "Ecommerce Photography 96",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-88",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805413/portfolio/Ecommerce/97.jpg",
    alt: "Ecommerce Photography 97",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-89",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754805421/portfolio/Ecommerce/98.jpg",
    alt: "Ecommerce Photography 98",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-90",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1754677215/portfolio/Ecommerce/99.jpg",
    alt: "Ecommerce Photography 99",
    category: "Ecommerce",
  },
  {
    id: "ecommerce-91",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195697/portfolio/Ecommerce/compressed_12.jpg",
    alt: "Ecommerce Photography 91",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-92",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195699/portfolio/Ecommerce/compressed_13.jpg",
    alt: "Ecommerce Photography 92",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-93",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195700/portfolio/Ecommerce/compressed_21.jpg",
    alt: "Ecommerce Photography 93",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-94",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195702/portfolio/Ecommerce/compressed_27.jpg",
    alt: "Ecommerce Photography 94",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-95",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195705/portfolio/Ecommerce/compressed_33.jpg",
    alt: "Ecommerce Photography 95",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-96",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195708/portfolio/Ecommerce/compressed_35.jpg",
    alt: "Ecommerce Photography 96",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-97",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195710/portfolio/Ecommerce/compressed_38.jpg",
    alt: "Ecommerce Photography 97",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-98",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195713/portfolio/Ecommerce/compressed_42.jpg",
    alt: "Ecommerce Photography 98",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-99",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195715/portfolio/Ecommerce/compressed_46.jpg",
    alt: "Ecommerce Photography 99",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-100",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195718/portfolio/Ecommerce/compressed_50.jpg",
    alt: "Ecommerce Photography 100",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-101",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195720/portfolio/Ecommerce/compressed_51.jpg",
    alt: "Ecommerce Photography 101",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-102",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195724/portfolio/Ecommerce/compressed_59.jpg",
    alt: "Ecommerce Photography 102",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-103",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195728/portfolio/Ecommerce/compressed_60.jpg",
    alt: "Ecommerce Photography 103",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-104",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195731/portfolio/Ecommerce/compressed_69.jpg",
    alt: "Ecommerce Photography 104",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-105",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195734/portfolio/Ecommerce/compressed_70.jpg",
    alt: "Ecommerce Photography 105",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-106",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195736/portfolio/Ecommerce/compressed_71.jpg",
    alt: "Ecommerce Photography 106",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-107",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195738/portfolio/Ecommerce/compressed_73.jpg",
    alt: "Ecommerce Photography 107",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-108",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195740/portfolio/Ecommerce/compressed_79.jpg",
    alt: "Ecommerce Photography 108",
    category: "Ecommerce"
  },
  {
    id: "ecommerce-109",
    url: "https://res.cloudinary.com/dnr47u7im/image/upload/w_800,q_auto,f_auto/v1755195742/portfolio/Ecommerce/compressed_83.jpg",
    alt: "Ecommerce Photography 109",
    category: "Ecommerce"
  }
];

export const portfolioData: PortfolioData = {
  Fashion: fashionImages,
  Product: productImages,
  Ecommerce: ecommerceImages,
};
export const navigationItems: NavigationItem[] = [
  { name: "Fashion", path: "/fashion", category: "Fashion" },
  { name: "Product", path: "/product", category: "Product" },
  { name: "Ecommerce", path: "/ecommerce", category: "Ecommerce" },
  { name: "Contact", path: "/contact" },
];

export const contactInfo = {
  email: "pearlcreation0@gmail.com",
  phone: "+91 7827764837",
  instagram: "@Pearl.hdcreation",
  services: [
    "Product Photography",
    "Fashion & Portrait",
    "E-commerce Shoots",
    "Brand Photography",
    "Creative Direction",
  ],
};
