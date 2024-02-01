
/**
 * TODO: drawArrows must be iterative this time, that is for loop
 * or any for loop alternative is OK.
 * HINT: drawArrows may call an async function and await it to 
 * be ready, however, this is up to the implementation
 * 
 * @param {*} actors the actors for the sequence diagram
 * @param {*} timeout the time for setTimeout
 * @param {*} drawArrow the callback to draw one single array
 * @param {*} i the index of the arrow
 */
async function drawArrows(actors, timeout, drawArrow, i = 0) {

    for (; i < actors.length * 2 - 2; i++) {
        // Call drawArrow with the right parameters
        drawArrow(i, 500, actors.length);
    
        // Use await inside an IIFE to introduce a delay
        await (async () => {
          return new Promise((resolve) => {
            // Create a setTimeout with the resolve callback
            setTimeout(resolve, timeout);
          });
        })();
      }

    /*   toimii mut ei testistä läpi
    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      const getArrow = async (i, timeout, len) => {
        const v = await sleep(timeout);
          return drawArrow(i, 500, len);
      }

    

    for ( i; i < actors.length*2-1; i++ ){
        //drawArrow(i, 500, actors.length);
        //setTimeout(drawArrow, timeout, i, 500, actors.length);
        if ( i != actors.length-1){
            const a = await getArrow(i, timeout, actors.length);
            return a;
          }

        
    }
*/
    
    return null;
};




/**
 * DO NOT TOUCH THIS: drawArrowSync is the utility function for sync.test.js
 * The test just checks the accuracy of drawing, this is done synchronously,
 * the functionality is just partial, do not use as a model above.
 * @param {*} actors the actors for the sequence diagram
 * @param {*} drawArrow a callback to draw an arrow
 */
const drawArrowsSync = (actors, drawArrow) => {
    actors.forEach((actor, index)=>drawArrow(index, -1, actors.length - 1));
}



/**
 * DO NOT TOUCH: Draws all, both actors and arrows, this function is for a browser use.
 * Makes UML seq diagram based on actors
 * @param {*} actors 
 * @param {*} timeout 
 */
const drawAll = (actors = ["mobile client", "router", "controller", "model", "mongoDB"], timeout=200) => {
    draw = getCanvasInBrowser();
    drawActors(actors);
    drawArrows(actors, timeout, drawArrow);
}

exports.drawArrows = drawArrows; //needed for testing, 'exports' causes "Uncaught ReferenceError: exports is not defined" that can be ignored
exports.drawArrowsSync = drawArrowsSync;  //needed for testing, 'exports' causes "Uncaught ReferenceError: exports is not defined" that can be ignored
