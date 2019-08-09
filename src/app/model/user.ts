export class User {
  id: number = 0;
  name: { first: string, last: string } = {
    first: '',
    last: ''
  }
  isActive: boolean = false;
  age: number = 0;
  email: string = '';
  phone: string = '';
}
