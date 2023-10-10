import React from 'react'


interface Movie  {
  backgroundImg: string;
  cardImg: string;
  description: string;
  id: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
  ytLink: string;
};

async function getData(id: string) {

  try {

    const res = await fetch(`https://disney-7a649-default-rtdb.asia-southeast1.firebasedatabase.app/movie/${+id-1}.json`,{ cache: 'no-store'});

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const movies: Movie = await res.json();
    return movies;

  } catch (error) {
  
    console.error('Error fetching data:');
    throw error; 
  }
}




async function detailpage( {params} : {
  params: {id: string}
}) {

 const id = params.id;

  

  const movies = await getData(id)
  //console.log(movies);

  return (
    
    <div className='detailpageContainer'>

      <div className='detailpageBackground'>
          <img src={movies.backgroundImg} alt = "detailpageImage"/>
      </div>

      <div className='detailpageImageTitlt'>
            <img src={movies.titleImg} alt = "monalogo"/>
      </div>

      <div className='detailpageControls'>


        <div className='detailpagePlayButton'>
                <img src = "/images/play-icon-black.png" alt = "playbuttonblack"/>
                <span>PLAY</span>
        </div>

        <div className='detailpageTrailerButton'>
                <img src = "/images/play-icon-white.png" alt = "playbuttonwhite"/>
                <span>TRAILER</span>
        </div>

        <div className='detailpageAddButton'>
                <span>+</span>
        </div>

        <div className='detailpageGroupWatchButton'>
                <img src = "/images/group-icon.png" alt = "groupbutton"/>
        </div>
                
      </div>
        <div className='detailpageSubTitle'>
              {movies.subTitle}
        </div>

        <div className='detailpageDescription'>
              {movies.description}
        </div>
        
    </div>
  )
}

export default detailpage