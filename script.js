console.log("on ready");
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

console.log('employee', employee);

    //Clear form input
    $('#fname').val('')
    $('#lname').val('')
    $('#idNumber').val('')
    $('#employeeTitle').val('')
    $('#annualSalary').val('')

    
    $('#employeeInformation').append(`
        <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.ID}</td>
                <td>${employee.title}</td>
                <td>$${employee.annualSalary}</td>
            </tr>
    `);

}