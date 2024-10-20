import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Define routes
export const routes: Routes = [
  { path: '', component: RecipeListComponent },  // Default route to list recipes
  { path: 'recipe/:id', component: RecipeDetailComponent },  // Route for viewing a recipe's details
  { path: 'add-recipe', component: RecipeFormComponent }, 
  { path: '404', component: NotFoundComponent }, // Route for adding a new recipe
  { path: '**', redirectTo: '/404' }  // Wildcard route for handling undefined paths
];

@NgModule({
  imports: [
    // Updated to include scroll position restoration, in case of long pages
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',  // Restore scroll position on navigation
      anchorScrolling: 'enabled',  // Enable anchor scrolling
      enableTracing: false,  // Set to true for debugging routing issues
      useHash: false  // Set to true if your server does not support `history.pushState`
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
