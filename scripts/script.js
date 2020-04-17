const journalEntry = {
    date: "04/12/2020",
    concept: "DOM Building",
    entry: "Had a hard time with this but finally got it!!",
    mood: "Tired"

}
const journalEntry2 = {
    date: "04/01/2020",
    concept: "Arrays",
    entry: "Oh, boy! Arrays!!",
    mood: "flat"

}
const journalEntry3 = {
    date: "04/15/2020",
    concept: "Tax Day",
    entry: "We are under quarantine, so we have until July 15th",
    mood: "Happy"

}

const journalEntries = []

const createJournalArray = () => {

    journalEntries.push(journalEntry)
    journalEntries.push(journalEntry2)
    journalEntries.push(journalEntry3)

}
createJournalArray()
console.log(journalEntries)

// const retrieveJournalEntry = (date,concept,entry,mood) =>{
//     date=document.querySelector.journalDate.name
//     console.log(date)
//  }

const makeJournalEntryComponent = (journalEntry) => {
    return `
    <section class="single-entry">
        <h1>${journalEntry.date}</h1>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <h4>I feel ${journalEntry.mood}</h4>
     </section>`
}

const renderJournalEntries = (journalEntries) => {
  for(singleEntry of journalEntries){
      let domEnter = makeJournalEntryComponent(singleEntry)
      document.querySelector(".entryLog").innerHTML += domEnter
 }

//  for (let i = 0; i < journalEntries.length; i++) {
//      let journalEntryComponent = makeJournalEntryComponent(journalEntries[i])
//      document.querySelector(".entryLog").innerHTML += journalEntryComponent
//  }
}

renderJournalEntries(journalEntries)

