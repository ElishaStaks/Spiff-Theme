
// runs this function once all DOM has been loaded
window.onload = function(){

    // variable declaration for query selectors
    const input = document.querySelector("#tntsearch-wrapper > input[type=text]");
    const clearSearch = document.querySelector(".tntsearch-clear");

    // listen event which checks if the user has typed anything into the search bar
    input.addEventListener("input", function() {
        // Show result form
        document.querySelector(".tntsearch-results").style.visibility = "visible";

        // checks if there are 0 inputs in the search bar
        if (input.value === 0){
            // hide overlay
            document.querySelector("#overlay").style.visibility = "hidden";
        }
        else {
            // show overlay
            document.querySelector("#overlay").style.visibility = "visible";
        }

        // listen event which checks if user has clicked on the clear input button
        clearSearch.addEventListener("click", function()  {
            document.querySelector("#overlay").style.visibility = "hidden";
        });
    });
};