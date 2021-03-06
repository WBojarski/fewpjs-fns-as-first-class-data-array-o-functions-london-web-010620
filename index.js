function wakeDog(a, b) {
    return `Wake ${a} the ${b}`
}

function leashDog(a, b) {
    return `Leash ${a} the ${b}`
}

function walkToPark(a, b) {
    return `Walk to the park with ${a} the ${b}`
}

function throwFrisbee(a, b) {
    return `Throw the frisbee for ${a} the ${b}`
}

function walkHome (a, b) {
    return `Walk home with ${a} the ${b}`
}

function unleashDog(a, b) {
   return `Unleash ${a} the ${b}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(a, b) {
    const messages = []
    for(let i = 0; i < routine.length; i++) {
       messages.push(routine[i](a, b))
    }
    return messages

}