import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'http://localhost:8081/api/recipes'; // Adjust the URL as necessary

  constructor(private http: HttpClient) {}

  // Fetch all recipes
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Fetch a single recipe by ID
  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Add a new recipe
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl, recipe).pipe(
      catchError(this.handleError)
    );
  }

   // Update a new recipe
   updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(this.baseUrl, recipe).pipe(
      catchError(this.handleError)
    );
  }


  // Error handling
  private handleError(error: HttpErrorResponse) {
    // console.error(`Server error: ${error.message}`);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
