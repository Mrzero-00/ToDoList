const todo_form = document.querySelector(".todolist_class"), todo_input = todo_form.querySelector("input");
const todolist = document.querySelector(".todolist");

const ToDos_LS = 'todos';

let todo_list_array=[];

function saveTodos(){

}

function check_todo_list(){
    const today_todo_list = localStorage.getItem(ToDos_LS);
    
    if(today_todo_list !==null){
        const todo_parse = JSON.parse(today_todo_list);
        todo_parse.forEach(function(todo){
            painting_doto_list(todo.text);
        }
        )
    }

}
function delt_doto_list(event){
    const bnt = event.target;
    
    const li = bnt.parentNode;
    
    todolist.removeChild(li);

    const cleanToDos = todo_list_array.filter(function(todo){
        //console.log(todo.id, parseInt(li.id));
        return todo.id !== parseInt(li.id);
    });
    //console.log(cleanToDos);
    todo_list_array = cleanToDos;
    add_doto_list();
    console.log(todo_list_array);
}

function add_doto_list(){
    localStorage.setItem(ToDos_LS,JSON.stringify(todo_list_array));

}

function painting_doto_list(text){
    const li = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.innerText = "삭제"
    const span = document.createElement("span");
    const new_id = todo_list_array.length +1 ; 

    delbtn.addEventListener("click",delt_doto_list);

    span.innerText= text;
    li.id = new_id;
    li.appendChild(span);
    li.appendChild(delbtn);
    todolist.appendChild(li);
    
    const todo = {
        id: new_id,
        text : text
    };

    todo_list_array.push(todo);
    add_doto_list();
    //리스트 추가방법 모름
}

function add_list(){
    todo_form.addEventListener("submit", todo_list_handler);
}



function todo_list_handler(event){
    event.preventDefault();  //
    const current_todo_list = todo_input.value;

    
    painting_doto_list(current_todo_list);
    todo_input.value = "";

}







 function init(){
     check_todo_list();
     add_list();
}

init();