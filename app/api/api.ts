import { sql } from '@vercel/postgres';
import { Iquestions } from './types';

export const getAllQuestions = async ()  => {
    try {
        const result = await sql<Iquestions>`SELECT * FROM questions`;
        return result.rows;
    } catch (error) {
        throw error;
    }
}
