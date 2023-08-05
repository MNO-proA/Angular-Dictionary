import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DefinitionComponent } from './definition/definition.component';
import { ThesaurusComponent } from './thesaurus/thesaurus.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'definition/:search', component: DefinitionComponent },
  { path: 'thesaurus', component: ThesaurusComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
