import React from 'react'
import plays from '../Assets/lottery.json'

const App = () => {
    function checkMultiplePlays(lotteryNumbers, plays) {
        // Ensure lotteryNumbers is an array
        if (!Array.isArray(lotteryNumbers) || !Array.isArray(plays)) {
            throw new Error("Both lotteryNumbers and plays must be arrays.");
        }
    
        // Map over the array of plays
        const results = plays.map((play, index) => {
            const matches = play.filter(num => lotteryNumbers.includes(num));
            return {
                playIndex: index + 1,        // Index of the play (1-based)
                matchedCount: matches.length, // How many numbers matched
                matchedNumbers: matches       // The matched numbers
            };
        });
    
        return results;
    }
    
    // Example Usage
    const lotteryNumbers = [1,17,19,29,50,57]; // Winning numbers
    
    // Array of hundreds of plays
    
    const results = checkMultiplePlays(lotteryNumbers, plays);
    
    // Log the results
    console.log(plays.length/3)
    results.forEach(result => {
        if( result.matchedCount > 1 ){
            console.log(`Play ${result.playIndex}: Matched ${result.matchedCount} numbers ->`, result.matchedNumbers);
        }
    });
    
      
    return (
        <div style={test}>
            {
                results.map((play, index) => {
                    play.matchedCount.length > 1 ?
                    <p>Play {index}: Matched {play.matchedCount} numbers = {play.matchedNumbers}</p>
                    :<span/>
                    
            })
            }
        </div>
    );
};
const test = {
    marginTop: '100px'
}

export default App;
