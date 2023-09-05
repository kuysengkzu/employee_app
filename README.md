## Build image
```bash
docker build -t kuyseng/employee_app .
docker push kuyseng/employee_app
```

## Run
```bash
docker-compose up -d
```

### Delete all
- we should not scale mongo (stateful app) with replicas > 1


```bash
kdeld $( kgd | awk 'NR!=1 {print $1}' | xargs )
kdels $( kgs | awk '$1!="kubernetes" {print $1}' | awk 'NR!=1 { print }' | xargs )
```
### Logs
- see logs in dashboard
```bash
kubectl get pods  # get pod names
kubectl exec --stdin --tty PodNAME -- sh

# restart to get latest image
kubectl rollout restart deployment/employee-app
```


DRIVE LINK - CREATE A FOLDER[FOLDER NAME WILL BE YOUR KU ID. example - CC017] AND PUT YOUR/SCREENSHOT/CODE/DOCKER FILE/YAML etc

https://drive.google.com/drive/folders/17VGcfSGyLuQt1yg6OtvE0dF_rEK_FmJv?usp=drive_link

Note - After completing each type problem, please call for checking. After checking upload screen shot/code/dockerfile/yaml file etc in the following drive.

BEFORE CHECKING DON'T UPLOAD IN THE DRIVE.
--------------------------------------------------------------------------------------
Easy [ANY One]
1. Create 3 Express Web Server. Use Nginx for Load Balencer. Send multiple request and show that response comes from the different Web Server.

2. Display Documents from MongoDB Cloud using Grafana Cloud.

3. Display Container Load Balence using Docker Swarm Visualizer in docker play ground with the help of Scale and drain.

***************************************************************************************
Medium [ANY One]
1. Create REST API for get and Post using node JS and these APIs will return JSON. Create Image and Push it in the docker hub. Then deploy it in the minikube cluster. Call those API from postman and display result.

2. Create REST API for login check using node JS and these APIs will return JSON. Create Image and Push it in the docker hub. Then deploy it in the minikube cluster. Call those API from postman and display result.
If predefined userid and password match return Login Success else Invalid uid or Pass
***************************************************************************************
Hard [ANY One]
1. Create REST API for add record in the mongodb cloud database using node JS and these APIs will return JSON. Create Image and Push it in the docker hub. Then deploy it in the minikube cluster. Call that API from postman and display result.

2. Any read/write in the persistent volume in the Kubernetes cluster using containers.
***************************************************************************************
