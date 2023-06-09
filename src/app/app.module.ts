import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UsersCardComponent } from './users-card/users-card.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersCardComponent,
    
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
