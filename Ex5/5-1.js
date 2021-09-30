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



console.log(askTvSerie())
