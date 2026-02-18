const input = document.getElementById("searchInput")

input.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        const query = input.value.trim()
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`
        window.location.href = googleSearchUrl
    }
})