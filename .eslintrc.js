module.exports = {
    "settings": {
        "import/resolver": {
            "node": {
                "moduleDirectory": [
                    "node_modules",
                    "." // replace with your app-module-path directory
                ]
            }
        }
    },
    "extends": "airbnb-base",
};
