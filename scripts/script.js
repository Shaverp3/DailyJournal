import DomPrinter from './DOMPrinter.js'
import APIManager from './APIManager.js'

/*    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    call the method within DOMPrinter
    to get the data and display it.
*/
DomPrinter.renderJournalEntries()
//     .then((myParsedRestaurants) => {
//          printAllRestaurants(myParsedRestaurants)
// });

document.querySelector("#journalSubmitbtn").addEventListener("click", function () {
    let entryDate = document.querySelector("#journalDate").value
    let entryConcept = document.querySelector("#journalConcepts").value
    let entryEntry = document.querySelector("#journalEntry").value
    let entryMood = document.getElementById("journalMood").value

    console.log(entryDate, entryConcept, entryEntry, entryMood)

    const journalEntryObject = {
        date: entryDate,
        concept: entryConcept,
        entry: entryEntry,
        mood: entryMood
    }

    fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntryObject)
    }).then(function () {
        document.querySelector(".entryLog").innerHTML = ""
        APIManager.getJournalEntries()
            .then((parsedEntries) => {
                parsedEntries.forEach(entry => {
                    document.querySelector(".entryLog").innerHTML +=
                        JournalEntry.makeJournalEntryComponent(entry.date, entry.concept, entry.entry, entry.mood)
                })

            })
    })
});





