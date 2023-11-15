import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Core/Models/user';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  user!: User;
  updateForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  update() {
    console.log('Updating user with data:', this.updateForm.value);
    this.userService.updateUser(this.updateForm.value).subscribe(
      (response) => {
        console.log('Update successful:', response);
        alert('User Updated Successfully!');
        this.router.navigate(['mainUser']);
      },
      (error) => {
        console.error('Update failed:', error);
      }
    );
  }

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this.route.paramMap.subscribe(
      (paramMap) => {
        this.id = Number(paramMap.get('id'));
        this.userService.getUserById(this.id).subscribe(
          (data: User) => {

            this.user = data;
            console.log('User data:', data),
              this.updateForm = new FormGroup({
                id: new FormControl(data.id),
                fn: new FormControl(data.firstName),
                ln: new FormControl(data.lastName),
                birthDate: new FormControl(data.birthDate),
                email: new FormControl(data.email),
                password: new FormControl(data.password),
                profession: new FormControl(data.profession),
              });
          },

          (error) => {
            console.error('Error fetching user by ID:', error);
          }
        );
      }
    );
  }
}
