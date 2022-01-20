## Small rabbitMQ nodeTS starter

Just a small rabbitMQ starter, which defines the pub/sub architecture used in normal rabbitMQ AMPQ servers.

`./rabbitMq/publisher` connects to rabbitMQ server and publishes to the `jobs` publisher the `job` passed in as an arg.   
`./rabbitMq/consumer` consumes the existing jobs.  

Of course this acts as a small demo of how the whole implementation works and this can be built on as needed.
