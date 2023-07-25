pipeline{
    agent any
    options{
        buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '5'))
        timestamps()
    }
    environment{
        
        registry = "sughali/node_docker_trial"
        registryCredential = 'dockerhub'        
    }
    
    stages{
        stage('Clone repository') {
            steps{
               git branch: 'main', url: 'https://github.com/MariyaSughali/my_node.git'
            }
    }
        
       stage('Building image') {
         steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
       stage('Deploy Image') {
      steps{
          bat 'cd C:\\Users\\MariyaSughali\\Desktop\\node_docker_trial'
        bat 'docker login'
         script {
           // docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          //}
        }
      }
    }
}
}

