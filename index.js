// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push(name)
return cats
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(name) {
    cats.shift()
    return cats
}

function appendCat(name) {
    let copyOfCats = [...cats, name]
    return copyOfCats
}

function prependCat(name) {
    let copyOfCats2 = [name, ...cats]
    return copyOfCats2
}

function removeLastCat(name) {
    let noLastCat = cats.slice(0, cats.length -1)
    return noLastCat
}

function removeFirstCat(name) {
    let noFirstCat = cats.slice(1)
    return noFirstCat
}



