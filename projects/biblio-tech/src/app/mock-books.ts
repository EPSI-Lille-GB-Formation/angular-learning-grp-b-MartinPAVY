// mock-books.ts
import {Book} from "./book";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "The Catcher in the Rye",
    resume: "A classic novel about the struggles of a teenage boy named Holden Caulfield.",
    image: "catcher-in-the-rye.jpg",
    createdAt: new Date("2024-01-31T08:00:00"),
    updatedAt: new Date("2024-01-31T08:30:00"),
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    resume: "Harper Lee's masterpiece that explores racial injustice in the American South.",
    image: "to-kill-a-mockingbird.jpg",
    createdAt: new Date("2024-01-31T09:15:00"),
    updatedAt: new Date("2024-01-31T09:45:00"),
  },
  {
    id: 3,
    title: "1984",
    resume: "George Orwell's dystopian novel depicting a totalitarian society.",
    image: "1984.jpg",
    createdAt: new Date("2024-01-31T10:30:00"),
    updatedAt: new Date("2024-01-31T11:00:00"),
  },
  {
    id: 4,
    title: "The Great Gatsby",
    resume: "F. Scott Fitzgerald's iconic novel set in the roaring twenties, exploring themes of wealth, love, and the American Dream.",
    image: "the-great-gatsby.jpg",
    createdAt: new Date("2024-02-02T08:45:00"),
    updatedAt: new Date("2024-02-02T09:15:00"),
  },
  {
    id: 5,
    title: "One Hundred Years of Solitude",
    resume: "Gabriel Garcia Marquez's magical realist novel following the Buendía family in the fictional town of Macondo.",
    image: "one-hundred-years-of-solitude.jpg",
    createdAt: new Date("2024-02-02T09:45:00"),
    updatedAt: new Date("2024-02-02T10:15:00"),
  },
  {
    id: 6,
    title: "Brave New World",
    resume: "Aldous Huxley's dystopian novel depicting a future society where technology and conditioning control every aspect of life.",
    image: "brave-new-world.jpg",
    createdAt: new Date("2024-02-02T10:45:00"),
    updatedAt: new Date("2024-02-02T11:15:00"),
  },

];
