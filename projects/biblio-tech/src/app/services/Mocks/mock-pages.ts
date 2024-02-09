import {Page} from "../Entity/page";

export const PAGES: Page[] = [
  {
    id: 1,
    title: 'Introduction',
    content: 'Introduction content...',
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-05T00:00:00Z'),
    bookId: 1
  }, {
    id: 2,
    title: 'Chapter 1',
    content: 'Chapter 1 content...',
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-05T00:00:00Z'),
    bookId: 1
  }, {
    id: 3,
    title: 'Introduction',
    content: 'Introduction content...',
    createdAt: new Date('2021-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-05T00:00:00Z'),
    bookId: 2
  },
]
