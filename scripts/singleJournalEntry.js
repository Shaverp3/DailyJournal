
const JournalEntry = {

    makeJournalEntryComponent (date,concept,entry,mood,btn) {
    // Create your own HTML structure for a journal entry
    return `
            <section class="single-entry">
                <h1>${date}</h1>
                <h3>${concept}</h3>
                <p>${entry}</p>
                <h4>I feel ${mood}</h4>
                <button id="delete-btn-${btn}">Delete</button> 
            </section>`
    }
}

export default JournalEntry