import "@/styles/globals.css";

export const metadata = {
  title: "Web Scraper",
  description: "yerrr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Sidebar */}

        <main>
          {/* Header */}
          {children}
        </main>
      </body>
    </html>
  );
}
