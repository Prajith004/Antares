// //search query
// var searchQuery="";

//     const searchForm = document.getElementById('searchForm');
//     const searchInput = document.getElementById('searchInput');

//     // Add event listener for form submission
//     searchForm.addEventListener('submit', function (event) {
//         // Prevent the default form submission
//         event.preventDefault();

//         // Get the search query
//         searchQuery = searchInput.value;
//     });



// //Fact check using Gemini
// import { GoogleGenerativeAI } from "@google/generative-ai";
// // Fetch your API_KEY
// const API_KEY = "AIzaSyCCiDZhm3JvYF_KPD7Q_7l7abihnX9P2MQ";
// // Access your API key (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(API_KEY);
// async function run() {
//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const paragraph = "Raju has 3 brothers. he loves his siblings . he enjoys playing with them.he also has 2 sisters.";
//     // const statement = "Raju's younger sibling is 12 years older";
//     // const statement = document.getElementById("search").value;
//     const statement=searchQuery;
//     const condition = "just refer the given paragraph and say if the given statement is True or false or Not sure and give a one line explanation ";
//     const prompt = condition + " .paragraph:" + paragraph + " Statement:" + statement;
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     console.log(text);
//     document.getElementById("display").innerHTML = ` ${text}`;
// }
// run();




// //Change theme (Dark/Light)
// // document.addEventListener('DOMContentLoaded', function () {
// //     const themeToggle = document.getElementById('theme-toggle');
// //     const body = document.body;

// //     themeToggle.addEventListener('click', function () {
// //         body.classList.toggle('dark-mode');
// //     });
// // });
// document.addEventListener('DOMContentLoaded', function () {
//     const themeToggle = document.getElementById('theme-toggle');
//     const body = document.body;

//     themeToggle.addEventListener('change', function () {
//         body.classList.toggle('dark-mode');
//     });
// });













// document.addEventListener('DOMContentLoaded', function () {
//     const searchForm = document.getElementById('searchForm');
//     const searchInput = document.getElementById('searchInput');
//     const themeToggle = document.getElementById('theme-toggle');
//     const body = document.body;
//     var searchQuery = "";

//     function handleSearchFormSubmission(event) {
//         event.preventDefault();
//         searchQuery = searchInput.value;
//         runFactCheck(); // Call the fact-check function after getting the search query
//     }

//     function runFactCheck() {
//         // Fact-checking code using Gemini model
//         const API_KEY = "AIzaSyCCiDZhm3JvYF_KPD7Q_7l7abihnX9P2MQ";
//         const genAI = new GoogleGenerativeAI(API_KEY);
//         const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//         const paragraph = "Raju has 3 brothers. he loves his siblings . he enjoys playing with them.he also has 2 sisters.";
//         const statement = searchQuery;
//         const condition = "just refer the given paragraph and say if the given statement is True or false or Not sure and give a one line explanation ";
//         const prompt = condition + " .paragraph:" + paragraph + " Statement:" + statement;

//         model.generateContent(prompt).then(result => {
//             result.response.text().then(text => {
//                 console.log(text);
//                 document.getElementById("display").innerHTML = text;
//             });
//         });
//     }

    

//     searchForm.addEventListener('submit', handleSearchFormSubmission);

//     themeToggle.addEventListener('change', function () {
//         body.classList.toggle('dark-mode');
//     });

//     // Initial fact-check on page load (you might want to call this based on your application flow)
//     runFactCheck();
// });








//Fact check using Gemini
import { GoogleGenerativeAI } from "@google/generative-ai";
// Fetch your API_KEY
const API_KEY = "AIzaSyCCiDZhm3JvYF_KPD7Q_7l7abihnX9P2MQ";
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);
document.addEventListener('DOMContentLoaded', function () {
    var searchQuery = "";
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function handleSearchFormSubmission(event) {
        event.preventDefault();
        searchQuery = searchInput.value;
        console.log("Search Query:", searchQuery);
        runFactCheck();
    }

    async function runFactCheck() {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            console.log("Model initialized:", model);

            const paragraph = "Raju has 3 brothers. he loves his siblings . he enjoys playing with them.he also has 2 sisters.";
            const statement = searchQuery;
            const condition = "just refer the given paragraph and say if the given statement is True or false or Not sure and give a one line explanation ";
            const prompt = condition + " .paragraph:" + paragraph + " Statement:" + statement;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = await response.text();

            console.log("Fact-check Result:", text);
            document.getElementById("display").innerHTML = text;
        } catch (error) {
            console.error("Error during fact-check:", error);
            document.getElementById("display").innerHTML = "Error during fact-check. Please check the console for details.";
        }
    }



    searchForm.addEventListener('submit', handleSearchFormSubmission);

    themeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode');
    });


});
