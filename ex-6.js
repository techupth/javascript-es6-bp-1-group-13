function findUndefined (height) {
    return height ?? "Height is not defined"
}

let height = undefined;
let result = findUndefined (height)

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
