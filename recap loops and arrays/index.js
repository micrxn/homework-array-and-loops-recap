//exercise one

let myMovies = ["Movie 1", "Movie 2", true, false, 2, 5, 7]
let exerciseOne = document.getElementById("exerciseOne")
function favMovies(movies){
    for(let i = 0; i < movies.length; i++){
        if(typeof(movies[i])  === "string" ){
        // console.log(`${i + 1}. ${movies[i]}`)
        // exerciseOne.innerHTML += `${i + 1}. ${movies[i]} \n`
        exerciseOne.innerHTML += `<ul>`
        exerciseOne.innerHTML += `<li>${i + 1}. ${movies[i]}</li>`
        exerciseOne.innerHTML += `</ul>`
        }
    }
}
favMovies(myMovies)

console.log("---------------------------------------------------");
//EXERCISE TWO
let myNumbers = [2, 5, 4, 10, true, false, ""]
let exerciseTwo = document.getElementById("exerciseTwo")
let emptyArray = []
function multiplyNumbers(numbers, multiplier){
    let result = []
    if(numbers.length != 0 && typeof(multiplier) === "number"){
        for(let i = 0; i < numbers.length; i++){
            if(typeof(numbers[i]) === "number"){
                result.push(numbers[i] * multiplier)
            }
        }
        console.log(result)
    } else {
        console.log(`invalid array or multiplier`)
    }
}
    
// console.log(multiplyNumbers(myNumbers, 2))
// console.log(multiplyNumbers(emptyArray, "asd"))
multiplyNumbers(myNumbers, 2)
multiplyNumbers(emptyArray, 2)
multiplyNumbers(emptyArray, "2")
multiplyNumbers(myNumbers, "2")

console.log("---------------------------------------------------");
//EXERCISE THREE
function sumTwoArrays(arrayOne, arrayTwo){
    let resultArrayOne = 0
    let resultArrayTwo = 0    
    if(arrayOne.length != 0 && arrayTwo.length != 0){
        for(let i = 0; i < arrayOne.length; i++){
            if(typeof(arrayOne[i]) === "number"){
                resultArrayOne += arrayOne[i]                
            }            
        }
        for(let i = 0; i < arrayTwo.length; i++){
            if(typeof(arrayTwo[i]) === "number"){
                resultArrayTwo += arrayTwo[i]
            }
        }
    }    
    let result = resultArrayOne + resultArrayTwo
    return result
}

console.log(sumTwoArrays([1, 2, 3, " ", true], [1, 2, 3, " ", true]))
