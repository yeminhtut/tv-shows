export function getTruncatedText(fullText, charLimit) {
    return fullText.length > charLimit ? `${fullText.substr(0, charLimit - 3)}...` : fullText
}
