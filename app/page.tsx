import Image from 'next/image'
import Info from './Componants/Info'
import Questions from './Componants/questions'
import { getAllQuestions } from './api/api'

export default async function Home() {

  let questions = await getAllQuestions();
  console.log(questions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
        <Image src="/logo.png" width={300} height={300} alt={''} />
        <h1 className='font-bold text-xl'>Info side om bærekraft</h1>
        <Info />
        <h1 className='font-bold text-xl'>Spørsmål</h1>
        <div className='w-1/2'>
          <Questions questions={questions}/>
        </div>
    </main>
  )
}
