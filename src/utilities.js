export const drawRect = (detections, ctx) =>{
    detections.forEach(predictions=>{
        
        // Get prediction results
        const [x,y,width,height] = predictions['bbox'];
        const text = predictions['class'];
        const accuracy = predictions['score'];

        //Set styling
            // making random bbox color
            // const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        const color = 'red'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color
        ctx.lineWidth = 2

        //Draw rectangles and text
        ctx.beginPath()
        ctx.fillText(text+" , "+accuracy,x,y)
        ctx.rect(x, y, width, height)
        ctx.stroke()
    })
}