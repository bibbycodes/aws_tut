module.exports = {
  apps: [{
    name: 'aws_tut',
    script: 'index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-16-24-158.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/aws_first.pem',
      ref: 'origin/master',
      repo: 'git@github.com:bibbycodes/aws_tut.git',
      path: '/home/ubuntu/aws_tut',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}