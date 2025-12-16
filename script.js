async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;
    const outputText = document.getElementById("outputText");

    // Validation
    if (inputText.trim() === "") {
        alert("Please enter some text to translate");
        return;
    }

    outputText.value = "Translating...";

    try {
        const response = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                q: inputText,
                source: sourceLang,
                target: targetLang,
                format: "text"
            })
        });

        const data = await response.json();
        outputText.value = data.translatedText;

    } catch (error) {
        outputText.value = "Error occurred! Please try again.";
        console.error(error);
    }
}
