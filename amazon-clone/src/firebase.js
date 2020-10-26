import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({

  
        apiKey: "AIzaSyCjIYfQlee60UNkgVcITjVNmZai1BKinMY",
        authDomain: "clone-abc82.firebaseapp.com",
        databaseURL: "https://clone-abc82.firebaseio.com",
        projectId: "clone-abc82",
        storageBucket: "clone-abc82.appspot.com",
        messagingSenderId: "812377742836",
        appId: "1:812377742836:web:816621d8f02210d2822da1",
        measurementId: "G-P9PVYK04JM"
     


})

const auth=firebase.auth();

export {auth};


