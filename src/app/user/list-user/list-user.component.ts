import { Component, OnInit } from '@angular/core';
import { User } from '../../Core/Models/user';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  searchItem!: string;
  categoryFromUrl: string | undefined;
  filteredUsers: User[] = [];
  user: User[] = []; // Define the user property

  constructor(private route: ActivatedRoute, private userS: UserService, private r: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Get the 'category' route parameter from the URL
      this.categoryFromUrl = params['category'];
      this.filterUsersByCategory();
      this.userS.getAllusers().subscribe(data => this.filteredUsers = data); // Assign the result to this.user
      //console.log(this.user); // Log the result
    });
  }

  filterUsersByCategory() {
    if (this.categoryFromUrl) {
      // Filter users by category
      this.filteredUsers = this.user.filter(user => user.accountCategory === this.categoryFromUrl);
    } else {
      // If no category is provided in the URL, show all users
      this.filteredUsers = this.user;
    }
  }

  onDeleteTask(index: String) {
    /* if (index !== -1) {
       this.filteredUsers.splice(index, 1);
     }*/
    console.log(index);
    this.userS.deleteUser(index).subscribe(() => {
      alert('deleted Successfully!')
        ;
    })
  }

}
