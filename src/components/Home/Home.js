<<<<<<< HEAD

=======
>>>>>>> main
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import your CSS file if needed

function Home() {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Health",
      description:
        "Your well-being is non-negotiable. Join us on a path to vitality, where we decode the secrets of holistic health..",
        link: "/category/health",
      },
    {
      image: "https://unsplash.it/502/502/",
      title: "Travel",
      description:
        " Join us in exploring the uncharted, traversing across continents and immersing in cultures",
        link: "/category/travel",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Music",
      description:
        "Let the rhythm guide you as we unravel the melodies that shape cultures and emotions..",
        link: "/category/music"
    },
    {
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Sports",
      description:
        " Get ready to dive into the adrenaline-pumping universe of sports, where victories and defeats transcend..",
        link: "/category/sports",
    },
    {
      image:
        "https://images.unsplash.com/photo-1423742774270-6884aac775fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0JTIwbW9uYWxpc2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Art",
      description:
        "Immerse yourself in a symphony of colors, shapes, and emotions as we journey through the galleries of human creativity..",
        link: "/category/art",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHNjaWVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Science",
      description:
        " Ignite innovation by uncovering the universe`s mysteries...",
        link: "/category/science",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Education",
      description:
        "Empower growth through the transformative power of knowledge...",
        link: "/category/education",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633957897986-70e83293f3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHRlY2hub2xvZ3klMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Technology",
      description:
        "Ignite your tech-savvy side with our cutting-edge coverage, where we demystify the digital realm..",
        link: "/category/technology",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Food",
      description:
        " Embark on a delectable journey as we unravel the world`fs flavors..",
        link: "/category/food",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Fashion",
      description:
        "Step into a realm where style knows no boundaries, and trends are the canvas of self-expression;.",
        link: "/category/fashion",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80/",
      title: "Others",
      description:
        ": Delve into an eclectic mix of topics, where the unexpected takes center stage.",
        link: "/other",
    },
    // Add more card data objects as needed
  ];

  return (
<<<<<<< HEAD
  
=======
  //   <div className="wrapper">
  //     <h1>"Empowering Perspectives, Inspiring Lives."</h1>
  //     <input type="text" className="search-input" placeholder="Search" />

  //     <div className="cols">
  //       {cardsData.map((card, index) => (
  //         <div
  //           className="col"
  //           key={index}
  //           onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}
  //         >
  //           <div className="container">
  //             <div
  //               className="front"
  //               style={{ backgroundImage: `url(${card.image})` }}
  //             >
  //               <div className="inner">
  //                 <p>{card.title}</p>
  //                 <span>Start Blog</span>
  //               </div>
  //             </div>
  //             <div className="back">
  //               <div className="inner">
  //                 <p>{card.description}</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
>>>>>>> main
  <div className="wrapper">
      <h1>"Empowering Perspectives, Inspiring Lives."</h1>
      <input type="text" className="search-input" placeholder="Search" />

      <div className="cols">
        {cardsData.map((card, index) => (
          <div className="col" key={index}>
            <div
              className="container"
              onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}
            >
              <div
                className="front"
                style={{ backgroundImage: `url(${card.image})` }}
              >
<<<<<<< HEAD
                
=======
>>>>>>> main
                  <div className="inner">
                    <p>{card.title}</p>
                    <span>Start Blog</span>
                  </div>
<<<<<<< HEAD
               
              </div>
              <div className="back">
              <Link to={card.link} className="card-link">
=======
              </div>
              <div className="back">
              <Link to={card.link} className="card-link">

>>>>>>> main
                <div className="inner">
                  <p>{card.description}</p>
                </div>
                </Link>
              </div>
             

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;