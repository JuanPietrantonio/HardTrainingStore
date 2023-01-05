
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB91ocJT-QsqBfV7Ls-4UAmuoq2MWj8hF4",
  authDomain: "hardtrainingstore.firebaseapp.com",
  projectId: "hardtrainingstore",
  storageBucket: "hardtrainingstore.appspot.com",
  messagingSenderId: "134204277797",
  appId: "1:134204277797:web:52ed575462fa295b3e2bcc"
};


const FirebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(FirebaseApp);

export function testDataBase() {
    console.log (FirebaseApp)
}


export async function getSingleItemFromApi(id) {
    const docRef = doc(DB, "products", id);
    const docSnap = await getDoc(docRef); 

    if (docSnap.exists()) {
        return {
            ...docSnap.data(),
            id: docSnap.id,   
        }
    }
    else {
        console.error("No existeee")
    }
}




export async function getItemsFromApi() {
    try{
        const collectionProducts = collection(DB, "products");
        let respuesta = await getDocs(collectionProducts);

        const products = respuesta.docs.map ( docu => {
            return {
            ...docu.data(),
            id: docu.id,
            }
        })

        return(products)
    }
    catch(error){
        console.error(error)
    }
}


export async function getItemsFromApiByCategory(categoryId) {
    const productsRef = collection(DB, "products");
    const myQuery = query(productsRef, where("category", "==", categoryId))

    const productsSnap = await getDocs(myQuery);
    const products = productsSnap.docs.map((docu) => {
        return {
            ...docu.data(),
            id: docu.id,
        };
    });
    return products; 
}