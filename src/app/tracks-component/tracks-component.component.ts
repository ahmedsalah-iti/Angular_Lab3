import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracks-component',
  imports: [FormsModule],
  templateUrl: './tracks-component.component.html',
  styleUrl: './tracks-component.component.css'
})
export class TracksComponentComponent {
  selectedTrack:string = "All";
  Tracks: Track[] = [
    { id: 1, name: "OpenSource" },
    { id: 2, name: "PWD" },
    { id: 3, name: "UI/UX" },
    { id: 4, name: "Java" }

  ];

  Users: User[] = [
    {id:1,name:"Ahmed Salah",trackName:"OpenSource"},
    {id:2,name:"Hamdy Salah",trackName:"OpenSource"},
    {id:3,name:"Nada Salah",trackName:"OpenSource"},
    {id:4,name:"Abdullah Sayed",trackName:"OpenSource"},
    {id:5,name:"Arwa Sayed",trackName:"OpenSource"},
    {id:6,name:"Maha Galal",trackName:"OpenSource"},
    {id:7,name:"Felo Adel",trackName:"OpenSource"},
    {id:8,name:"Mostafa Hosny",trackName:"OpenSource"},
    {id:9,name:"Ehab Rashid",trackName:"OpenSource"},
    {id:10,name:"Mo Abood",trackName:"OpenSource"},
    {id:11,name:"Santy",trackName:"PWD"},
    {id:12,name:"Yousry",trackName:"PWD"},
    {id:13,name:"Abdeltawaab",trackName:"PWD"},
    {id:14,name:"Eslam",trackName:"PWD"},
    {id:15,name:"John",trackName:"UI/UX"},
    {id:16,name:"Youssef",trackName:"UI/UX"},
    {id:17,name:"Hadeer",trackName:"UI/UX"}
  ];

  filteredUsers():User[]{
    if (!this.selectedTrack || this.selectedTrack == "All") return this.Users;
    return this.Users.filter((user)=>{
      return user.trackName == this.selectedTrack;
    })
  }

getTrackColorByName(trackName: string): string {
  switch (trackName) {
    case "OpenSource":
      return "info";
    case "PWD":
      return "success";
    case "UI/UX":
      return "warning";
    default:
      return "danger";
  }
}

}
type User = {
  id:number,
  name:string,
  trackName:string
}
type Track = {
  id: number,
  name: string,
}