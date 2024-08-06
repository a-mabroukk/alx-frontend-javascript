import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return await Promise.allSettled(promises).then((results) => {
    const finalResults = []; // Renamed here
    results.map(({ status, value, reason }) => (
      finalResults.push({ // Using finalResults instead of results
        status,
        value: status === 'rejected' ? reason.toString() : value,
      })
    ));
    return finalResults; // Return the renamed array
  });
}
