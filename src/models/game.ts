export class Game {
  public players: string[] = ["Karwan","Daxwaz","Dalia"];
  public stack: string[] = [];
  public playedCard: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.stack.push(`ace_${i}.png`);
      this.stack.push(`clubs_${i}.png`);
      this.stack.push(`diamonds_${i}.png`);
      this.stack.push(`hearts_${i}.png`);
    }

    this.shuffle(this.stack);
  }

   shuffle(array: string[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
