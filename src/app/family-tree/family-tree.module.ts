
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FamilyTreeComponent } from './family-tree.component';
import { FamilyTreeService } from './family-tree.service';

@NgModule({
  declarations: [
    FamilyTreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [FamilyTreeService],
  exports: [FamilyTreeComponent] // Exporting the component if needed in other modules
})
export class FamilyTreeModule { }
