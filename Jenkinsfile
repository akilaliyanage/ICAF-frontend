pipeline {
     agent any
     stages {
         
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "pwd"
                sh "ls -lrth"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/af-frontend"
                sh "cp -r ${WORKSPACE}/dist/ /var/www/af-frontend/"
            }
        }
        stage('workspace clean up') {
            steps {
                // Clean before build
                cleanWs()
                // We need to explicitly checkout from SCM here
            }
        }
        
    }
}