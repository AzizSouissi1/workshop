import { Component, OnInit } from '@angular/core';
import { User } from '../../Core/Models/user';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private userS: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryFromUrl = params['category'];
      this.filterUsersByCategory();
      this.userS.getAllusers().subscribe(data => {
        this.user = data;
        this.filteredUsers = this.user;
      });
    });
  }

  filterUsersByCategory() {
    if (this.categoryFromUrl) {
      this.filteredUsers = this.user.filter(user => user.accountCategory === this.categoryFromUrl);
    } else {
      this.filteredUsers = this.user;
    }
  }

  onDeleteTask(id: number) {
    const idString = id.toString();
    this.userS.deleteUser(idString).subscribe(() => {
      alert('Deleted Successfully!');

      this.userS.getAllusers().subscribe(data => {
        this.user = data;
        this.filteredUsers = this.user;
      });
    });
  }
}
