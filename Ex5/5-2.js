const readlineSync = require("readline-sync");

const show = {}

/**
 * ask user their favorite tv show , production year and cast
 * @author Frédéric
 * @returns tvshow details
 */
 function askTvSerie() {
    show.name = readlineSync.question('Name your favorite TV show: ')
    show.year = readlineSync.question('Year of production of the show:')
    show.cast = []
        let casting = true
        while (casting){
         answer = readlineSync.question('Add the cast, type finished when the whole cas is in: ')
         
         if (answer != 'finished'){
         show.cast.push(answer)
         }
         else casting = false
        }
        return show
}


function randomizeCast(arr){
    let return_arr = [];
    for (let i = 0; i < arr.length; i++) {
        var random_int = Math.round(Math.random()*(arr.length -1));
        return_arr.push(arr[random_int]);
        
     }
     return return_arr;
}


/* function randomizeCast(tvSerie) {
    let return_arr = [];
    for (let i = 0; i<tvSerie.length; i++) {
        let nb = Math.round(Math.random()*(tvSerie.length -1));
       return_arr.push(tvSerie.cast[nb]);
    }
    return return_arr
}  */
console.log (askTvSerie(show))    

