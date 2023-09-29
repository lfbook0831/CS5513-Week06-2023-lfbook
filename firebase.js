import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  
apiKey:"AIzaSyDZChnjLNhmQTTb7AGIjvsQyQOQZSH7QPA",
  authDomain: "week-06--work-session.firebaseapp.com",
  projectId: "week-06--work-session",
  storageBucket: "week-06--work-session.appspot.com",
  messagingSenderId: "489843231915",
  appId: "1:489843231915:web:a483b44932e8c2f883bbee",
  measurementId: "G-DJXDHVK9YK"
};

let analytics;

if (typeof window !== 'undefined') {
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export const db = getFirestore(); 
export { analytics };