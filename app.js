// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom


// Ex 1. Read the content of the email input
const emailInput = document.getElementById("email");
const email = emailInput.value; // TODO: replace null, keep the email variable.
console.log(email);

// Ex 2. Fill the content of the email input with your email
emailInput.value = 'stan@gmail.com';



// Ex 3. Replace the email hint (next to the input) with 'This is my email now'
//       The text should be emphasized using a <strong> tag
const emailHint = document.getElementById("email-hint");
emailHint.innerHTML = '<strong>This is my email now</strong>';



// Ex 4. Add the .blue CSS class to the table header cells (th elements)
const th = document.querySelector("th")
th.classList.add("blue");



// Ex 5. Count the number of table body rows there are (team count!)
const tbody = document.querySelector(".table tbody");
const teamCount = document.querySelectorAll("tbody tr").length;
console.log(teamCount);



// Ex 6. Say there is a 15th team added to the table.
//       Add a row at the bottom, this new team should have zero points.
tbody.insertAdjacentHTML("beforeend", "<tr><td>15</td><td>L'école supérieure du digital</td><td>0</td></tr>");



// Ex 7. Remove the "Email:" label from the DOM
document.querySelector('label').remove();



// Ex 8. Write some code to sum all points given to all teams
let sum = 0; // TODO: replace 0 with your sum result, keep the sum variable.
document.querySelectorAll('tbody tr td:last-child').forEach((element) => {
  sum += Number.parseInt(element.innerText, 10);
});
console.log(sum);



// Ex 9. Change the background color of all table header cells to #DDF4FF
document.querySelectorAll('th').forEach((element) => {
  element.style.backgroundColor = '#DDF4FF';
});

