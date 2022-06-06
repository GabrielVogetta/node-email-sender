const methodNotAllowed = (res) => {
    res.writeHead(405, 'Method Not Allowed', {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    res.end(JSON.stringify({
        status: 405,
        error: true,
        message: 'Method Not Allowed!',
    }));
};

export default methodNotAllowed;