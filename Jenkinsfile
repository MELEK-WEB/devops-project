pipeline {
    agent any

    triggers {
        pollSCM('H/15 * * * *') // Polls the SCM every 15 minutes (adjust as needed)
    }

    stages {
        stage('Build Application') {
            steps {
                script {
                    git 'https://github.com/MELEK-WEB/devops-project.git'
                    sh 'docker-compose -f docker-compose.yml build'
                }
            }
        }
    }
}
