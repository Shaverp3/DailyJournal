
const JournalEntry = {

    makeJournalEntryComponent: (date,concept,entry,mood,btn) => {
    // Create your own HTML structure for a journal entry
    //console.log(date,concept,entry,mood,btn)
    return `
            <div class="single-entry">
                <h1>${date}</h1>
                <h3>${concept}</h3>
                <p>${entry}</p>
                <h4>I feel ${mood}</h4>
                <button id="delete-btn-${btn}">Delete</button> 
            </div>`
            
    }
    
}

export default JournalEntry