import eventListenerObject from './eventListeners.js'
import DomPrinter from './DOMPrinter.js'
import APIManager from './APIManager.js'


/*    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    call the method within DOMPrinter
    to get the data and display it.
*/
DomPrinter.renderJournalEntries()


//listen for click event to Add a new journal entry to the database and to the DOM
document.querySelector("#journalSubmitbtn").addEventListener("click", (eventListenerObject.saveJournalEvent)
    //Get values of new journal entry from DOM

    //call method to post the new entry
    .then(APIManager.postJournalEntries(journalEntryObject)
        .then(function () {
            document.querySelector(".entryLog").innerHTML = ""
            //call method to clear DOM and reprint all journal entries
            DomPrinter.renderJournalEntries()

        })

)
)


//This is for mood filtering and is not complete
const selectedRadioBtn = document.querySelectorAll('input[type=radio]');
console.log(selectedRadioBtn)
let selectedMood = ""
selectedRadioBtn.forEach(btn => {
    if (btn.checked) {
        selectedMood = RadioNodeList.value
        console.log(selectedMood)
    } else {

    }
});








