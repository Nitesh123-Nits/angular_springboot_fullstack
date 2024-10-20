import { Component} from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../recipe.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
  recipe: Recipe = { title: '', description: '', ingredients: '', instructions: '' };

  constructor(private recipeService: RecipeService) {}

  onSubmit(): void {
    if(this.recipe.title==="") return;
    this.recipeService.addRecipe(this.recipe).subscribe(response => {
      console.log('Recipe added', response);
      // Optionally reset the form or navigate to another page
    });
  }
}

