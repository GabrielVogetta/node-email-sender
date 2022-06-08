const notFound = (req, res) => {    
    res.writeHead(404, 'Not Found!', {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    return res.end(JSON.stringify({
        status: 404,
        error: true,
        message: 'Not Found!',
    }));
};

export default notFound;