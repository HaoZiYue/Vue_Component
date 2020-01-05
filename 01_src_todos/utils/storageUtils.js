export const getStorage = function (){
    return JSON.parse(localStorage.getItem('todos_key') || "[]")
}
export function saveStorage (todos){
    localStorage.setItem('todos_key', JSON.stringify(todos))
}