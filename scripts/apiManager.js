const APIManager = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(entries => entries.json())
    }
}

export default APIManager