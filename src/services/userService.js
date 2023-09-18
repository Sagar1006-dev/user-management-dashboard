// services/userService.js
const BASE_URL = 'https://reqres.in/api';

export async function fetchUserDetail(userId) {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.data;
}
// const BASE_URL = 'https://reqres.in/api';

// export async function fetchUserDetail(userId) {
//     const response = await fetch(`${BASE_URL}/users/${userId}`);
//     if (!response.ok) throw new Error("Network response was not ok");
//     const user = await response.json();
//     return user; // Return the user object directly
// }
