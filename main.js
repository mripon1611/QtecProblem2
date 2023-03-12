// import readline module
const str = "tadadattaetadadadafa";
const pattern = "dada";

let lenStr = str.length;
let lenPattern = pattern.length;
let count = 0;

if(lenPattern < lenStr){
    for(let i = 0; i < (lenStr-lenPattern); i++){
        if(str[i] == pattern[0]){
            let j;
            for(j = 1; j < lenPattern; j++){
                if(str[i+j] != pattern[j]){
                    break;
                }
            }
            if(j==lenPattern){
                count += 1;
            }
        }
    }
}
console.log(`Here the pattern '${pattern}' appears in text ('${str}') ${count} times`);