const inputEl = document.getElementById('input');
const searchBtn = document.getElementById('search');
const userName = document.getElementById('username');
const userPhone = document.getElementById('phone');
const userEmail = document.getElementById('email');
const error = document.getElementById('error')

async function userProfile(user) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    const userN = data.find(d => d.name.toUpperCase() === user.toUpperCase())
    console.log("username:", userN);
    console.log(data);
    return userN;
}

userProfile('Ervin')

function displayProfile(user) {
    const userP = user.name;
    const userE = user.email;
    const userPh = user.phone;
    userName.textContent = `Name: ${userP}`;
    userEmail.textContent = `Email: ${userE}`;
    userPhone.textContent = `Phone: ${userPh}`;

}


async function run(user) {
    const profile = await userProfile(user);
    if (profile === undefined) {
        error.textContent = "User not found"
        return;
    }
    error.textContent = ""
    console.log("Logged", profile);

    displayProfile(profile)
}

// run('Ervin Howell')

searchBtn.addEventListener('click', () => {
    const input = inputEl.value.trim();
    if (input === '') {
        error.textContent = 'Please enter a username';
        return;
    }
    run(input)
})

// ALL GOOD
