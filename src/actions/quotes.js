// TODO: Create action creators as defined in tests

const addQuote = quote => {
    return { type: "ADD_QUOTE", quote: {...quote, votes: 0}}
}

const removeQuote = quoteId => {
    return { type: "REMOVE_QUOTE", quoteId}
}

const upvoteQuote = quoteId => {
    return { type: "UPVOTE_QUOTE", quoteId}
}

const  downvoteQuote = quoteId => {
    return { type: "DOWNVOTE_QUOTE", quoteId}
}


export {addQuote, removeQuote, upvoteQuote, downvoteQuote }
