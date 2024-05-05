import { db } from "./firebase";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

export const createUser = async (user) => {
    const usersCollectionRef = collection(db, "users");
    await addDoc(usersCollectionRef, { 
        name: user.nome, 
        sexo: user.sexo, 
        data: user.data, 
        email: user.email 
    });
};

export const createVaccine = async (vacina) => {
    const vaccineCollectionRef = collection(db, "vaccines");
    const newVaccine = await addDoc(vaccineCollectionRef, { 
        data: vacina.data, 
        dose: vacina.dose, 
        vaccine: vacina.vaccine, 
        proxima: vacina.proxima, 
        comprovante: vacina.selectedImage  
    });
    return newVaccine.id;
};

export const updateUser = async (userId, newData) => {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, newData);
};

export const updateVaccine = async (vaccineId, newData) => {
    const vaccineDocRef = doc(db, "vaccines", vaccineId);
    await updateDoc(vaccineDocRef, newData);
};

export const deleteVaccine = async (vaccineId) => {
    const vaccineDocRef = doc(db, "vaccines", vaccineId);
    await deleteDoc(vaccineDocRef);
};

export const getAllVaccines = async () => {
    const vaccineCollectionRef = collection(db, "vaccines");
    const vaccineSnapshot = await getDocs(vaccineCollectionRef);
    const vaccineList = vaccineSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return vaccineList;
};

export const getVaccineById = async (vaccineId) => {
    try {
      const vaccineDocRef = doc(db, "vaccines", vaccineId);
      const vaccineDocSnapshot = await getDoc(vaccineDocRef);
  
      if (vaccineDocSnapshot.exists()) {
        return {
          id: vaccineDocSnapshot.id,
          ...vaccineDocSnapshot.data()
        };
      } else {
        return null; // Retorna null se a vacina com o ID fornecido não existir
      }
    } catch (error) {
      console.error("Erro ao buscar vacina pelo ID:", error);
      throw error;
    }
  };