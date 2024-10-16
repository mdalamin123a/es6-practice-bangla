const person = {name:'Jack William', age:17, job: 'facebooker', gfName:'Ema Watson', address: 'Kochu Khet', phone:'01845678976', friends:['Tom hancks', 'tom cruise']}

// object destructuring
const {phone, gfName, address, salary} = person;

const complexOject = {
    name: 'abc',
    info:{
        address: 'Kola bagan',
        leader: 'Tiger Leader',
    }
}

const {leader} = complexOject.info;
// console.log(leader);

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);

const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'sharukh khan'];

// array destructuring
const [chotoFriend, nextFriend, ...resetFriends] = friends;
// console.log(chotoFriend, nextFriend, resetFriends);

