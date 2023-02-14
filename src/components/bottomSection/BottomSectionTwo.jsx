import React from 'react';

class BottomSectionTwo extends React.Component {
  render() {
    return (
    <div className='container-world'>
        <div className='container-world-up'>
            <div id='world-left-part'>

            </div>
            <div id='world-right-part'>

            </div>
        </div>
        <div className='container-world-down'>
            <div className='top-part-world'>
                <div>
                    <p className='tinted-text'>Circulating Supply</p>
                    <h1 className='full-text'>166,580,157</h1>
                </div>
                <div>
                    <p className='tinted-text'>Total supply</p>
                    <h1 className='full-text'>366,858,290</h1>
                </div>
                <div>
                    <p className='tinted-text'>Max Supply</p>
                    <h1 className='full-text'>750,000,000 </h1>
                </div>
            </div>
            <div className='bot-part-world'>
                <div>
                    <p className='tinted-text'>Market Cap</p>
                    <h1 className='full-text'>$640 million</h1>
                </div>
                <div>
                    <p className='tinted-text'>Burned to date</p>
                    <h1 className='full-text'>730,148,902</h1>
                </div>
                <div>
                    <p className='tinted-text'>Current emissions</p>
                    <h1 className='full-text'>9.9/block</h1>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default BottomSectionTwo;
