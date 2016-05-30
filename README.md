# Greenhub

Greenhub is a simple web application to give people more insight on how much resources the web can use.
It was developed during the Valtech hackathon which topic was about *pollution* (http://hackathon.valtech.fr/) #HackValtech

This application is developped with *Ember.js* and *Sails.js*. It uses *sails-generate-ember-blueprints* to bind the backend and the frontend together.

Greenhub is a webpage where everyone who is connected can see the estimated global footprint of the group.

![Alt text](//screenshot.png?raw=true "Greenhub screenshot")

# Run greenhub at home

A public Docker Image of greenhub is available on the Docker Hub. If you wish to run it quickly just type:

````
docker run -p 80:1337 dynamiccast/greenhub
````

# Build from repository

A Dockerfile is available to build the app from scratch.

````
docker build -t greenhub .
docker run -p 80:1337 greenhub
````

# One more thing

There is an easter egg hidden in the app ;)
