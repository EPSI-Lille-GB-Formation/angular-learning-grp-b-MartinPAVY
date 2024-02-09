export class Page {
  constructor(
    public id: number,
    public bookId: number,
    public title: string,
    public content: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {
  }
}
