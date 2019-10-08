#!/bin/bash
echo "Welcome"
read -p "Please enter your Project Name  : " name
echo "Nice"

mkdir ../$name
mkdir ../$name/"client"
mkdir ../$name/"server"

echo "Copying FrontEnd files"
cp -R Data/client/* ../$name/"client"

echo "Copying BackEnd files"
cp -R Data/server/* ../$name/"server"

echo "Preparing FE environment"
cd ../$name/"client"
npm install

echo "Preparing BE environment"
cd ../"server"
npm install

echo "Project is ready to use"
echo "Find FE Project => client"
echo "Find BE Project => server"