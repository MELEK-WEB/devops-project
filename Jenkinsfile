pipeline {
    agent any

    triggers {
        // Trigger the pipeline on merges to the "melek" branch
        scm('*/melek')
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
