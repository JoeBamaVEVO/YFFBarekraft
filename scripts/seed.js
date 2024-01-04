const { db } = require('@vercel/postgres');
const {
  questions
} = require('../app/api/questions.json');

async function seedquestions(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "questions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS questions (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        question VARCHAR(1055) NOT NULL,
        answer VARCHAR(1055) NOT NULL 

      );
    `;

    console.log(`Created "questions" table`);

    // Insert data into the "questions" table
    const insertedquestions = await Promise.all(
      questions.map(async (user) => {
        return client.sql`
        INSERT INTO questions (question, answer)
        VALUES (${user.question}, ${user.answer})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedquestions.length} questions`);

    return {
      createTable,
      questions: insertedquestions,
    };
  } catch (error) {
    console.error('Error seeding questions:', error);
    throw error;
  }
}


async function main() {
  const client = await db.connect();

  await seedquestions(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
