import {uploadPhoto, createUser} from "utils.js";
export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
        console.log(`${result.body} ${result.firstName} ${result.lastName}`);
    })
    .catch((error) => {
        console.log('Signup system offline');
    });
}
