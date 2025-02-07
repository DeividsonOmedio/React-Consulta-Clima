function ResponseWeather({city, country, temp, description, icon, humidity, speed}){
    console.log(speed)
    let apiContry = "https://flagsapi.com"
    return(
        <>
            <div className="Row">
                <h4>{city} </h4> 
                <img src={`${apiContry}/${country}/flat/64.png`} alt={`${country} flag`} width={32}/>
            </div>
            <div>{temp}&deg;C</div>
            <div className='Row'>
                <div>{description}</div> 
                <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={`${description}`} width={48}/>
            </div>
                <div className="Row">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
                </svg>
                <p>{humidity}%</p>
                <small>|</small> 
                <p>{speed}Km/h</p>
            </div>
        </>
    )
}
export default ResponseWeather;