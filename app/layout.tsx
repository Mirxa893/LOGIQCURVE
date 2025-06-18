export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-white text-black dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
