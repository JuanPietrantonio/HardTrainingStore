
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

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

export async function createBuyOrderFirestore(buyOrderData){
    const collectionRef = collection(DB, "buyorders")
    const docRef = await addDoc( collectionRef, buyOrderData);

    return docRef.id
}

/*export async function createBuyOrderFirestoreWithStock(buyOrderData) {
    const collectionProductsRef = collection(DB, "products");
    const collectionOrdersRef = collection(DB, "buyorders");
    let batch = writeBatch()

    let arraysIds = buyOrderData.items.map(item => item.id)
    const q = query(collectionProductsRef, where(documentId(), 'in', arraysIds  ))

    let products = await getDocs(q);

    products.map( doc => {
        let stockActual = doc.data().stock;
        let itemInCart = buyOrderData.items.find( item => item.id === doc.id)
        let stockActualizado = stockActual - itemInCart.count;
        batch.update(doc.ref, { stock: stockActualizado })
    })
    batch.commit();
}*/




/*export async function exportItemsToFirestore(){
    const items = [
    {
      id: 1,
      title: "Whey Protein Vanilla 930 Gr",
      price: 6799,
      stock: 54,
      discount: 50,
      category: "protein",
      thumbnail: "https://cdn.shopify.com/s/files/1/0599/3683/3741/products/Truemade_vainilla_2lb_600x.jpg?v=1653073724",
      description: "Proteina en polvo sabor vanillia",
    },
    {
      id: 2,
      title: "Whey Protein Frutilla 930 Gr",
      description:
        "Proteina en polvo sabor frutilla",
      price: 6799,
      stock: 34,
      category: "protein",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_876779-MLA50144914207_052022-F.webp",
    },
    {
      id: 4,
      title: "Whey Protein Chocolate 930 Gr",
      description: "Proteina en polvo sabor chocolate",
      price: 6799,
      stock: 123,
      category: "protein",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_786807-MLA50144914161_052022-F.webp",
    },
    {
      id: 5,
      title: "Whey Protein Cookies and Cream 930 Gr",
      description:
        "Proteina en polvo sabor cookies and cream",
      price: 6799,
      stock: 32,
      category: "protein",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_972789-MLA50144914108_052022-F.webp",
    },
    {
      id: 6,
      title: "Whey Protein Banana 930 Gr",
      description:
        "Proteina en polvo sabor banana",
      price: 6799,
      stock: 83,
      category: "protein",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_907441-MLA50144895559_052022-F.webp",
    },
    {
      id: 7,
      title: "Whey Protein Banana 453 Gr",
      description:
        "Proteina en polvo sabor Vainilla",
      price: 3899,
      stock: 50,
      category: "protein",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_604118-MLA49898435838_052022-F.webp",
    },
    {
      id: 8,
      title: "Whey Protein Chocolate 453 Gr",
      description:
        "Proteina en polvo sabor chocolate.",
      price: 3899,
      stock: 68,
      category: "protein",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_980383-MLA50098927233_052022-F.webp",
    },
    {
      id: 9,
      title: "Whey Protein Cookies and Cream 453 Gr",
      description:
        "Proteina en polvo sabor cookies and cream",
      price: 3899,
      stock: 96,
      category: "protein",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_898086-MLA49898399717_052022-F.webp",
    },
    {
      id: 10,
      title: "Creatina",
      description:
        "Creatina micronizada",
      price: 8999,
      stock: 89,
      category: "protein",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_772770-MLA49211946466_022022-F.webp",
    },
    {
      id: 11,
      title: "Amino 4500 X 150 Tabs",
      description:
        "Aminoacidos 4500 x 150 tabletas",
      price: 3699,
      stock: 65,
      category: "amino",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_954890-MLA52373058522_112022-F.webp",
    },
    {
      id: 12,
      title: "Amino 4500 X 150 Caps",
      description: "Aminoacidos 4500 x 150 capsulas",
      price: 3699,
      stock: 52,
      category: "amino",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_615387-MLA49586456465_042022-F.webp",
    },
    {
      id: 13,
      title: "Muscle Max tabletas",
      description:
        "Suplemento En Tabletas Sport Muscle Max En Frasco",
      price: 1899,
      stock: 61,
      category: "amino",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_691621-MLA48654699446_122021-F.webp",
    },
    {
      id: 14,
      title: "Carnitina 1500 Mg en pote de 46.2g 60 Unidades",
      description:
        "Suplemento en cápsulas ENA Sport Carnitina 1500 Mg en pote de 46.2g 60 Unidades",
      price: 1999,
      stock: 114,
      category: "amino",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_904151-MLA49431729355_032022-F.webp",
    },
    {
      id: 15,
      title: "Bcaa 12:1:1 Ena Super Ratio 120 Caps",
      description:
        "Bcaa 12:1:1 Ena Super Ratio 120 Caps Aminoacidos Ramificados Sabor Sin Sabor",
      price: 1499,
      stock: 105,
      category: "amino",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_894703-MLA49173878507_022022-F.webp",
    },
    {
      id: 16,
      title: "Disco Engomado 5 Kg",
      description:
        "Disco Engomado Olimpico C/agarre 5 Kg X Unidad",
      price: 6499,
      stock: 110,
      category: "dumbbells",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_922661-MLA51370148835_092022-F.webp",
    },
    {
      id: 17,
      title: "Disco Engomado 10 Kg",
      description:
        "Disco Engomado Olimpico C/agarre 10 Kg X Unidad",
      price: 11499,
      stock: 78,
      category: "dumbbells",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_709580-MLA46968678890_082021-F.webp",
    },
    {
      id: 18,
      title: "Pesa Rusa 12kg",
      description:
        "Pesa Rusa Kettlebell Fundición 12kg X Unidad",
      price: 14999,
      stock: 88,
      category: "dumbbells",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_686789-MLA51458956310_092022-F.webp",
    },
    {
      id: 19,
      title: "Mancuerna 5 Kg",
      description:
        "Mancuerna Pesa Pvc Rellena Premium 5 Kg Por Unidad",
      price: 1849,
      stock: 54,
      category: "dumbbells",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_780600-MLA51811641970_102022-F.webp",
    },
    {
      id: 20,
      title: "Mancuerna 4 Kg",
      description:
        "Mancuerna Pesa Pvc Rellena Premium 4 Kg Por Unidad",
      price: 1649,
      stock: 140,
      category: "dumbbells",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_903062-MLA42763985526_072020-F.webp",
    },
    {
      id: 21,
      title: "Barra + 1 Mancuerna + 20 Kg En Discos Kit Set",
      description: "Barra + 1 Mancuerna + 20 Kg En Discos Con Manija Kit Set",
      price: 12449,
      stock: 133,
      category: "dumbbells",
      thumbnail: "https://http2.mlstatic.com/D_NQ_NP_2X_665523-MLA44982198487_022021-F.webp",
    },
    {
      id: 22,
      title: "Pesa 10kg Con Discos Ajustables",
      description: "Pesa 10kg Con Discos Ajustables Estuche",
      price: 6449,
      stock: 146,
      category: "dumbbells",
      thumbnail: "hhttps://http2.mlstatic.com/D_NQ_NP_2X_762388-MLA43761990728_102020-F.webp",
    },
];
    const collectionRef = collection(DB, "products")

    for(let item of items) {
        const docRef = await addDoc(collectionRef, item);
          
    }
}*/