import "./globals.css";

export const metadata = {
  title: "Cosmic Journeys",
  description: "Blast off into space and discover the secrets of the planets in our solar system. Fun and educational for all ages!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
