
import React, { useState } from 'react';

export default function Questions({ questions }: { questions: Array<{ id: string, question: string, answer: string }> }) {
    return (
        console.log("Heisann Sveisann!"),
        <div>
            {questions.map((item, index) => (
                <div key={index} className="collapse collapse-arrow bg-slate-700 mt-5">
                    <input
                        type="radio"
                        name={`my-accordion-${index}`}  
                    />
                    <div className="collapse-title text-xl font-medium text-white">
                        {item.question}
                    </div>
                    <div className="collapse-content text-slate-300"> 
                        <p className='drop-shadow-2xl'>
                        {item.answer.split('\n').map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                        ))}
                        </p>
                    </div>                
                </div>
            ))}
        </div>

    
    );
}


