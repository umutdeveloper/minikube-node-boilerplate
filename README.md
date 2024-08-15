# Minikube Node App Deployment Boilerplate

This guide will help you set up and deploy a Node.js application on Kubernetes using Minikube. The instructions below cover both Windows and macOS environments.

## Requirements

- Docker
- kubectl
- Minikube

## Docker Setup

### macOS
1. Download and install Docker Desktop for Mac from the [official Docker website](https://www.docker.com/products/docker-desktop).
2. Once installed, start Docker Desktop from your Applications folder.

### Windows
1. Download and install Docker Desktop for Windows from the [official Docker website](https://www.docker.com/products/docker-desktop).
2. After installation, start Docker Desktop from the Start Menu.

## Kubectl Setup

### macOS
1. Install kubectl using Homebrew:
   ```bash
   brew install kubectl
   ```

### Windows
1. First, install Chocolatey if you haven't already.
2. Open an administrative command prompt and run:
   ```bash
   choco install kubernetes-cli
   ```

## Minikube Setup

### macOS
1. Install Minikube using Homebrew:
   ```bash
   brew install minikube
   ```
2. Start Minikube:
   ```bash
   minikube start
   ```

### Windows
1. Install Minikube using Chocolatey:
   ```bash
   choco install minikube
   ```
2. Start Minikube:
   ```bash
   minikube start
   ```

## Build the Docker Image

### macOS
1. Run the following command in the source folder to configure Docker to use Minikube's Docker daemon:
   ```bash
   eval $(minikube docker-env)
   ```
2. Build the Docker image:
   ```bash
   docker build -t basicnodeapp .
   ```

### Windows
1. Open PowerShell and run the following command in the source folder to configure Docker to use Minikube's Docker daemon:
   ```bash
   minikube docker-env | Invoke-Expression
   ```
2. Build the Docker image:
   ```bash
   docker build -t basicnodeapp .
   ```

## Deploy the App to Kubernetes

### macOS & Windows
1. Apply the deployment configuration:
   ```bash
   kubectl apply -f deployment.yaml
   ```
2. Apply the service configuration:
   ```bash
   kubectl apply -f service.yaml
   ```

## Access the App through Minikube

### macOS & Windows
1. Open the Node.js application in your browser:
   ```bash
   minikube service basicnodeapp-service
   ```

This command will launch your default browser and navigate to the Node.js app running on Minikube.
