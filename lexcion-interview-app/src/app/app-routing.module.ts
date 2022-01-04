import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditInterviewComponent } from './edit-interview/edit-interview.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'details/:id/', component: DetailsComponent },
  { path: 'create-interview', component: PostDetailComponent },
  { path: 'edit-interview/:id/', component: EditInterviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
