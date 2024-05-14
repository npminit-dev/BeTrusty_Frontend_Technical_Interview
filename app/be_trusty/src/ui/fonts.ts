import { Inter, Poppins, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const popp = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', "600"] })
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500'] })

export default {
  inter, popp, roboto
}