import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';

interface User{
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  birthDate: string;
}


@Component({
  selector: 'app-demousers',
  templateUrl: './demousers.component.html',
  styleUrls: ['./demousers.component.scss']
})
export class DemousersComponent {
//  users!: User[];
users: any
 constructor(private httpService: HttpService) { }
 ngOnInit() {
  console.log("/////////////////")
	this.httpService.getUsers().subscribe(
	(response) => { console.log(response)
    this.users= response;
   });
}

}
