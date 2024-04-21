import { Component } from '@angular/core';

export interface user{
  id: string
  name: string
  city: string
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  userList: user[] = [
    {
      id: '1',
      name: "user1",
      city: "indore"
    },
    {
      id: '2',
      name: "user1",
      city: "indore"
    },
    {
      id: '3',
      name: "user1",
      city: "indore"
    },
    {
      id: '4',
      name: "user1",
      city: "indore"
    },
    {
      id: '5',
      name: "user1",
      city: "indore"
    }
  ]

  count: number=0;
  public increaseCount(count: any){
    console.log("count",count)
    this.count = count
  }
}
