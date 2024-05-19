import Image from 'next/image';

const Page = () => {
  const players = [
    '/brad_card.png',
    '/ian_card.png',
    '/molight_card.png',
    '/mugi_card.png',
    '/SK_morten_card.png',
    '/surg_goblin_card.png',
    // Add more images as needed
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
        `}
      </style>
      <div style={{ 
        backgroundImage: `url('/background5.jpg')`, 
        backgroundSize: '120% 120%', 
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          fontSize: '2em', 
          marginBottom: '40px', 
          marginTop: '40px',
          fontFamily: 'Cinzel, serif' ,
          fontWeight: 'bold'
        }}>Our Partnered Players</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '960px' }}>
          {players.map((image, index) => (
            <div key={index} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', textAlign: 'center', transition: 'transform 0.3s ease', margin: '10px', width: '300px' }}>
              <Image src={image} alt={`Player ${index + 1}`} width={300} height={300} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;