pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
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