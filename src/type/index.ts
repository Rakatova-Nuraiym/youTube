export interface todo {
  todo: [];
  name: string;
  _id: number;
  link: string;
  type: string;
}

export default interface Todo {
  todo: todo[];
  type: string;
}
