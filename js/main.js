
window.onload = function(){
    const form = document.querySelector('#tntsearch-wrapper > input[type=text]');

    form.addEventListener('input', (e) => {
        const clear = document.querySelector('.tntsearch-clear');

        e.target = document.querySelector('.tntsearch-results').style.visibility = "visible";

        if (form.value == 0){
            e.target = document.querySelector('#overlay').style.visibility = "hidden";
        }
        else {
            e.target = document.querySelector('#overlay').style.visibility = "visible";
        }

        clear.addEventListener('click', (e) =>  {
            e.target = document.querySelector('#overlay').style.visibility = "hidden";
        });
    });
}