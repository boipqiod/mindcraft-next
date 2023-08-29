module.exports = {
    apps: [
        {
            name: 'mindcraft-web',
            script: 'next',
            args: 'start -p $PORT',
            env: {
                PORT: 8000,
            },
        },
    ],
};