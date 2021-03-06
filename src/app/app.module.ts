import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AllTargetsComponent } from './all-targets/all-targets.component';
import { HistoriqueComponent } from './historique/historique.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';
import {MatCardModule} from '@angular/material/card';
import { SingularTargetComponent } from './singular-target/singular-target.component';
import {MatIconModule} from '@angular/material/icon';
import { SearchQuoteComponent } from './search-quote/search-quote.component';
import {ReactiveFormsModule} from "@angular/forms";


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AllTargetsComponent,
    HistoriqueComponent,
    FeedbackDialogComponent,
    SingularTargetComponent,
    SearchQuoteComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FeedbackDialogComponent]

})
export class AppModule { }
