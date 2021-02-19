function runHandler(event) {
    event.preventDefault()    
    let userLink = document.getElementById('website-url').value.toString();
    console.log("::: New Link Submitted :::");
    Client.runValidator(userLink)
    .then(Client.runAnalysis())
    .then(updateUI());
}

/*  AmazingAI - Client side GET Route */
const updateUI = async () => {
    const req = await fetch('/analysis')
    try {
        const findings = await req.json();
        console.log("MeaningCloud Data: ", findings);
        // Dynamically update our UI with MeaningCloud Sentiment Analysis.
        document.getElementById('nlp-feedback').innerHTML = "We found some really interesting facts:\n";
        document.getElementById('nlp-subjectivity').innerHTML = "1 - The article is: " + findings.subjectivity;
        document.getElementById('nlp-confidence').innerHTML = "2 - The author is: " + findings.confidence + "% Confident on this topic.";
        document.getElementById('nlp-agreement').innerHTML = "3 - The author is in " + findings.agreement + " with the topic.";
    } 
    catch (error) {
        console.log("error", error);
    }
}

export { runHandler }
