const path = require("path");

module.exports={
    
    mode: "development", 
    
    entry: "./index.js", 
    output: {
        
        path: path.resolve(__dirname, "public"),
        
        filename: "main.js"
    },
    
    target: "web",
    devServer: {        
        port: "3001",        
        static: ["./public"],        
        open: true,        
        hot: true ,        
        liveReload: true
    },
    resolve: {
        
        extensions: ['*', '.js','.jsx','.json'] 
    },
    module:{
        
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                              '@babel/react',{
                              'plugins': ['@babel/plugin-proposal-class-properties']}]
                }
            },
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
            },
        ]
    }
}