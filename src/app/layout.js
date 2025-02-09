import "./globals.css";

export const metadata = {
  title: "Tools",
  description: "Created by Wendel Frota",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
