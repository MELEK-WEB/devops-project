pipeline {
    agent any

    triggers {
        pollSCM('H/15 * * * *')
    }

    stages {
        stage('Debug Environment') {
            steps {
                script {
                    sh 'echo $PATH'
                }
            }
        }

        stage('Build Application') {
            steps {
                script {
                    git url: 'https://github.com/MELEK-WEB/devops-project.git', branch: 'melek'
                   
                        // Assuming 'docker-compose' is executable (chmod +x)
                        sh './docker-compose build'
                    
                }
            }
        }
    }
}
