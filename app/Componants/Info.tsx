import Image from 'next/image';

export default function Info(){
    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure><Image src="/Jarlepfp.jpg" height={100} width={200} alt={"bruh"}/></figure>
            <div className="card-body">
                <h2 className="card-title text-black">Hva gjør vi?</h2>
                <p className='text-black'>Hos e20 Energy® tror vi at fremtiden til planeten vår avhenger av valgene vi tar i dag. Vårt oppdrag er å skape innovative energiløsninger som sparer energi, sparer penger og bidrar til en bedre fremtid for alle.</p>
            </div>
        </div>
    );
};