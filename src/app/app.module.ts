import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostsService} from './posts.service';
import {PostsComponent} from './posts/posts.component';
import {MatButtonModule, MatCardModule, MatDividerModule} from '@angular/material';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule
    ],
    providers: [PostsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
