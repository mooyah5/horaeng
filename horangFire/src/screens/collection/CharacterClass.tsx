export interface AnimalInfomation {
  id: number;
  user_id: string;
  character_id: 1 | 2 | 3 | 4 | 5;
  created_date: string;
  completed_date: string;
  nickname: string;
  characterLevel: string;
  status: boolean;
}

interface Direction {
  base: number;
  height: number;
}

interface Range {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface CharacterInfo {
  id: number;
  character_id: 1 | 2 | 3 | 4 | 5;
  created_date: string;
  completed_date: string;
  nickname: string;
  image: any;

  direction: Direction;
  velocity: number;
  range: Range;

  x: number;
  y: number;
}

const CHARACTER_IMAGE = [
  null,
  require('../../assets/image/character/72ppi/tiger3.png'),
  require('../../assets/image/character/72ppi/tiger3.png'),
  require('../../assets/image/character/72ppi/tiger3.png'),
  require('../../assets/image/character/72ppi/tiger3.png'),
  require('../../assets/image/character/72ppi/tiger3.png'),
];

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

class Character implements CharacterInfo {
  id: number;
  character_id: 1 | 2 | 3 | 4 | 5;
  created_date: string;
  completed_date: string;
  nickname: string;
  image: any;

  direction: Direction;
  velocity: number;
  range: Range;

  x: number;
  y: number;

  constructor(character: AnimalInfomation, range: Range) {
    this.id = character.id;
    this.character_id = character.character_id;
    this.created_date = character.created_date;
    this.completed_date = character.completed_date;
    this.nickname = character.nickname;

    this.image = CHARACTER_IMAGE[this.character_id];

    this.direction = {base: Math.random(), height: Math.random()};
    this.velocity = Math.max(Math.random(), 0.5);
    this.range = range;

    this.x = getRandomInt(range.right);
    this.y = getRandomInt(range.bottom);
  }
}

export default Character;
