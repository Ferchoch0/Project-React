import { useState} from "react"

export function BirdFavorite ({birdname, birdstate}){
    const [birdfollow, setbirdfollow] = useState(false)
    const handleCheckboxChange = () => {
        setbirdfollow(!birdfollow);
      };
    
    

    return(
    
      <article className='am-birdfavorite'>
            <img src={`https://unavatar.io/${birdname}`} alt="BirdAvatar" className='am-birdfavorite-item' />
            <h1 className='am-birdcard-header' style={{padding: '1rem'}}>{birdname}</h1>
            <span className="am-birdfavorite-buttons">
                <button className="am-birdcard-pay"> Buy </button>
                <label className="am-container-follow" chacked={birdfollow} onChange={handleCheckboxChange}>
                    <input type="checkbox" name="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                   </svg>
                </label>
            </span>
       </article>
        
    )
}