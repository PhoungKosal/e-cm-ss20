import {Inter, Roboto_Mono, Poppins, Koulen} from "next/font/google";

const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: "500",
});
const koulen = Koulen({
    subsets: ["khmer"],
    weight: "400",
});

const inter = Inter({
    subsets: ["latin"],
    weight: "500",
});

const fonts = {roboto_mono, poppins, koulen, inter};

export default fonts;
