import { Component, OnInit } from '@angular/core';
import { Album } from "../models";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AlbumsService } from "../albums.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Добавляем RouterModule, чтобы работали routerLink
    FormsModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  newAlbum: Album = { userId: 11, id: 101, title: '' };
  loaded: boolean = false;

  constructor(private albumService: AlbumsService) {}

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album);
      alert('Album created');
      this.newAlbum = { userId: 11, id: 101, title: '' };
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((p) => p.id !== id);
    });
  }
}
