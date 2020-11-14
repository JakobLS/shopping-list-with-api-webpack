


const BASE_URL = 'https://thinkful-list-api.herokuapp.com/student';


function listApiFetch(...args) {
    // Setup var in scope outside of promise chain
    let error;
    return fetch(...args)
    .then(response => {
        if (!response.ok) {
            // Valid HTTP response but non-2xx status - let's create an error!
            error = {code: response.status};

        } else if (!response.headers.get('content-type').includes('json')) {
            // If response is not json type, place statusText in error object and immediately reject Promise.
            error.message = response.statusText;
            return Promise.reject(error);
        }

        // Otherwise, parse the JSON stream:
        return response.json();
    })
    .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
            error.message = data.message;
            return Promise.reject(error);
        }
        // Otherwise, give back the data as resolved Promise
        return data;
    })
};

function getItems() {
    return listApiFetch(`${BASE_URL}/items`);
};

function createItem(name) {
    return listApiFetch(`${BASE_URL}/items`, {method: 'POST', 
                                       headers: new Headers({'Content-Type': 'application/json'}), 
                                       body: JSON.stringify({name: name})});
};

function updateItem(id, updateData) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {method: 'PATCH',
                                             headers: new Headers({'Content-Type': 'application/json'}),
                                             body: JSON.stringify(updateData)});
};

function deleteItem(id) {
    return listApiFetch(`${BASE_URL}/items/${id}`, {method: 'DELETE'});
};


export default {
    getItems,
    createItem,
    updateItem,
    deleteItem
};


