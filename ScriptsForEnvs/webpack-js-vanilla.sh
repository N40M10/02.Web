#!/bin/bash
#
# BARS
VAR1=$1

################################################################################
################################################################################
############ PLANIFICACION
################################################################################
################################################################################
#

################################################################################
############ REQUERIMIENTOS
################################################################################
#

################################################################################
############ SCRUM
################################################################################
#

################################################################################
############ TECH
################################################################################
#

############  ##################################################################
#

############
#

######
#

################################################################################
############ ARQUITECTURE
################################################################################
#

printf "
--------------------------------------------------------------------------------
    CREANDO ARQUITECTURA...
--------------------------------------------------------------------------------
"

############ TECH ##################################################################
#

############ HTML
#

######
#

#

############ CSS
#

###### PRINCIPIOS
#

# SOLID
#
# DRY
#
# INMUTABILITY
#

###### METODOLOGIA
#

# BEM
#

###### ARQUITECTURA
#

# ATOMIC DESING
#
# SMACSS
#

###### PREPROCESADORES
#

# SASS
#
# STYLUS
#

###### FRAMEWORKS
#

# TAILWIND
#
# PURECSS
#
# CSSModules
#
# Vanilla-extract
#

############ JS
#

###### BUILDTOOLS
#

# VITE
#
# WEBPACK
#
# SWC
#
# ESBUILD
#

###### TEST
#

# JEST
#
# PLAYWRITE
#
# CYPRESS
#
# VITEST
#

###### FRAMEWORKS
#

# REACT
#
# VUE
#
# SOLID
#
# SVELT
#


###### RENDERING FRAMEWORK
#

# SVELT
#
# NEXT
#
# ASTRO
#
# NUXT
#

###### MOBILE DESKTOP
#

# TAURI
#
# REACT NATIVE
#
# ELECTRON
#
# NATIVE APPS
#

############ WASM
#

######
#

#

############ DIRS & FILES ##########################################################
#

mkdir -p "$VAR1"/{server,public,src/{App,Assets/{images,fonts},Pages/{Home,User,NotFound},Layout,Components/{Header,Main,Footer,Navbar,Navuser,Linktree,Logo,Inputbar,Breadcrumb}}}

touch "$VAR1"/public/index.html
echo '
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
 </head>
 <body>
 </body>
 </html>
' > "$VAR1"/public/index.html
sed -i '1d' "$VAR1"/public/index.html
sed -i '$d' "$VAR1"/public/index.html

touch "$VAR1"/src/App/{App.js,App.test.js,App.scss}
touch "$VAR1"/src/Layout/{index.js,index.test.js,index.scss}

