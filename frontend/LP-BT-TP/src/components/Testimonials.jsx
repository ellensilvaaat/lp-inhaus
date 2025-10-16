import React, { useState } from 'react';
import '../styles/Testimonials.css';

const reviews = [
  { name: 'Sabino Matera', stars: 5, text: 'The team at InHaus Living have been fantastic. Their comprehensive service makes things much more at reach. The joint process of renovating my apartment has been great and the project was managed with clarity and ease.The whole team had a great can do attitude and also brought a wealth of knowledge and improvements to the project.' },
  { name: 'Rina McBride', stars: 5, text: 'I am extremely happy with my new bathroom renovation, I can not thank the team at Inhaus Living enough. From the beginning concept with John to the end, it was seamless and easy. The team commenced the job while I was overseas, Joe the Project Manager was amazing keeping me up to date and sending regular photos of their progression.' },
  { name: 'Dane Sharp', stars: 5, text: 'Highly recommend Inhaus Living if you are planning a renovation. The entire team did an amazing job - from start to finish. Their support and communication was excellent. They listened, shared their feedback and recommendations, and were great expert collaborators in the endeavour.' },
  { name: 'Ingrid Wagner', stars: 5, text: 'Our beautiful little apartment was in need of a renovation when things finally started to fall apart after nearly 50 years! The team at InHaus (Dora, Richard, and Elias) were great to deal with and accommodated all my requests for bespoke finishes. We removed walls, replaced flooring throughout, replaced the entire kitchen and bathroom.' },
  { name: 'Amy L', stars: 5, text: 'Inhaus was amazing. My first time doing a renovation and John was so patient, answering Amy and all questions I had. Joe (project manager) was amazing, got things going quickly and efficiently. Adapted to changes that I wanted to make and was very prompt in their communication.' },
  { name: 'chris furse-roberts', stars: 5, text: 'I would like to warmly commend John Haklani, Sam Harb and all the team of Inhaus Living for the fantastic renovations they did on my kitchen and bathrooms. John and Sam were a pleasure to deal with and were happy to go out of their way to help.' },
  { name: 'Adam Sime', stars: 5, text: 'I am absolutely thrilled with the results of my new kitchen and engineered flooring installation by InhausLiving! From the initial consultation with Mark to the final touches, their team was professional, attentive, and clearly passionate about quality design and craftsmanship. ' },
  { name: 'Carly Solomon', stars: 5, text: 'My recent kitchen, laundry and floor renovation has transformed my living space into a haven of efficiency and style. From the start John was amazing, responsive and nothing was a problem. Sam my project manager is the absolute best answered every silly, small question or concern I had.' },
  { name: 'EC Fitzgib', stars: 5, text: 'The Inhaus Living team installed a beautiful bathroom for us. From the first meeting with Joe who helped with the design and selection of finish; to Dora who made everything run smoothly; to Sam who managed every aspect of the works for us, we were made to feel consistently comfortable that we were in the best of hands.' },
  { name: 'Bernice Kaplan', stars: 5, text: 'Highly recommend using Inhaus Living, John was great to begin the process and a special thanks to Elias, project manager and his team for the renovation of my entire two bedroom unit, from floor to ceiling and everything in-between.' },
  { name: 'Mark McAlary', stars: 5, text: 'Sam, Mark and team did an excellent job on updating an old kitchen, including structural work. The design is intuitive and functional, the work was done with good quality workmanship and completed in good time and within budget. They were very responsive and communicative with honest suggestions and positive attitude throughout.' },
  { name: 'Anke Vuletic', stars: 5, text: 'Inhaus Living has done an extensive renovation on my 1929 apartment. Full kitchen, bathroom, and more. As it happens 1929 buildings provide interesting challenges in a lot of areas you will not find on a more recent build. But no challenge was too big or complex for the team to resolve. ' },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex(prev =>
      prev + itemsPerPage >= reviews.length ? 0 : prev + itemsPerPage
    );
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What people say</h2>
        <p>Discover what our satisfied customers have to say about their experience with our services.</p>
      </div>

      <div className="testimonial-carousel">
        <button className="arrow left" onClick={handlePrev}>&lt;</button>

        <div className="testimonial-wrapper">
          {visibleReviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <h3>{review.name}</h3>
              <div className="stars">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className={i < review.stars ? 'filled' : ''}>★</span>
                ))}
              </div>
              <p>{review.text}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
};

export default Testimonials;

