import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Haris Laeeq — Full-Stack Developer',
  description:
    'Full-Stack Web Developer specializing in MERN stack and Next.js ecosystem. Building scalable, production-ready web applications.',
  keywords: [
    'Haris Laeeq',
    'Full-Stack Developer',
    'MERN Stack',
    'Next.js',
    'React',
    'Node.js',
    'Web Developer Pakistan',
  ],
  authors: [{ name: 'Haris Laeeq' }],
  openGraph: {
    title: 'Haris Laeeq — Full-Stack Developer',
    description:
      'Full-Stack Web Developer specializing in MERN stack and Next.js ecosystem.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
