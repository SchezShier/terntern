import { Component, OnInit} from '@angular/core';
import { CatFactService } from '../cat-fact.service';
import { CatBreed } from '../models/cat-breed.model'; 



@Component({
  selector: 'app-folder',
  templateUrl: 'folder.page.html',
  styleUrls: ['folder.page.scss'],
})
export class FolderPage implements OnInit{
  breeds: CatBreed[] = [];
  currentPage: number = 1;
  pageSize: number = 5; 
  searchTerm: string = '';
  selectedFilter: string = 'breed'; // Default filter option

  constructor(private catFactService: CatFactService) {}

  ngOnInit() {
    this.loadBreedsAndFilter(this.searchTerm);
  }

  
  loadNextPage() {
    this.currentPage++;
    this.loadBreedsAndFilter(this.searchTerm);
  }
  
  
  loadBreedsAndFilter(searchTerm: string) {
    this.catFactService.getBreeds(this.currentPage, this.pageSize).subscribe(
      (response: any) => {
        if (response.data && Array.isArray(response.data)) {
          this.breeds = response.data; 
          this.filterDisplayedBreeds(searchTerm); 
        } else {
          console.error('Invalid API response format:', response);
        }
      },
      error => {
        console.error('API error:', error);
      }
    );
  }
  
  
  filterDisplayedBreeds(searchTerm: string = '') {
    if (searchTerm.trim() === '') {
      this.breeds = [...this.breeds];
    } else {
      const filteredBreeds = this.breeds.filter(breed =>
        (breed[this.selectedFilter as keyof CatBreed] as string)
          .toLowerCase()
          .startsWith(searchTerm.toLowerCase())
      );
      this.breeds = filteredBreeds;
    }
  }
  
  goToFirstPage() {
    this.currentPage = 1; // Reset current page to 1
    this.loadBreedsAndFilter(this.searchTerm); // Reload the first page of breeds
  }
  
  onSearchChange(event: any) {
    this.searchTerm = event.target.value; 
    this.loadBreedsAndFilter(this.searchTerm);
  }
  
}
