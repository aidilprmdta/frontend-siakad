import "./globals.css";

export const metadata = {
  title: "SIAKAD",
  description: "Sistem Informasi Akademik - Praktikum Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}