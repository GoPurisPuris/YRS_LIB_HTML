const Userlist = document.querySelector('.user-list');

fetch('https://reqres.in/api/users')
.then((response) => {
    return response.json();
})
.then((json) => {
    const users = json.data;
    users.forEach((user) => {
        const useritem = document.createElement('div');
        useritem.classList.add('user-item')

        const avatarimg = document.createElement('img');
        avatarimg.classList.add('avatar')
        avatarimg.src = user.avatar;

        const fullname = document.createElement('h3');
        fullname.classList.add('fullname');
        fullname.innerHTML = user.first_name + ' ' + user.last_name ;

        const email = document.createElement('p');
        email.classList.add('email')
        email.innerHTML = user.email;

        useritem.append(avatarimg, fullname, email);
        Userlist.append(useritem);
    });
})
.catch((error) => {
    console.log(error.message);
})