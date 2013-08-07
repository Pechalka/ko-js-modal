var jam = {
    "packages": [
        {
            "name": "jquery",
            "location": "javascrips/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "javascrips/knockout",
            "main": "knockout.js"
        },
        {
            "name": "knockout.mapping",
            "location": "javascrips/knockout.mapping",
            "main": "knockout.mapping.js"
        },
        {
            "name": "Knockout.Validation",
            "location": "javascrips/Knockout.Validation",
            "main": "Src/knockout.validation.js"
        }
    ],
    "version": "0.2.17",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "jquery",
            "location": "javascrips/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "javascrips/knockout",
            "main": "knockout.js"
        },
        {
            "name": "knockout.mapping",
            "location": "javascrips/knockout.mapping",
            "main": "knockout.mapping.js"
        },
        {
            "name": "Knockout.Validation",
            "location": "javascrips/Knockout.Validation",
            "main": "Src/knockout.validation.js"
        }
    ],
    "shim": {}
});
}
else {
    var require = {
    "packages": [
        {
            "name": "jquery",
            "location": "javascrips/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "knockout",
            "location": "javascrips/knockout",
            "main": "knockout.js"
        },
        {
            "name": "knockout.mapping",
            "location": "javascrips/knockout.mapping",
            "main": "knockout.mapping.js"
        },
        {
            "name": "Knockout.Validation",
            "location": "javascrips/Knockout.Validation",
            "main": "Src/knockout.validation.js"
        }
    ],
    "shim": {}
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}