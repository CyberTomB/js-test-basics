//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
   str = str.replace(/ /g, '')
   str = str.replace('n', 'N')
   return str
}
