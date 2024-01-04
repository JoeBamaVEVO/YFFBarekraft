
import React, { useState } from 'react';

export default function Questions({ questions }: { questions: Array<{ id: string, question: string, answer: string }> }) {
    return (
        console.log("Heisann Sveisann!"),
        <div>
            {questions.map((item, index) => (
                <div key={index} className="collapse collapse-arrow bg-slate-900 mt-5">
                    <input
                        type="radio"
                        name={`my-accordion-${index}`}  
                    />
                    <div className="collapse-title text-xl font-medium text-white">
                        {item.question}
                    </div>
                    <div className="collapse-content text-stone"> 
                        <p>{item.answer}</p>
                    </div>                
                </div>
            ))}
        </div>

    
    );
}


