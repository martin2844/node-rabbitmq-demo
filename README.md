## Small rabbitMQ nodeTS starter

Just a small rabbitMQ starter, which defines the pub/sub architecture used in normal rabbitMQ AMPQ servers.

`./rabbitMq/publisher` connects to rabbitMQ server and publishes to the `jobs` publisher the `job` passed in as an arg.   
`./rabbitMq/consumer` consumes the existing jobs.  

Of course this acts as a small demo of how the whole implementation works and this can be built on as needed.

## To run
Of course you need node and typescript, but also rabbitMQ.
This can be done easily with docker:
`docker container run --name rabbitNode -p 5672:5672 --detach rabbitmq`

**--name**: is the name of the docker container, its up to you.   
**-p**: is the ports you are running and exposing for this container.  
**--detach**: runs the container in the background  
**rabbitmq**:  this final argument is the image that will be used, in this case rabbitmq:latest  
