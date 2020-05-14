import APIManager from "./apiManager.js"
import DomPrinter from "./DOMPrinter.js"

// This is called a "factory function". It builds and returns an object. We don't need to export it, because we only need access to it in this file.

const buildJournalEntryFromForm = () => {
    return {
        date: document.querySelector("#journalDate").value,
        concept: document.querySelector("#journalConcepts").value,
        entry: document.querySelector("#journalEntry").value,
        mood: document.getElementById("journalMood").value
    };
};

const eventListenerObject = {

    saveJournalEvent: () => {
    // create journalEntryObject to post to entries database(entryDate, entryConcept, entryEntry, entryMood)
                    
        const journalEntryObject = buildJournalEntryFromForm();
            //console.log(journalEntryObject);
            
        APIManager
        .postJournalEntries(journalEntryObject)
        .then(DomPrinter.renderJournalEntries) 
            
            //call method to clear DOM and reprint all journal entries
    },

    deleteJournalEvent: (event) => {
        const primaryKey = event.target.id.split("-")[2];
        //console.log("This is the primaryKey in deleteJournalEvent", primaryKey)
        APIManager
        .deleteJournalEntry(primaryKey)
        .then(DomPrinter.renderJournalEntries);
    }

}

export default eventListenerObject;