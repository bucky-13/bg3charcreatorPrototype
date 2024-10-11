import { EEquipment } from '../database/dbEquipmentProficiencies';
import { ESkills } from '../database/dbSkills';
import { ISpecialSkills } from './ISpecialSkills';
import { ISpell } from './ISpell';

export interface ISubClass {
  subClassId: string;
  name: string;
  desc: string;
  imgUrl: string;
  skillProficiencies?: ESkills[];
  skillProficiencySlots?: number;
  armorProficiencies?: EEquipment[];
  weaponProficiencies?: EEquipment[];
  spells?: ISpell[];
  specialSkills: ISpecialSkills[];
}
