const t = [1, -1, 3]

t.push(5)

// console.log(t.length)
console.log(t)
let i = 3
const mapped_t = t.map(value => {
    i++
    return value * i
}
)

console.log(mapped_t)