for DIR in "$VAR1"/src/Pages/*; do
    touch "$DIR"/{index.js,index.test.js,index.css}
done
for DIR in "$VAR1"/src/Components/*; do
    touch "$DIR"/{index.js,index.test.js,index.scss}
done

touch "$VAR1"/src/{index.js,index.css}
touch "$VAR1"/README.md

cp -r ./images/* "$VAR1/src/Assets/images"
cp -r ./fonts/* "$VAR1/src/Assets/fonts"

tree "$VAR1"
cd "$VAR1" || exit

############ ENVIRONMENT ###########################################################
#

############ INIT
#

npm init -y

############ EMPAQUETADOR
#

###### WEBPACK
#

sed -i '/"test"/ s/$/,/' package.json
sed -i '/"test"/a\    "build": "webpack --config webpack.config.js"' package.json
sed -i '/"test"/a\    "dev": "webpack --config webpack.config.dev.js",' package.json
sed -i '/"test"/a\    "start": "webpack serve --config webpack.config.dev.js",' package.json

npm install --save-dev webpack webpack-cli webpack-dev-server

# WEBPACK PRODUCCION CONFIG
#

echo '
const path = require('"'path'"')
const HtmlWebpackPlugin = require('"'html-webpack-plugin'"')
const MiniCssExtractPlugin = require('"'mini-css-extract-plugin'"')
const CopyPlugin = require('"'copy-webpack-plugin'"')
const CssMinimizerPlugin = require('"'css-minimizer-webpack-plugin'"')
const TerserPlugin = require('"'terser-webpack-plugin'"')
const Dotenv = require('"'dotenv-webpack'"')
const { CleanWebpackPlugin } = require('"'clean-webpack-plugin'"')

module.exports = {
    entry: '"'./src/index.js'"',
    output: {
        path: path.resolve(__dirname, '"'dist'"'),
        filename: '"'[name].[contenthash].js'"',
        assetModuleFilename: '"'assets/images/[hash][ext][query]'"'
    },
    mode: '"'production'"',
    resolve: {
        extensions: ['"'.js'"'],
        alias: {
        '"'@images'"': path.resolve(__dirname, '"'src/Assets/images/'"'),
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: '"'babel-loader'"'
                }
            },
            {
                test: /\.(css|s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,
                    '"'css-loader'"',
                    '"'sass-loader'"'
                ],
            },
            {
                test: /\.png/,
                type: '"'asset/resource'"'
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: '"'url-loader'"',
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "[name].[contenthash].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "./assets/fonts/",
                        esModule: false,
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: '"'./public/index.html'"',
            filename: '"'./index.html'"'
        }),
        new MiniCssExtractPlugin({
            filename: '"'assets/[name].[contenthash].css'"'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '"'src'"', '"'Assets/images'"'),
                    to: '"'assets/images'"'
                }
            ]
        }),
        new Dotenv(),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
}
' > webpack.config.js
sed -i '1d' ./webpack.config.js
sed -i '$d' ./webpack.config.js


###### WEBPACK DEV CONFIG
#

echo '
const path = require('"'path'"')
const HtmlWebpackPlugin = require('"'html-webpack-plugin'"')
const MiniCssExtractPlugin = require('"'mini-css-extract-plugin'"')
const CopyPlugin = require('"'copy-webpack-plugin'"')
const CssMinimizerPlugin = require('"'css-minimizer-webpack-plugin'"')
const TerserPlugin = require('"'terser-webpack-plugin'"')
const Dotenv = require('"'dotenv-webpack'"')

module.exports = {
    entry: '"'./src/index.js'"',
    output: {
        path: path.resolve(__dirname, '"'dist'"'),
        filename: '"'[name].[contenthash].js'"',
        assetModuleFilename: '"'assets/images/[hash][ext][query]'"'
    },
    mode: '"'development'"',
    devtool: '"'source-map'"',
    resolve: {
        extensions: ['"'.js'"'],
        alias: {
        '"'@images'"': path.resolve(__dirname, '"'src/Assets/images/'"'),
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: '"'babel-loader'"'
                }
            },
            {
                test: /\.css|.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,
                    '"'css-loader'"',
                    '"'sass-loader'"'
                ],
            },
            {
                test: /\.png/,
                type: '"'asset/resource'"'
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: '"'url-loader'"',
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "[name].[contenthash].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "./assets/fonts/",
                        esModule: false,
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: '"'./public/index.html'"',
            filename: '"'./index.html'"'
        }),
        new MiniCssExtractPlugin({
            filename: '"'assets/[name].[contenthash].css'"'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '"'src'"', '"'Assets/images'"'),
                    to: '"'assets/images'"'
                }
            ]
        }),
        new Dotenv(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
    devServer: {
        static: {
         directory: path.join(__dirname, '"'dist'"'),
        },
        compress: true,
        historyApiFallback: true,
        watchFiles: ['"'^[^.]./*$'"'],
        hot: false,
        liveReload: true,
        server: '"'https'"',
        port: 3000,
        open: true
    }
}
' > webpack.config.dev.js
sed -i '1d' ./webpack.config.dev.js
sed -i '$d' ./webpack.config.dev.js

# BABEL
#

echo '
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-transform-private-property-in-object"
    ]
}
' > ./.babelrc
sed -i '1d' ./.babelrc
sed -i '$d' ./.babelrc
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/plugin-transform-private-property-in-object

# HTML
#

npm install --save-dev html-webpack-plugin

# CSS
#

npm install --save-dev mini-css-extract-plugin css-loader

# SASS
#

npm install --save-dev sass-loader sass

# COPY FILES & IMAGE LOADER
#

npm install --save-dev copy-webpack-plugin

# FONTS
#

echo '
@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: normal;
  font-weight: 100;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-100.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: italic;
  font-weight: 100;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-100italic.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: normal;
  font-weight: 200;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-200.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: italic;
  font-weight: 200;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-200italic.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: normal;
  font-weight: 300;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-300.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: italic;
  font-weight: 300;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-300italic.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: normal;
  font-weight: 400;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-regular.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: italic;
  font-weight: 400;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-italic.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: normal;
  font-weight: 500;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-500.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: italic;
  font-weight: 500;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-500italic.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: normal;
  font-weight: 600;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-600.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: italic;
  font-weight: 600;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-600italic.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: normal;
  font-weight: 700;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-700.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: italic;
  font-weight: 700;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-700italic.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: normal;
  font-weight: 800;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-800.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: italic;
  font-weight: 800;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-800italic.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: normal;
  font-weight: 900;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-900.woff2'"') format('"'woff2'"');
}

@font-face {
  font-display: swap;
  font-family: '"'Noto Sans'"';
  font-style: italic;
  font-weight: 900;
  src: url('"'./Assets/fonts/noto-sans-v30-latin-900italic.woff2'"') format('"'woff2'"');
}
' > ./src/index.scss
sed -i '1d' ./src/index.scss
sed -i '$d' ./src/index.scss

npm install --save-dev url-loader file-loader

# OPTIMIZATION: HASH, COMPRESSION AND MINIMIZE FILES
#

npm install --save--dev css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin

# ALIAS
#

npm install --save--dev css-minimizer-webpack-plugin terser-webpack-plugin

# VARIABLES DE ENTORNO
#

# Las variasbles de entorno nunca deben ser dubidas al repositorio,
# se crea un env de manera local y un .env-example que si se sube
# al repositorio, la primer, .env la usamos de manera local,
# los .env en un grupo de trabajo simpre se piden.
# Esto es asi porque usamos datos sensibles en estos documentos.

echo '
// call this api using a getData.js
API="Your apu"
' > .env
sed -i '1d' ./.env
sed -i '$d' ./.env

echo '
// call this api using a getData.js
API="Your API"
' > .env-example
sed -i '1d' ./.env-example
sed -i '$d' ./.env-example

npm install dotenv-webpack

############ TEST
#

#eslint
#"eslint": "^8.45.0",
#"eslint-plugin-react": "^7.32.2",
#"eslint-plugin-react-hooks": "^4.6.0",
#"eslint-plugin-react-refresh": "^0.4.3",
#JEST

############ GIT
#

git init
echo "
# Created by https://www.toptal.com/developers/gitignore/api/linux,windows,macos,node,visualstudiocode,vim
# Edit at https://www.toptal.com/developers/gitignore?templates=linux,windows,macos,node,visualstudiocode,vim

### Linux ###
*~

# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*

# KDE directory preferences
.directory

# Linux trash folder which might appear on any partition or disk
.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
.nfs*

### macOS ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon
Icon


# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### macOS Patch ###
# iCloud generated files
*.icloud

### Node ###
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of npm pack
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*

### Node Patch ###
# Serverless Webpack directories
.webpack/

# Optional stylelint cache

# SvelteKit build / generate output
.svelte-kit

### Vim ###
# Swap
[._]*.s[a-v][a-z]
!*.svg  # comment out if you dont need vector files
[._]*.sw[a-p]
[._]s[a-rt-v][a-z]
[._]ss[a-gi-z]
[._]sw[a-p]

# Session
Session.vim
Sessionx.vim

# Temporary
.netrwhist
# Auto-generated tag files
tags
# Persistent undo
[._]*.un~

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix

### VisualStudioCode Patch ###
# Ignore all local history of files
.history
.ionide

### Windows ###
# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
\$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk

# End of https://www.toptal.com/developers/gitignore/api/linux,windows,macos,node,visualstudiocode,vim
" > .gitignore
sed -i '1d' .gitignore
sed -i '$d' .gitignore

git status && git add . && git commit -m "Dirs, Files y Environment creados, el siguiente paso y commit debe ser Base Code" && git status && git --no-pager log --decorate=short --pretty=oneline -n1

# ########## BASE CODE #########################################################
#

############ TEMPLATE
#

sed -i '/<body>/a\    <div id="main">\n    </div>' ./public/index.html

echo "
import img from '@images/img.png'

const Layout = () => {
    const view = \`
    <h1>
        Vivimos en una sociedad profundamente dependiente de la ciencia y la tecnología y en la que nadie sabe nada de estos temas. Ello constituye una fórmula segura para el desastre. (Carl Sagan)
    </h1>
    <img src=\"\${img}\" alt=\"Linux\"/>
    \`
    return view
}

export default Layout
" > ./src/Layout/index.js
sed -i '1d' ./src/Layout/index.js
sed -i '$d' ./src/Layout/index.js

echo "
import Template from './Layout/index.js'
import './index.scss'

(function App() {
    const main = null || document.getElementById('main')
    main.innerHTML = Template()
})()
" > ./src/index.js
sed -i '1d' ./src/index.js
sed -i '$d' ./src/index.js

echo '
* {
    font: italic Black "Noto Sans", sans-serif;
    box-sizing: border-box;
}
html, body {
    max-width: 100vw;
    height: auto;
}
#main {
    width: 100%;
    height: auto;
/*    padding: 20px 40px;*/
    padding: 40px;
}

