const APIManager = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(entries => entries.json())
    },

    postJournalEntries: (entry) => {
        return fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(entry),
    })
    },

    deleteJournalEntry: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE",
        })
    }

}

export default APIManager