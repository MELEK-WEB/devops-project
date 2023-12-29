pipeline {
    agent any

    triggers {
        pollSCM('H/15 * * * *')
    }

    stages {
        stage('Build Application') {
            steps {
                script {
                    echo 'Checking out code...'
                    git url: 'https://github.com/MELEK-WEB/devops-project.git', branch: 'melek'
                    echo 'Building application...'
                    sh './docker-compose build'
                }
            }
        }
    }
}
