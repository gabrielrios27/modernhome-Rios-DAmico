import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBKqMzCTTSAqc43QNDSEIPxHPd5RKOUOcQ',
	authDomain: 'modernhome-riosd-amico.firebaseapp.com',
	projectId: 'modernhome-riosd-amico',
	storageBucket: 'modernhome-riosd-amico.appspot.com',
	messagingSenderId: '330148962582',
	appId: '1:330148962582:web:463df9fb81950732fdf037',
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
	return firebase.firestore(app);
}
