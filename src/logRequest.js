const logRequest = (method, url, host, userAgent) => {
    console.log('\x1b[32m// ===== New Request ===== //\x1b[0m');
    console.log({method: method, url, host, userAgent});
    console.log('\x1b[32m// ======================= //\x1b[0m');
};

export default logRequest;