const eventListenerObject = {

    saveJournalEvent: function(){
        let entryDate = document.querySelector("#journalDate").value
        let entryConcept = document.querySelector("#journalConcepts").value
        let entryEntry = document.querySelector("#journalEntry").value
        let entryMood = document.getElementById("journalMood").value
        // create journalEntryObject to post to entries database(entryDate, entryConcept, entryEntry, entryMood)
                    
        const journalEntryObject = {
            date: entryDate,
            concept: entryConcept,
            entry: entryEntry,
            mood: entryMood
        }

        return (journalEntryObject)
        

    }
}

export default eventListenerObject;