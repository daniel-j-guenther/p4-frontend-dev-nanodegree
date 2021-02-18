function runHandler(event) {
    event.preventDefault()    
    // AmazingAI - Step 1: Pass userLink to validator.js
    let userLink = document.getElementById('website-url').value
    console.log("::: New Link Submitted :::")
    Client.runValidator(userLink)
    // AmazingAI - Step 7: Use feedback dynamically to update our UI. 
    fetch('/meaning-cloud')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('nlp-feedback').innerHTML = "We found some really interesting facts:\n";
        document.getElementById('nlp-subjectivity').innerHTML = "1 - The article is: " + res.subjectivity.toLowerCase();
        document.getElementById('nlp-confidence').innerHTML = "2 - The author is: " + body.confidence.toLowerCase() + "% Confident on this topic.";
        document.getElementById('nlp-agreement').innerHTML = "3 - The author is in " + res.agreement.toLowerCase() + " with the topic.";
    })
}

export { runHandler }

/*  AW - GET Route II: Async fetch data from our app endpoint 
    const updateUI = async () => {
        const req = await fetch('/add-entry');
        try {
            const appData = await req.json();
            // dynamically fetches data generated by users and weather api from endpoint and dynamcially updates UI.
            
        } catch (error) {
            console.log("error", error);
        }
    };*/