import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { OverviewComponent } from './helpers/overview/overview.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { MulticastComponent } from './multicast/multicast.component';
import { HistoryComponent } from './helpers/history/history.component';
import { HigherorderComponent } from './higherorder/higherorder.component';
import { GameScoreComponent } from './game-score/game-score.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ChatComponent } from './chat/chat.component';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { CreatingComponent } from './creating/creating.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ExercisesRoutingModule
  ],
  declarations: [
    OverviewComponent,
    FromeventComponent,
    MulticastComponent,
    HistoryComponent,
    HigherorderComponent,
    GameScoreComponent,
    ErrorHandlingComponent,
    ChatComponent,
    ChatWindowComponent,
    UnsubscribeComponent,
    DragdropComponent,
    CreatingComponent
  ]
})
export class ExercisesModule { }
