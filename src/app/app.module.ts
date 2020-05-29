import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
  
import { AppComponent }  from './app.component';
import { BorderCardDirective } from './border-card-directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';
  
@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule // pour l'ordre de déclaration des routes !
    ],
    declarations: [
        AppComponent,
        BorderCardDirective,
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonTypeColorPipe,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }