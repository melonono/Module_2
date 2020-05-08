// $.ajax('data/employees.json').done(function(response){
//   console.log(response);{

//     $('#bulleted').empty();
//     for(let employee of employees){
//     let list = $('<ul></ul>');
//     list.append(`<li>${employee.employees}</li>`);

//     $('#in').append(list);
//   }
//   }

// });

$.ajax('data/employees.json').done((employees) => {
  console.log(employees)
    let list = $('<ul></ul>');
    list.addClass('bulleted');

    for (let employee of employees){
      let listItem = $('<li></li>');
      /* solution 1
      listItem 
      .text(employee.name) 
      
      .addClass(employee.inOffice ? 'in' : 'out');
      */

      //solution 2 , easier. 
      listItem.text(employee.name);

      if(employee.inOffice == true){
        listItem.addClass('in');
      } else{
        listItem.addClass('out');
      }
    
      //list.append(listItem); still needed in both solutions. 
      list.append(listItem);
    }
    $('#employeeList').append(list);

});

//create the ul and then put li in the ul with the appropiate classes. 

