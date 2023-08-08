import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeNwmyE3fKbhLI5xEoWzkBLhI96-LMF5I",
  authDomain: "instagram-2f49d.firebaseapp.com",
  projectId: "instagram-2f49d",
  storageBucket: "instagram-2f49d.appspot.com",
  messagingSenderId: "892671764987",
  appId: "1:892671764987:web:cbb8dc907e2f3e5094835e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
