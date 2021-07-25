console.log("on ready");
//remember employee info in global variable
let employees = [];
$(document).ready(onReady);

function onReady(){


$('#submitEmployee').on('submit', onSubmit);
}

function onSubmit(event){
    //prevents the page from re-loading
    event.preventDefault();
    console.log('onSubmit');

//Getting values from form
    let employee = {
        firstName: $('#fname').val(),
        lastName: $('#lname').val(),
        ID: $('#idNumber').val(),
        title: $('#employeeTitle').val(),
        annualSalary: Number($('#annualSalary').val()),
    };
//pushes employee properties to global variable
employees.push(employee);
console.log('employees', employees);

    //Clear form input
    $('#fname').val('')
    $('#lname').val('')
    $('#idNumber').val('')
    $('#employeeTitle').val('')
    $('#annualSalary').val('')

    //Displaying the table on the DOM
    $('#employeeInformation').append(`
        <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.ID}</td>
                <td>${employee.title}</td>
                <td>$${employee.annualSalary.toFixed(2)}</td>
            </tr>
    `);


    //calculating the total monthly
    let updatedCosts = 0;
    for(let employee of employees){
        updatedCosts += employee.annualSalary;
    }

    //setting total monthly of updated costs
    $('#updatedCosts').text(updatedCosts.toFixed(2))

}
