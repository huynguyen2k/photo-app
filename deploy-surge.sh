# run build react app
npm run build

# move into build folder
cd build

# clone index.html into 200.html
cp index.html 200.html

# deploy current folder to domain huynguyen-photo-app.surge.sh
surge . huynguyen-photo-app.surge.sh
