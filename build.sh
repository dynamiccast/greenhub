npm install
cd front
npm install
bower install --allow-root
ember build --environment=production --output-path=../assets/

rm -rf node_modules bower_components
