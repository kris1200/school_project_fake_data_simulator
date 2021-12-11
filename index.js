var input_yes = document.getElementById("input_yes");
var input_no = document.getElementById("input_no");
var input_tulsi = document.getElementById("input_tulsi");
var input_neem = document.getElementById("input_neem");
var input_aloevera = document.getElementById("input_aloevera");
var input_ashwagandha = document.getElementById("input_ashwagandha");
var input_other = document.getElementById("input_other");
var generate = document.getElementById("generate");
var all_inputs = document.getElementsByClassName("form-control");
var form = document.getElementById("form");
var tbody = document.getElementById("tbody");
var table_container_parent = document.getElementById("table_container_parent");
/* ===================================|| Functions ||=================================== */

/* Function to suffle the array elements */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}
/* *********************************************** */

/* Function to generate fake data */
function generateFakeData(input_yes_value, input_no_value, input_tulsi_value, input_neem_value, input_aloevera_value, input_ashwagandha_value, input_other_value) {
    /******************************/
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let col5 = [];
    /*******************************/

    /* **************************** */
    let sr_numbers = [];
    let dates = [];
    let yeses = [];
    let nos = [];
    let tulsis = [];
    let neems = [];
    let aloeveras = [];
    let ashwagandhas = [];
    let others = [];
    let no_answers = [];
    /* **************************** */

    /* ****************************** */
    let shuffled_names = shuffle(names);
    /* ****************************** */

    /* ************************************** */
    for (let i = 1; i <= 100; i++) {
        sr_numbers.push(i.toString());
    }
    let a = 0;
    for (let i = 1; i <= 100; i++) {
        dates.push(fakes_dates[a]);
        if (i && (i % 20 === 0)) {
            console.log(i);
            a++;
        }
    }
    for (let i = 0; i < input_yes_value; i++) {
        yeses.push("Yes");
    }
    for (let i = 0; i < input_no_value; i++) {
        nos.push("No");
    }
    for (let i = 0; i < input_tulsi_value; i++) {
        tulsis.push("Tulsi");
    }
    for (let i = 0; i < input_neem_value; i++) {
        neems.push("Neem");
    }

    for (let i = 0; i < input_aloevera_value; i++) {
        aloeveras.push("Aloevera");
    }

    for (let i = 0; i < input_ashwagandha_value; i++) {
        ashwagandhas.push("Ashwagandha");
    }

    for (let i = 0; i < input_other_value; i++) {
        others.push("Other");
    }
    for (let i = 0; i < input_no_value; i++) {
        no_answers.push("No answer");
    }
    /* ************************************** */

    /* ****************************** */
    let random_responses = yeses.concat(nos);
    random_responses = shuffle(random_responses);
    console.log(random_responses);
    /* ****************************** */

    /* ****************************** */
    let last_column = tulsis.concat(neems).concat(aloeveras).concat(ashwagandhas).concat(others);
    last_column = shuffle(last_column);
    /* ****************************** */



    /* ************************************** */
    sr_numbers.forEach((sr_number) => {
        col1.push(sr_number);
    });
    dates.forEach((date) => {
        col2.push(date);
    });
    shuffled_names.forEach((name) => {
        col3.push(name);
    });
    random_responses.forEach((response) => {
        col4.push(response);
    });


    for (let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 100);
        if (col4[i] == "No") {
            col5.push(no_answers[0]);
            no_answers.splice(0, 1);
        } else {
            col5.push(last_column[0]);
            last_column.splice(0, 1);
        }
    }
    /* ************************************** */


    /* ************************************** */
    for (let i = 0; i < 100; i++) {
        let tr = document.createElement("tr");
        let tcol1 = document.createElement("td");
        tcol1.innerHTML = col1[i];
        let tcol2 = document.createElement("td");
        tcol2.innerHTML = col2[i];
        let tcol3 = document.createElement("td");
        tcol3.innerHTML = col3[i];
        let tcol4 = document.createElement("td");
        tcol4.innerHTML = col4[i];
        let tcol5 = document.createElement("td");
        tcol5.innerHTML = col5[i];
        tr.appendChild(tcol1);
        tr.appendChild(tcol2);
        tr.appendChild(tcol3);
        tr.appendChild(tcol4);
        tr.appendChild(tcol5);
        tbody.appendChild(tr);
    }
    /* ************************************** */

}
/* ******************************** */


/* ===================================|| Functions ||=================================== */


form.addEventListener("submit", (event) => {
    event.preventDefault();
    return false;
})

generate.addEventListener("click", () => {
    var input_yes_value = Number(input_yes.value);
    var input_no_value = Number(input_no.value);
    var input_tulsi_value = Number(input_tulsi.value);
    var input_neem_value = Number(input_neem.value);
    var input_aloevera_value = Number(input_aloevera.value);
    var input_ashwagandha_value = Number(input_ashwagandha.value);
    var input_other_value = Number(input_other.value);

    if ((input_yes_value + input_no_value) !== 100) {
        alert("The numbers entered in the first two input fields should add up to 100");
    } else if ((input_tulsi_value + input_neem_value + input_aloevera_value + input_ashwagandha_value + input_other_value) != input_yes_value) {
        console.logbtnExportToCsv((input_tulsi_value + input_neem_value + input_aloevera_value + input_ashwagandha_value + input_other_value));
        console.log(input_yes_value);
        alert(`The numbers entered in the fields "Tulsi", "Neem", "Aloevera", "Ashwagandha", and "Other" should add up to the number entered in the "Yes" input field`);
    } else {
        generateFakeData(input_yes_value, input_no_value, input_tulsi_value, input_neem_value, input_aloevera_value, input_ashwagandha_value, input_other_value);
        tbody.innerHTML = "";
        table_container_parent.classList.remove("d-none");
        btnExportToCsv.classList.remove("d-none");
    }
});
