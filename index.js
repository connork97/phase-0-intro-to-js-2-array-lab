// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

const destructivelyPrependCat = () => { cats.unshift("Bob") }

const destructivelyRemoveLastCat = () => { cats.pop(-1)}

function destructivelyRemoveFirstCat() { cats.shift(0, 1) }

const appendCat = () => [...cats, "Broom"]

const prependCat = () => ["Arnold", ...cats]

const removeLastCat = () => cats.slice(0, -1)

const removeFirstCat = () => cats.slice(1)