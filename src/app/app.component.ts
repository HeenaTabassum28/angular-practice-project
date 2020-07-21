import { Component } from '@angular/core';
import { UserData } from 'src/shared/userdata.service';
import { Department } from 'src/shared/department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ud : UserData, private dept : Department){
    this.userData = this.ud.loadUsers();
    this.department = dept.loadDepartment();
  }
  title = 'my-dream-app';
  myCity = 'Pune'
  userData
  department

  profilePic = "https://www.google.com/search?q=profile+picture&rlz=1C1CHZL_enIN716IN716&sxsrf=ALeKk01Tw0yjuFcMoKLk3OpyacEJRIsbtQ:1594611150329&tbm=isch&source=iu&ictx=1&fir=5LJjGvPfcDwFSM%252Cb5C9ViMmmhpq-M%252C_&vet=1&usg=AI4_-kSXkfh2P_2iLEGWncLk3N8zBQ3Nrw&sa=X&ved=2ahUKEwjkga65pcnqAhXs4HMBHYRBD0kQ9QEwAnoECAoQNA&biw=1366&bih=625#imgrc=5LJjGvPfcDwFSM";
  callMe(){
    alert("Call me is invoked");
    console.log("Call me is invoked");
  }
}
