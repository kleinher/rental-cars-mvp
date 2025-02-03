import axios from 'axios';
import { PeopleContext } from '../context/PeopleContext';

const API_URL = 'http://localhost:4000/api/mechanic';

export const getMechanics = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching mechanics:', error);
        throw error;
    }
};

export const getMechanicById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching mechanic with ID ${id}:`, error);
        throw error;
    }
};

export const createMechanic = async (mechanicData) => {
    try {
        const response = await axios.post(API_URL, { ...mechanicData });
        return response.data;
    } catch (error) {
        console.error('Error creating mechanic:', error);
        throw error;
    }
};

export const updateMechanic = async (id, mechanicData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, mechanicData);
        return response.data;
    } catch (error) {
        console.error(`Error updating mechanic with ID ${id}:`, error);
        throw error;
    }
};

export const deleteMechanic = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting mechanic with ID ${id}:`, error);
        throw error;
    }
};
