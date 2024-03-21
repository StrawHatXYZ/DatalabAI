// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc ,getDocs,getDoc,doc,updateDoc} from "firebase/firestore";
import { ref, uploadBytesResumable, getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7ovwAAFJ-UTHmTQBuQWczVr0iyqftsj4",
  authDomain: "data-bounty-9a821.firebaseapp.com",
  projectId: "data-bounty-9a821",
  storageBucket: "data-bounty-9a821.appspot.com",
  messagingSenderId: "704526138200",
  appId: "1:704526138200:web:1a89ea4b894342754a832d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export const addBounty = async (bountyData) => {
  try {
    // Add a new document to the 'bounties' collection

    // add doc to the collection named 'bounties' with the data passed in bountyData
    const bountiesCollection = collection(db, "bounties");
    // i want to add one more keypair value to the bountyData object
    bountyData = {
      ...bountyData,
      createdBy: auth.currentUser.uid,
      name: auth.currentUser.displayName,
    };
    const docRef = await addDoc(bountiesCollection, bountyData);
    console.log("Bounty added with ID: ", docRef.id);
    return docRef.id; // Return the ID of the added document if needed
  } catch (error) {
    console.error("Error adding bounty: ", error.message);
    throw error;
  }
};

// get all the bounties from the database
export const getBounties = async () => {
  try {
    const bountiesCollection = collection(db, "bounties");
    const bountiesSnapshot = await getDocs(bountiesCollection);
    const bountiesList = bountiesSnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log("Bounties: ", bountiesList);
    return bountiesList;
  } catch (error) {
    console.error("Error getting bounties: ", error.message);
    throw error;
  }
};
// get the bounty by doc id 
export const getBounty = async (bountyId) => {
  try {
    const bountyDoc = await getDoc(doc(db, "bounties", bountyId));
    if (bountyDoc.exists()) {
      console.log("Bounty data: ", bountyDoc.data());
      return { id: bountyDoc.id, ...bountyDoc.data() };
    } else {
      console.log("No such bounty!");
      return null;
    }
  } catch (error) {
    console.error("Error getting bounty: ", error.message);
    throw error;
  }
};

// i have to store the file in firebase called csv file, i have to store it like that was uploaded by that user

export const uploadFile = async (file) => {
  try {
    const storageRef = ref(storage, `csv-files/${auth.currentUser.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const snapshot = await uploadTask;
    console.log("Uploaded a blob or file!", snapshot);
    return snapshot.ref.fullPath
  } catch (error) {
    console.error("Error uploading file: ", error.message);
    throw error;
  }
}

// i have to create a collection datasets and the each document id is the user id and fields are the title, description, tags, file, uploadedAt, uploadedBy and also file you have to store in storage in the same way as the csv file
export const addDataset = async (datasetData) => {
  try {
    const datasetsCollection = collection(db, "datasets");
    datasetData = {
      ...datasetData,
      uploadedBy: auth.currentUser.uid,
      uploadedAt: new Date(),
    };
    const docRef = await addDoc(datasetsCollection, datasetData);
    console.log("Dataset added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding dataset: ", error.message);
    throw error;
  }
};

export const updateBountyStatus = async (bountyId, status) => {
  try {
    const bountyDocRef = doc(db, "bounties", bountyId);
    await updateDoc(bountyDocRef, { status: status });
    console.log("Bounty status updated successfully");
  } catch (error) {
    console.error("Error updating bounty status: ", error.message);
    throw error;
  }
};
export { auth }; // Exporting the auth object