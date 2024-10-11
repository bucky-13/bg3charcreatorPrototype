import { IAbility } from '../models/IAbilitiy';

export const abilities: IAbility[] = [
  {
    abilityId: 'abi01',
    name: 'Strength',
    desc: 'Muscles and physical power. Affects your effectiveness with melee weapons. Also determines how far you can jump and how much you can carry.',
    iconSrc: '../icons/abilities/str_icon.png',
  },
  {
    abilityId: 'abi02',
    name: 'Dexterity',
    desc: 'Agility, reflexes, and balance. Affects your effectiveness with ranged and Finesse weapons. Also affects your Initiative and Armour Class.',
    iconSrc: '../icons/abilities/dex_icon.png',
  },
  {
    abilityId: 'abi03',
    name: 'Constitution',
    desc: 'Stamina and physical endurance. Affects your hit point maximum',
    iconSrc: '../icons/abilities/con_icon.png',
  },
  {
    abilityId: 'abi04',
    name: 'Intelligence',
    desc: 'Memory and mental power. Improves spellcasting for wizards',
    iconSrc: '../icons/abilities/int_icon.png',
  },
  {
    abilityId: 'abi05',
    name: 'Wisdom',
    desc: 'Senses and intuition. Improves spellcasting for clerics, druids, and rangers.',
    iconSrc: '../icons/abilities/wis_icon.png',
  },
  {
    abilityId: 'abi06',
    name: 'Charisma',
    desc: 'Force of personality. Improves spellcasting for bards, paladins, sorcerers, and warlocks. Influences traders prices.',
    iconSrc: '../icons/abilities/cha_icon.png',
  },
];
