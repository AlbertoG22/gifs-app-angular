import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [ ...this._tagsHistory ];
  }

  private organizeHistory(tag: string) {
    // como es case sensitive, convertimos todo a minúsculas para mejor manejo de dato
    tag = tag.toLowerCase();

    // borrar tag si ya estaba en la lista
    if( this._tagsHistory.includes(tag) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }

    // añadir tag al inicio
    this._tagsHistory.unshift(tag);

    // limitar el historial a 10
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag( tag: string ): void {
    if( tag.length === 0 ) return;

    this.organizeHistory(tag);
  }

}
