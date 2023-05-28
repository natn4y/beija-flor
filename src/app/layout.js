import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: 'Portal Beija-Flor - Chalés em Santuário Ecológico na Chapada dos Veadeiros: silêncio, vegetarianismo e bem estar',
  description: 'Chalés em Santuário Ecológico na Chapada dos Veadeiros: silêncio, vegetarianismo e bem estar',
}

import "./components/Slider/Slider.css";
import Sidebar from './components/SideBar/SideBar';
import { SidebarProvider } from './contexts/SideBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="%PUBLIC_URL%/fonts/CocoGothic.ttf" rel="stylesheet" />
      </Head>
      <body>
        <SidebarProvider>
          <Sidebar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}