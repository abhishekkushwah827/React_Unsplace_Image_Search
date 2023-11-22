export const getUsers = () => {
    return JSON.parse(localStorage.getItem("users"));
}
export const getUserById = (id) => {
    const users = getUsers();
    const position = users.findIndex(user => user.id == id);
    if (position != -1) {
        const user = users[position];
        return user;
    } else {
        alert("Unable to find user...");
    }
}

export const editUser = (id, data) => {
    const users = getUsers();
    const position = users.findIndex(user => user.id == id);
    if (position != -1) {
        users[position] = { ...users[position], ...data };
        updateLocalStorage(users);
        alert("Successfully updated data...")
    }
    else {
        alert(`Unable to find user with id: ${id}`)
    }

}

export const addUser = (newUser) => {
    const users = getUsers();
    updateLocalStorage([...users, {id:Date.now(), ...newUser}]);
}

export const deleteUser = (id) => {
    let users = getUsers();
    const position = users.findIndex(user => user.id == id);
    if (position != -1) {
        users = users.filter(user => user.id !== id);
        updateLocalStorage(users);
        alert("Successfully Deleted...");
    }

}

export const updateLocalStorage = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
}