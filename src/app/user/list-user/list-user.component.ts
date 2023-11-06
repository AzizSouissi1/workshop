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
  user: User[] = [];

  constructor(private route: ActivatedRoute, private userS: UserService, private r: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryFromUrl = params['category'];
      this.filterUsersByCategory();
      this.userS.getAllusers().subscribe(data => this.filteredUsers = data);
    });
  }

  filterUsersByCategory() {
    if (this.categoryFromUrl) {
      this.filteredUsers = this.user.filter(user => user.accountCategory === this.categoryFromUrl);
    } else {
      this.filteredUsers = this.user;
    }
  }

  onDeleteTask(index: String) {
    console.log(index);
    this.userS.deleteUser(index).subscribe(() => {
      alert('deleted Successfully!')
        ;
    })
  }

}
