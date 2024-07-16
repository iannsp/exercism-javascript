//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this._scores= scores;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this.scores.slice().pop();
  }

  get personalBest() {
    return this.scores.slice().sort((a,b) => (a==b)?0:(a<b)?-1:1).pop();
  }

  get personalTopThree() {
    return this.scores.slice().sort(
            (a,b) => (a==b)?0
            :(a<b)?-1:1)
            .reverse().slice(0,Math.min(3, this.scores.length));
  }
}
