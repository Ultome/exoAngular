import { Injectable } from '@angular/core';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs: Song[];
  constructor() { }

  getSongs() {
    this.songs = [
      { color: 'light', date: '13/01/2017', artist: 'Ed Sheeran', title: 'Shape of You' },
      { color: 'primary', date: '28/04/2017', artist: 'Luis Fonsi feat. Daddy Yankee', title: 'Despacito' },
      { color: 'light', date: '28/07/2017', artist: 'Niska', title: 'Réseaux' },
      { color: 'info', date: '13/10/2017', artist: 'Kalash feat. Damso', title: 'Mwaka Moon' },
      { color: 'light', date: '08/12/2017', artist: 'Booba', title: 'Petite fille' },
      { color: 'primary', date: '15/12/2017', artist: 'Johnny Hallyday', title: 'Je te promets' },
      { color: 'light', date: '22/12/2017', artist: 'Ed Sheeran', title: 'Perfect	4' },
      { color: 'info', date: '19/01/2018', artist: 'Camila Cabello feat. Young Thug', title: 'Havana' },
      { color: 'light', date: '02/02/2018', artist: 'Vald', title: 'Désaccordé' },
      { color: 'primary', date: '23/03/2018', artist: 'Lartiste feat. Caroliina', title: 'Mafiosa' },
    ];

  }

}
