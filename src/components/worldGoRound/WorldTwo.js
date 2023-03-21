import React from "react"
class WorldTwo extends React.Component{
render(){
    return(
    <div className='container-world-down'>
    <div className='top-part-world'>
        <div className='stats-one'>
            <p className='tinted-text'>Circulating Supply</p>
            <h1 className='full-text'>166,580,157</h1>
        </div>
        <div className='stats-two'>
            <p className='tinted-text testing'>Total supply</p>
            <h1 className='full-text testing'>366,858,290</h1>
        </div>
        <div className='stats-three'>
            <p className='tinted-text testing'>Max Supply</p>
            <h1 className='full-text testing'>750,000,000 </h1>
        </div>
    </div>
    <div className='bot-part-world'>
        <div className='stats-one'>
            <p className='tinted-text'>Market Cap</p>
            <h1 className='full-text'>$640 million</h1>
        </div>
        <div className='stats-two'>
            <p className='tinted-text testing'>Burned to date</p>
            <h1 className='full-text testing'>730,148,902</h1>
        </div>
        <div className='stats-three'>
            <p className='tinted-text testing'>Current emissions</p>
            <h1 className='full-text testing'>9.9/block</h1>
        </div>
    </div>
</div>
)
}


}

export default WorldTwo;