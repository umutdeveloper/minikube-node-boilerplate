# Requirements

- Docker
- kubectl
- Minikube

## Docker Setup
Install Docker Desktop from the official website.

## Kubectl Setup (Windows)
Install choco first for command line installation support.

Run this command in the administrative command line;
`choco install kubernetes-cli`

## Minikube Setup (Windows)
Run this command in the administrative command line;
`choco install minikube`

Start the minikube
`minikube start`

## Build the Docker image (Windows)
Run these commands in the source folder;
`minikube docker-env | Invoke-Expression` (This works only on Powershell)
`docker build -t basicnodeapp .`

## Distribute the app to Kubernetes
Run these commands in the command line;
`kubectl apply -f deployment.yaml`
`kubectl apply -f service.yaml`

## Access the app through Minikube
Run this command in the command line; it should open the node app in the browser.
`minikube service basicnodeapp-service`