import { db } from '../db/db';
import { products } from '../db/schema';

async function seed() {
  await db.insert(products).values([
    {
      title: 'Ноутбук',
      price: 100000,
      description: 'Мощный рабочий ноутбук',
    },
    {
      title: 'Смартфон',
      price: 50000,
      description: 'Современный телефон',
    },
    {
      title: 'Наушники',
      price: 10000,
      description: 'Беспроводные наушники',
    },
    {
      title: 'Клавиатура',
      price: 7000,
      description: 'Механическая клавиатура',
    },
    {
      title: 'Мышь',
      price: 3000,
      description: 'Игровая мышь',
    },
    {
      title: 'Монитор 27"',
      price: 25000,
      description: '27 дюймов, 144 Гц, IPS',
    },
    {
      title: 'Планшет',
      price: 40000,
      description: 'Для работы и развлечений',
    },
    {
      title: 'Веб-камера',
      price: 5000,
      description: 'Full HD 1080p',
    },
    {
      title: 'Микрофон',
      price: 8000,
      description: 'USB-микрофон для стримов',
    },
    {
      title: 'Колонки',
      price: 12000,
      description: 'Стерео колонки 2.0',
    },
    {
      title: 'Внешний SSD',
      price: 9000,
      description: '1 ТБ, USB 3.2',
    },
    {
      title: 'Игровое кресло',
      price: 20000,
      description: 'Эргономичное кресло',
    },
    {
      title: 'Роутер',
      price: 6000,
      description: 'Wi-Fi 6, двухдиапазонный',
    },
    {
      title: 'Принтер',
      price: 15000,
      description: 'Лазерный, ч/б',
    },
    {
      title: 'Флешка 128 ГБ',
      price: 2000,
      description: 'USB 3.0, металлический корпус',
    },
  ]);

  console.log('✅ Данные добавлены в БД');
}

seed();