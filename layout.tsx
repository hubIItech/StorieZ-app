export const metadata = {
  title: 'StorieZ',
  description: 'Mask Your Input · Mute Your Outcome',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
