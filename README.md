# CVS_back

## about my approach on the task

I will use a Clean Code Arquitechture, micro service approach, i learn it from the teach lead in my current job, it is a great way to make the code cleaner, easy to follow and easier to unit test; moreover it also sepparate dependencies and replace them will be easier in the future given the case.

Also I plan to CI/CD the app, i have found that atomatitation could be at first, very time consuming but in the long term it makes things easier and also saves a lot of time.<s>

I have never before CD with DigitalOcean and Docker but i found this project like the perfect opportunity to try it out.

I have used multer to handle the parsing of the multipart form to separate the .csv file and the string from the provider. is a handy library the we used in the current project in my work at Geodis.

Also in order to parse the csv file i found another handy library that with the help of the util promisify and lodash pick, it help me to use a configuration file in order to choose what columns do we need as the task text commands.
