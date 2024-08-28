import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
    userName:string="John Doe";
    userEmail:string="John@abc.com"
    userAge:number=12
    changeUserName()
    {
      this.userName="Jane Doe";
    }
    resetForm(){
      this.userName="John Doe";
      this.userEmail="John@abc.com",
      this.userAge=12;
    }
}
