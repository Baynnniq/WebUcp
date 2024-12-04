// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.getAuth(app);

// Register and Send Verification Email
async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await firebase.createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await firebase.sendEmailVerification(user);
    document.getElementById("result").innerText = "Verification email sent. Check your inbox.";
  } catch (error) {
    document.getElementById("result").innerText = `Error: ${error.message}`;
  }
}

// Discord Verification
function verifyDiscord() {
  const clientId = "YOUR_DISCORD_CLIENT_ID";
  const redirectUri = "http://localhost:5500"; // Change this to your domain
  const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=identify`;

  window.location.href = discordAuthUrl;
}
