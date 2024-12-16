import { Component, inject } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromiseService } from './services/promise.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ViewContainerRefExample';
  promiseService = inject(PromiseService)
  // constructor(private promiseService: PromiseService) {}

  ngOnInit() {
    (async () => {
      await Promise.allSettled([
        this.promiseService.getUsers(),
        this.promiseService.getUsersById(),
        this.promiseService.delUser()
      ]).then((val ) => {
        console.log(val);
      })
    })();
  }

  async performApi() {
    // const user = await this.promiseService.getUsers().then();
    // const user1 = await this.promiseService.getUsersById();
    // const user2 =  await this.promiseService.delUser();
    // return [user,user1,user2];

    return await Promise.allSettled([
      this.promiseService.getUsers(),
      this.promiseService.getUsersById(),
      this.promiseService.delUser()
    ]).then((val) => {

    })
  }
}
