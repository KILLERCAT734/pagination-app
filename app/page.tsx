import Link from 'next/link';
import { getProducts } from '@/db/queries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Package } from 'lucide-react';

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp.page) || 1);
  const pageSize = 6;

  const { products, pages, total } = await getProducts(page, pageSize);

  // Формируем видимые номера страниц вокруг текущей
  const visiblePages: number[] = [];
  for (let i = page - 2; i <= page + 2; i++) {
    if (i > 0 && i <= pages) {
      visiblePages.push(i);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-orange-500 rounded-xl">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Каталог</h1>
          </div>
          <p className="text-slate-600">
            Всего товаров: {total} | Страница {page} из {pages}
          </p>
        </div>

        {/* Список товаров */}
        <div className="space-y-4 mb-10">
          {products.map((p) => (
            <Card key={p.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <span className="text-xl font-bold text-orange-500 whitespace-nowrap">
                    {p.price.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Пагинация */}
        {pages > 1 && (
          <Pagination>
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious href={`/?page=${page - 1}`} />
                </PaginationItem>
              )}

              {visiblePages.map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    href={`/?page=${p}`}
                    isActive={p === page}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {page < pages && (
                <PaginationItem>
                  <PaginationNext href={`/?page=${page + 1}`} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </main>
  );
}