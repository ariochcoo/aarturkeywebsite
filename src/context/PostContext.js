import React, { createContext, useState, useEffect } from "react";
import FirebaseFirestoreService from "../FirebaseFirestoreService";

export const PostContext = createContext();
const { Provider } = PostContext;

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState();
  const [categoryFilter, setCategoryFilter] = useState();
  const [currentPost, setCurrentPost] = useState();
  const [collectionFolder, setCollectionFolder] = useState("arabicPost");

  // admin panel tab event key
  const [event, setEvent] = useState("table");
  //................................

  useEffect(() => {
    fetchPosts()
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        console.log(error.message);
        throw error;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionFolder]);

  // read all documents
  async function fetchPosts() {
    console.log("working");
    let fetchedPosts = [];

    try {
      const response = await FirebaseFirestoreService.readDocumentsPost({
        collection: collectionFolder,
      });

      const newPosts = response.docs.map((postDoc) => {
        const id = postDoc.id;
        const data = postDoc.data();
        return { ...data, id };
      });

      fetchedPosts = [...newPosts];
    } catch (error) {
      console.log(error.message);
      throw error;
    }

    return fetchedPosts;
  }
  //...........................................

  //dispatch function

  const dispatchPostEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_POST":
        addPost(payload);
        return;

      case "READ_POST":
        readPost(payload);

        return;

      case "DELETE_POST":
        deletePost(payload);
        return;

      case "UPDATE_POST":
        updatePost(payload.id, payload.document);
        return;

      default:
        return;
    }
  };

  //............................

  //add
  async function addPost(newPost) {
    try {
      const response = await FirebaseFirestoreService.createDocumentPost(
        collectionFolder,
        newPost
      );

      alert(response.id);
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }

  // read document
  async function readPost(id) {
    try {
      const response = await FirebaseFirestoreService.readDocumentPost(
        collectionFolder,
        id
      );

      setCurrentPost(response.data());
      setPostId(response.id);
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }

  //delete
  async function deletePost(id) {
    try {
      await FirebaseFirestoreService.deleteDocumentPost(collectionFolder, id);
      alert("succesfully");
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }

  //update

  async function updatePost(id, document) {
    try {
      await FirebaseFirestoreService.updateDocumentPost(
        collectionFolder,
        id,
        document
      );

      alert(`This post ${id} / updated`);
      setPostId();
      setCurrentPost();

      setEvent("table");
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }

  return (
    <Provider
      value={{
        posts,
        setPosts,
        collectionFolder,
        setCollectionFolder,
        currentPost,
        setCurrentPost,
        dispatchPostEvent,
        postId,
        setPostId,
        event,
        setEvent,
        categoryFilter,
        setCategoryFilter,
      }}
    >
      {props.children}
    </Provider>
  );
};
