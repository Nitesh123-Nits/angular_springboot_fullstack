import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Ensure Router is imported
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../recipe.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router // Make sure Router is injected
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(id)) {
      this.recipeService.getRecipeById(id).subscribe({
        next: (data) => {
          this.recipe = data;
        },
        error: (err) => {
          // console.error('Error fetching recipe', err);
          // Redirect to 404 page on error (e.g., recipe not found)
          this.router.navigate(['/404']); // Correct usage of navigate
        }
      });
    } else {
      // If the id is invalid (not a number), redirect to 404
      this.router.navigate(['/404']);
    }
  }
}
