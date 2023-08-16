import { Component, OnInit } from '@angular/core';
import { CatFactService } from '../cat-fact.service';
import { CatBreed } from '../models/cat-breed.model';

@Component({
  selector: 'app-cat-listing',
  templateUrl: './cat-listing.page.html',
  styleUrls: ['./cat-listing.page.scss'],
})
export class CatListingPage implements OnInit {
  breeds: CatBreed[] = [];
  currentPage: number = 1;
  pageSize: number = 4;
  selectedFilter: string = 'breed';

  constructor(private catFactService: CatFactService) {}

  ngOnInit() {
    this.loadFilteredBreeds();
  }

  loadFilteredBreeds() {
    this.catFactService.getBreeds(this.currentPage, this.pageSize)
      .subscribe((data: CatBreed[]) => {
        if (this.selectedFilter === 'breed') {
          this.breeds = this.breeds.concat(data);
        } else {
          this.breeds = data;
        }
      });
  }

  loadNextPage() {
    this.currentPage++;
    if (this.selectedFilter === 'breed') {
      this.loadFilteredBreeds();
    } else {
      this.loadNextBreeds(); // Load the next page based on the selected filter
    }
  }

  onFilterChange() {
    this.currentPage = 1;
    this.loadFilteredBreeds();
  }

  loadNextBreeds() {
    this.catFactService.getBreeds(this.currentPage, this.pageSize)
      .subscribe((data: CatBreed[]) => {
        this.breeds = this.breeds.concat(data);
      });
  }
  
}
