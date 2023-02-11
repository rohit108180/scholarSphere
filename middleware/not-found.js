 const notFoundMiddleWare = (req, res) =>{
    res.status(404).send("This page is not found ");
}


export default notFoundMiddleWare;