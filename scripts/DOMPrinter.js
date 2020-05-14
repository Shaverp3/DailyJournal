import APIManager from './apiManager.js'
import JournalEntry from './singleJournalEntry.js'

const DomPrinter = {

    renderJournalEntries: () => {
        // method from APIManager that accesses the data goes here
    APIManager.getJournalEntries() 
            // Then you need to use the returned data
        .then(parsedEntries => {
          document.querySelector(".entryLog").innerHTML = ""
              parsedEntries.forEach(entry => {
                //    if (entry.date) {
                document.querySelector(".entryLog").innerHTML +=
                    JournalEntry.makeJournalEntryComponent(entry.date, entry.concept, entry.entry, entry.mood, entry.id)
                 }
              )
        }
     )
    }
}

export default DomPrinter
