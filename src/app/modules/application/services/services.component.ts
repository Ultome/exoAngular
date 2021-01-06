import { Component, OnInit } from '@angular/core';
import { Song } from './song/song';
import { SongService } from './song/song.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  songs: Song[];

  constructor(private songService : SongService) { }

  ngOnInit(): void {
    this.getSongs()
  }

  getSongs() {
    this.songs = this.songService.getSongs();
  }

}
