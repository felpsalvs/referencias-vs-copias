const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log(players, team);
// isso que acabei de criar é uma referência de matriz, o array original

// no entanto, o que acontece quando atualizamos esse array?

// nós editamos o array original também!

// por que? É porque isso é uma referência de matriz, não uma cópia de matriz. Ambos apontam para a mesma matriz!

// então, como corrigimos isso? Em vez disso, tiramos uma cópia!

const team2 = players.slice();

// ou cria um novo array e concate o antigo em:
const team3 = [].concat(players);

// ou usamos o novo ES6 Spread:
const team4 = [...players];
team4[3] = 'heee haww';
console.log(team4);

const team5 = Array.from(players);

// agora quando atualizamos, o original não é alterado
// A mesma coisa vale para objetos, digamos que temos um objeto person:
const person = {
    name: 'Wes Bos',
    age: 80
};

// e achamos que fazemos uma cópia:
// const captain = person;
// captain.number = 99;

// como fazemos uma cópia em vez disso?
const cap2 = Object.assign({}, person, { number: 99, age: 12});
console.log(cap2);

// Esperamos o objeto ...spread
// const cap3 = {...person};
// Coisas a serem observadas - isso tem apenas 1 nível de profundidade - tanto para Arrays quanto para Objetos. O lodash tem um método cloneDeep, mas você deve pensar duas vezes antes de usá-lo.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));