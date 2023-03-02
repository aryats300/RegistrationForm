import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string = localStorage.getItem('email') || '';
  password: string = localStorage.getItem('password') || '';
  private User = [
    { email: 'admin@gmail.com', password: 'admin' },
  ];
  constructor() { }


authUser(user: { username: string, password: string }): boolean {
  const authenticatedUser = this.User.find(u => u.email === user.username && u.password === user.password);
 

  if (authenticatedUser) {
    localStorage.setItem('adminUser', JSON.stringify(this.email));
    return true;
  }
  return false;
}



logout() {
  localStorage.removeItem('User');
}
}
