import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Каталог с пагинацией',
  description: 'Список товаров из БД с постраничной навигацией',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}