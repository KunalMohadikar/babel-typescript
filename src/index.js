if(process.env.DEV_ENV === 'true'){
    require("@babel/register")({extensions: ['.js', '.ts']});
    require("./app");
} else {
    require('../dist/app');
}