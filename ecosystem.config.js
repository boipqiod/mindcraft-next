module.exports = {
    apps: [
        {
            name: 'mindcraft-web',
            script: '/home/ec2-user/mindcraft-web/node_modules/.bin/next',
            args: 'start',
            env: {
                PORT: 8000,
            },
        },
    ],
};