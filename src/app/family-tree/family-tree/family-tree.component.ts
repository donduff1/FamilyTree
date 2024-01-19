
import { Component } from '@angular/core';
import { FamilyMember } from './family.member.model';
import { FamilyTreeService } from '../family-tree.service';


@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent {
  familyMembers: FamilyMember[] = [];
  newMember: FamilyMember = new FamilyMember();

  constructor(private familyTreeService: FamilyTreeServicee) {
    this.familyMembers = this.familyTreeService.getFamilyMembers();
  }

  addFamilyMember(): void {
    this.familyTreeService.addFamilyMember(this.newMember);
    this.newMember = new FamilyMember();
  }
}
