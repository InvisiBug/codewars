export class Kata {
  static disemvowel(str: string): string {
    return str.replace(/[aeiou]/gi, "");
  }
}

console.log(Kata.disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
