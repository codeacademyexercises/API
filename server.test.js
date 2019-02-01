const server = require('./server.js');

describe('Server ',()=>{
    it('checking if GET request returns specified users from DB User',async ()=>{
        const options = {
            url: '/todos',
            method: 'GET'
        };
        const response = await server.inject(options);
        response.result.forEach((element)=>{
            console.log(element);
        });
    });

    it('Checking if POST request inserts newUser into DB',async ()=>{
        const options = {
            method: 'POST',
            url: '/todo',
            payload: {
                firstName: 'Abhinav',
                lastName: 'D',
                email: 'abhi@gmail.com',
                city: 'Delhi'
            }
        };
        const response = await server.inject(options);
        console.log(response.result);
    });

    it('Checking if PUT request updates specified records in DB', async ()=>{
        const options = {
            method: 'PUT',
            url: '/todo/{fName}/{lName}'
            payload: {
                email: ''
            }
        }
    });

});