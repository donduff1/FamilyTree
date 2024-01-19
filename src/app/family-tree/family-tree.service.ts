import { Injectable } from '@angular/core';
import { FamilyMember } from './family.member.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyTreeService {
  private familyMembers: FamilyMember[] = [];

  getFamilyMembers(): FamilyMember[] {
    return this.familyMembers;
  }

  addFamilyMember(member: FamilyMember): void {
    this.familyMembers.push(member);
  }
}
