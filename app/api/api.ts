import { Iquestions } from './types';

const baseURL = 'http://localhost:3001';

export const getAllQuestions = async (): Promise<Iquestions[]>  => {
    const response = await fetch(`${baseURL}/questions`);
    const questions = await response.json();
    return questions;
}