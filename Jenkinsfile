pipeline {
     agent any
     stages {
          stage('workspace clean up') {
            steps {
                // Clean before build
                cleanWs()
                // We need to explicitly checkout from SCM here
            }
        }
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/af-frontend"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/af-frontend/"
            }
        }
    }
}