import "./globals.css";
import localFont from "next/font/local";

const origoPro = localFont({
  src: [
    {
      path: "../public/assets/font/OrigoProRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/font/OrigoProMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/font/OrigoProSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/font/OrigoProBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/font/OrigoProExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Tyrads",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${origoPro.className} flex`}>{children}</body>
    </html>
  );
}
