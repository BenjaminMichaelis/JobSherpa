export { ToDo };
class ToDo {
  id: string;
  title: string;
  date: Date;
  type: string;

  constructor(id: string, title: string, date: Date, type: string) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.type = type;
  }
}
