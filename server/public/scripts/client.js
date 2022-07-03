$(document).ready(onReady);
console.log('js');

function onReady() {
    //click listeners here
    getTasks(); //  NOT set up yet
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
function addTask() {
    console.log('function to addTask');
}


// -- BACK-END OR SERVER/ROUT/POOL FUNCTIONS -- //

// -- GET FUNCTION -- //
function getTasks() {
    console.log('START getTasks (client)');
    $.ajax({
            url: '/tasks',
            method: 'GET',
        })
        .then(function (response) {
            console.log('GET response is: (client)', response);
            renderTask(response); // Send to renderTask function
        }).catch(function (error) {
            console.log('Error in GET: (client)', error);
            alert('Error in getTask (client)')
        });
    console.log('END of getTasks (client)');


}

function clearAllTasks() {
    console.log('function to clear all task (client)');
}

// --- FRONT END OR DOM FUNCTIONS --- //
function renderTask(tasks) {

    $('#tbody').empty();
    console.log('START renderTask (client)', tasks);
        for (let task of tasks) {
            // console.log( 'START renderTask LOOP' );
            let taskStatus = `${task.status}`;
            // console.log( 'task start is:', `${task.status}`);
            // console.log( 'task is:', tasks);
            // console.log( 'taskStatus is:', taskStatus);
          

            if (  `${taskStatus}` === 'false' ) { // -- if 'false' append this
                
                $('#tbody').append(`
                <tr class="false" style="background-color: lightcoral">
                <td>${task.name}</td>
                <td>${task.description}</td>
                <td>${task.status}</td>
                <td><button data-id="${task.id}">Completed</button></td>
                <td><button data-id="${task.id}">Delete</button></td>
                </tr>
                `);
                console.log('task status is FALSE', task);
        }
        else if ( taskStatus === 'true' ){ // -- if 'true' append this
            $('#tbody').append(`
            <tr class="true" style="background-color: lightgreen">
                <td>${task.name}</td>
                <td>${task.description}</td>
                <td>${task.status}</td>
                <td><button data-id="${task.id}">Completed</button></td>
                <td><button data-id="${task.id}">Delete</button></td>
            </tr>
        `);
            console.log('task status is TRUE', task);
        }
        };
    $('input').val('');
    console.log('END renderTask (client)');
};