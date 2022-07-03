$(document).ready(onReady);
console.log('js');

function onReady(){
//click listeners here
getTasks();  //  NOT set up yet
$(document).on('click', '#addButton', addTask) // connects
$(document).on('click', '#clearAllTasksButton', clearAllTasks) // connects
};


// -- MAIN on page start click listeners -- DONE -- //

// task button listener mark completed //
// task button to delete task // 

// need a getTasks() function
// need a renderTask() function
// create renderTasks
// create delete task
// create update/PUT task




// -- ADD FUNCTION -- //
function addTask(){
    console.log( 'function to addTask' );
}


// -- BACK-END OR SERVER/ROUT/POOL FUNCTIONS -- //

// -- GET FUNCTION -- //
function getTasks(){
    console.log( 'in getTasks (client)');
    $.ajax({
        url: '/tasks',
        method: 'GET',
    })
    .then(function(response) {
        console.log('GET response is:', response );
        renderTask(response); // Send to renderTask function
    }).catch(function (error){
        console.log( 'Error in GET:', error );
        alert('Error in getTask (client)')
    });
    console.log( 'end of getTasks (client)');


} 

function clearAllTasks(){
    console.log( 'function to clear all task' );
}

// --- FRONT END OR DOM FUNCTIONS --- //
function renderTask(tasks){
    
$('#tbody').empty();
console.log('START renderTask', tasks);
for ( let task of tasks ) {
    console.log(task);
    $('#tbody').append(`
    <tr>
    <td>${task.name}</td>
    <td>${task.description}</td>
    <td>${task.status}</td>
    <td><button data-id="${task.id}">Delete</button></td>
    </tr>
    `);
}
$('input').val('');
    console.log( 'START renderTask');
}