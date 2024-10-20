import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../recipe.model';
import { NgIf } from '@angular/common'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [NgIf,CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }
}
