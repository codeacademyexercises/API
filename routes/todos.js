const Models = require('../../postgreSql/models/')
 
const todosHandler = async (request, h) => {
    let result;
    try {
        const todos = await Models.User.retreiveAnyMatch('Vibhore');
        return todos;
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}
 
const createTodoHandler = async (request, h) => {
    try {
        const { firstName, lastName, email, city } = request.payload;
        const todo = await Models.User.insert(firstName, lastName, email, city);
        return todo;
    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}
 
const updateTodoHandler = async (request, h) => {
    try {
        // const todo_id = request.params.fName;
        const { email, city } = request.payload;
        const todo = await Models.User.updateEmailAndCity(request.params.fName, request.params.lName, email, city);
        return todo;
    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}
 
const deleteTodoHandler = async (request, h) => {
    try {
        await Models.User.deleteAll();
        return { message: 'All records have been deleted.' }
    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}
 
module.exports = [
    { method: 'GET', path: '/todos', handler: todosHandler },
    { method: 'POST', path: '/todo', handler: createTodoHandler },
    { method: 'PUT', path: '/todo/{fName}/{lName}', handler: updateTodoHandler },
    { method: 'DELETE', path: '/deleteAll', handler: deleteTodoHandler }
];