img{
    width: 100%;
    height: auto;
}
h1 {
    font-size: 24px;
    margin: 0 0 40px 0;
}
' >> ./src/index.scss

############ COMMIT
#

git status && git add . && git commit -m "Base Code a sido agregado, el proyecto esta listo para iniciar a codear" && git status && git --no-pager log --decorate=short --pretty=oneline -n1
git branch main-develop-branch && git checkout main-develop-branch && git --no-pager log --decorate=short --pretty=oneline -n1
npm run start

printf "
--------------------------------------------------------------------------------
    CREANDO ARQUITECTURA...
--------------------------------------------------------------------------------
"




################################################################################
################################################################################
############ DISEÑO
################################################################################
################################################################################
#

################################################################################
############
################################################################################
#

################################################################################
############
################################################################################
#

################################################################################
############
################################################################################
#

################################################################################
############
################################################################################
#

############  ##################################################################
#

############
#

######
#




################################################################################
################################################################################
############ IMPLEMENTACION
################################################################################
################################################################################
#

################################################################################
############ FUNCTIONS
################################################################################
#

################################################################################
############ CODE
################################################################################
#

################################################################################
############ BUILD
################################################################################
#

################################################################################
############ TEST
################################################################################
#

############  ##################################################################
#

############
#

######
#




################################################################################
################################################################################
############ MANTENIMIENTO
################################################################################
################################################################################
#

################################################################################
############ RELASE
################################################################################
#

################################################################################
############ DEPLOY
################################################################################
#

################################################################################
############ OPERATE
################################################################################
#

################################################################################
############ MONITOR
################################################################################
#

############  ##################################################################
#

############
#

######
#
