import '@/styles/globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from './common/footer';
import Header from './common/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${geistMono.variable} ${geistSans.variable} min-h-screen`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
