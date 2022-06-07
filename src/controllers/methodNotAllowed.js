const methodNotAllowed = (res) => {
    
    res.setHeader('Content-Type', 'application/json');

    res.writeHead(405);

    res.end(JSON.stringify({
        status: 405,
        error: true,
        message: 'Method Not Allowed!',
    }));
};

export default methodNotAllowed;