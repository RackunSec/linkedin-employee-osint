/*
  2022 - @RackunSec
  douglas@RedSiege.com

  1. Log into Linkedin.com
  2. Search the company name and click on the page
  3. On the navigation bar, click "People"
  4. Paste in the code below (choose which option you prefere for your test)
  5. Copy the array to a file
  6. Run `sort -u` on the file.
  7. Do whatever else with the file you wish.
*/

// JUST EMPLOYEE NAMES:
var employees = document.getElementsByClassName("org-people-profile-card__profile-title t-black lt-line-clamp lt-line-clamp--single-line ember-view");
console.log("Identified "+employees.length.toString()+" employees."); // Display how many are found so far
for(var i=0;i<employees.length;i++){
  console.log(employees[i].innerHTML.replace(/\n.*/g,""));
}




// EMPLOYEE NAMES + JOB TITLES:
var employees = document.getElementsByClassName("artdeco-entity-lockup artdeco-entity-lockup--stacked-center artdeco-entity-lockup--size-7 ember-view");
console.log("Identified "+employees.length.toString()+" employees."); // Display how many are found so far
for(var i=0;i<employees.length;i++){
  console.log(employees[i].innerText.replace(/,/g," ").replace(/(?:\r\n|\r|\n|<br \/>)/g,",").replace(/,(\s+)?[0-9](nd|rd|th|st)([^,]+)?/,"").replace(/(\s+)?[0-9](nd|rd|th|st)([^,]+)?/,"").replace(/,\s+,/,""));
}




// SEARCHING MAIN LINKEDIN SITE (NOT COMPANY PAGE)
/* STEP 1: */
var employees_list = []; // DO THIS ONLY ONCE
// Get list of employees from current page:

/* STEP 2: */
var employees = document.getElementsByClassName("reusable-search__result-container");
// Store them into employees_list[]
for(var i=0;i<employees.length;i++){
  employees_list.push((employees[i].innerText.replace(/,/g," ").replace(/(?:\r\n|\r|\n|<br \/>)/g,",").replace(/,(\s+)?[0-9](nd|rd|th|st)([^,]+)?/,"").replace(/(\s+)?[0-9](nd|rd|th|st)([^,]+)?/,"").replace(/,\s+,/,"")));
}

/* STEP 3: */
// Finally, when all done scrolling / paging:
console.log(employees_list);
// Right click on the object and copy the object
// This will be an array that is compatible with JS/Python/etc
