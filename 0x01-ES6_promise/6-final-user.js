import signUpUser from '4-user-promise.js';
import uploadPhoto from '5-photo-reject.js'

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)]
    const result = [];
    return new Promise.allSettled(promises).then((result) => {
        results.map(({ status, value, reason }) => (
            result.push({
              status,
              value: status === 'rejected' ? reason.toString() : value,
            })
        ));
        return result;
    });
}