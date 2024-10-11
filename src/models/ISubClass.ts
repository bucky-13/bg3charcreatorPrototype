import { EEquipment } from '../database/dbEquipmentProficiencies';
import { ESkills } from '../database/dbSkills';
import { ISpell } from './ISpell';

export interface ICharClass {
  subClassId: string;
  name: string;
  desc: string;
  imgUrl: string;
  skillProficiencies?: ESkills[];
  skillProficiencySlots?: number;
  armorProficiencies?: EEquipment[];
  weaponProficiencies?: EEquipment[];
  spells: ISpell[];
  specialSkills: ISpecialSkills[];
}

export interface ISpecialSkills {
  sSkillsId: string;
  atLevel: number;
  desc: string;
}
