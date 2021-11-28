import AV, { User } from 'leancloud-storage'

AV.init({
  appId: "RgIcSghc2maGPxftcphxI2cD-9Nh9j0Va",
  appKey: "kunEh33HRS5pchvay8Jh50fr",
  serverURL: "https://rgicsghc.lc-cn-e1-shared.com"
});

console.log('start...')

const Auth = {
  register(username, password) {
    let user = new User;
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(user => resolve(user), err => reject(err))
    });
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      console.log('------')
      console.log(username, password)
      User.logIn(username, password).then((user) => resolve(user), (err) => reject(err));
    });
  },
  logout() {
    User.logOut();
  },
  getCurrentUser() {
    return User.current();
  }
}

// const Uploader = {

// }



export { Auth }