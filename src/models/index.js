import AV from 'leancloud-storage'

AV.init({
  appId: "RgIcSghc2maGPxftcphxI2cD-9Nh9j0Va",
  appKey: "kunEh33HRS5pchvay8Jh50fr",
  serverURL: "https://rgicsghc.lc-cn-e1-shared.com"
});

const Auth = {
  register(username, password) {
    let user = new AV.User();
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(user => resolve(user), err => reject(err))
    });
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      AV.User.logIn(username, password).then((user) => resolve(user), (err) => reject(err));
    });
  },
  logout() {
    AV.User.logOut();
  },
  getCurrentUser() {
    return AV.User.current();
  }
}

const Uploader = {
  add(filename, file) {
    const item = new AV.Object('Image');
    const imgFile = new AV.File(filename, file)
    item.set('filename', filename);
    item.set('owner', AV.User.current());
    item.set('url', imgFile);
    return new Promise((resolve, reject) => {
      item.save().then(serverFile => {
        console.log(imgFile.thumbnailURL(800,400))
        resolve(serverFile)
      }, err=> reject(err));
    });
  },
}



export {
  Auth,
  Uploader
}