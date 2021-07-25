console.log("on ready");
//remember employee info in global variable
let employees = [];
$(document).ready(onReady);

function onReady(){


    $('#submitEmployee').on('submit', onSubmit);
    $(document).on('click', '.deleteBtn', deleteData); 
}
//Delete button


function deleteData(){
    $(this).closest('tr').remove();
    
    console.log('delete data');
};

// function deleteData(){

// }

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
//pushes employee properties to global variable so that the global variable stores our information
    employees.push(employee);
    console.log('employees', employees);

    //Clear form input
    $('#fname').val('')
    $('#lname').val('')
    $('#idNumber').val('')
    $('#employeeTitle').val('')
    $('#annualSalary').val('')

    

    //Empty the table and start clean
    $('#employeeInformation').empty();
    for (let employee of employees) {
        $('#employeeInformation').append(`
        <tr class="employeeRow">
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.ID}</td>
            <td>${employee.title}</td>
            <td>$${employee.annualSalary.toFixed(2)}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
        
    `);
    }

    //calculating the total monthly
    let updatedCosts = 0;
    for(let employee of employees){
        updatedCosts += employee.annualSalary;
        if (updatedCosts > 20000){
            $('.totalMonthly').css('background-color', 'red');
        }
    }

    //setting total monthly of updated costs
    $('#updatedCosts').text(updatedCosts.toFixed(2))

}
