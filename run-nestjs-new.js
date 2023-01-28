#!/usr/bin/env node
const { spawn } = require('child_process')
const path = require('path')

// Arguments to forward to the @nestjs/cli 'new' command
const args = process.argv.slice(2)

spawn('npx', ['@nestjs/cli@latest', 'new', ...args], {
    stdio: 'inherit',
    shell: true,
    cwd: process.cwd(),
})
