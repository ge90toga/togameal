This is an ionic app of meal tracker using ionic and angular as from end and heroku, mLab as backend

## Demo

A short demo video is available on [youtube](https://youtu.be/HD4gdzJPhoQ)

## Project Setup

### Ionic Setup
#### 1) Install ionic v1

Please follow https://ionicframework.com/docs/v1/getting-started/ to set up ionic on your computer.

#### 2) Initialise project

```bash
$ ionit start mymeal blank
$ cd mymeal
$ git init
$ git remote add origin https://bitbucket.org/GE90TOGA/mymeal
$ git fetch --all
$ git reset --hard origin/master
```

#### 3) Fix some resource problem

```bash
ionic recources
```

#### 4) Install Cordova camera plugin

```bash
cordova plugin add cordova-plugin-camera
```

## Run
For iOS:
```bash
ionic platform add ios
ionic build ios
ionic emulate ios
```

For Android:
```bash
ionic platform add android
ionic build android
ionic emulate android
```

### Service Setup
Follow this [Blog](https://medium.com/codecraft-tv/how-to-setup-and-use-your-own-parse-server-1ef620787ce9#.t2ereqqmo) 
to setup the serverside for this project.