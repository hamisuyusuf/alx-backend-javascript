n// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  try {
    const [userPromise, photoPromise] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return [
      { status: userPromise.status, value: userPromise.value },
      { status: photoPromise.status, value: photoPromise.value },
    ];
  } catch (error) {
    console.error('Error in handleProfileSignup:', error);
    return [{ status: 'rejected', value: error }];
  }
};

export default handleProfileSignup;
