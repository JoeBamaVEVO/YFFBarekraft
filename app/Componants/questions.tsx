
import React, { useState } from 'react';

export default function Questions({ questions }: { questions: Array<{ id: string, question: string, answer: string }> }) {
    return (
        console.log("Heisann Sveisann!"),
        <div>
            {questions.map((item, index) => (
                <div key={index} className="collapse collapse-arrow bg-white mt-5 width-50%">
                    <input
                        type="radio"
                        name={`my-accordion-${index}`}  
                    />
                    <div className="collapse-title text-xl font-medium text-black">
                        {item.question}
                    </div>
                    <div className="collapse-content text-black"> 
                        <p>{item.answer}</p>
                    </div>                
                </div>
            ))}
        </div>

    
    );
}


