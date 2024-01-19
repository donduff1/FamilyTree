
export class FamilyMember {
    id: number;
    name: string;
    birthDate: string;
    birthPlace: string;
    motherName: string;
    fatherName: string;
    deathDate: string;
    deathPlace: string;
    children: FamilyMember[];
  
    constructor() {
      this.children = [];
    }
  }
  