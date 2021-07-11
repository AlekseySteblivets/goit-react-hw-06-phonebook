import { v4 as uuidv4 } from 'uuid';
import types from './phonebooks-types';

const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
        name: name,
        number: number,
        id: uuidv4()

    }

})

export default addContact;

// const addContact = createAction('phonebook/add', ({ name, number }) => ({
//     payload: {
//         name,
//         number,
//         id: shortid.generate(),
//     },
// }));
// const deleteContact = createAction('phonebook/delete');
// const filterContscts = createAction('phonebook/changeFiler');

// export default { addContact, deleteContact, filterContscts };