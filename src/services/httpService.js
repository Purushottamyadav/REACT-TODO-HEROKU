import axios from "axios";

const apiURL ="https://todo-node-rest-api-10x-academy.herokuapp.com/api/todo";

export function getTasks() {
    return axios.get(apiURL+"s");
}
export async function addTask(task) {
    try{
   const response= await axios.post(apiURL + "/create", task);
   return response;
    }
    catch(error){
         console.error("ERROR:-" +error.message);
    }
}
export function updateTask(id, task) {
    return axios.put(apiURL + "/" + id + "/update", task);
}
export function deleteTask(id) {
    return axios.delete(apiURL + "/" + id+ "/delete");
}