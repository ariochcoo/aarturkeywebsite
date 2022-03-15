import firebase from "./FirebaseConfig";

import {
  addDoc,
  collection as firestoreCollection,
  deleteDoc,
  doc,
  where,
  getDoc,
  getDocs,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";

const firestore = firebase.firestore;

const createDocumentPost = (collection, document) => {
  return addDoc(firestoreCollection(firestore, collection), document);
};

const readDocumentPost = (collection, id) => {
  return getDoc(doc(firestore, collection, id));
};

const readDocumentsPost = ({ collection }) => {
  const collectionRef = firestoreCollection(firestore, collection);
  return getDocs(collectionRef);
};

// read with query

const readDocumentWithQuery = async ({
  collection,
  queries,
  orderByField,
  orderByDirection,
}) => {
  const collectionRef = firestoreCollection(firestore, collection);

  const queryConstraints = [];

  if (queries && queries.length > 0) {
    for (const query of queries) {
      queryConstraints.push(where(query.field, query.condition, query.value));
    }
  }
  if (orderByField && orderByDirection) {
    queryConstraints.push(orderBy(orderByField, orderByDirection));
  }

  const firestoreQuery = query(collectionRef, ...queryConstraints);

  return getDocs(firestoreQuery);
};

//.....................................

const updateDocumentPost = (collection, id, document) => {
  return updateDoc(doc(firestore, collection, id), document);
};

const deleteDocumentPost = (collection, id) => {
  return deleteDoc(doc(firestore, collection, id));
};

const FirebaseFirestoreService = {
  createDocumentPost,
  readDocumentsPost,
  readDocumentPost,
  updateDocumentPost,
  deleteDocumentPost,
  readDocumentWithQuery,
};

export default FirebaseFirestoreService;
