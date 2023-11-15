import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Core/Models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  add(form: NgForm) {
    if (form.valid) {
      const user: User = {
        id: 0,
        firstName: form.value.fn,
        lastName: form.value.ln,
        birthDate: form.value.birthDate,
        email: form.value.email,
        password: form.value.password,
        profession: form.value.profession,
        picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
        status: '',
        accountCategory: ''
      };

      this.userService.AddUser(user).subscribe(
        () => {
          alert('Added Successfully!');
          this.router.navigate(['mainUser']);
        },
        error => {
          console.error(error);

        }
      );
    }
  }
}