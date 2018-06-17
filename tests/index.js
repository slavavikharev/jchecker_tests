const fs = require('fs-extra')
const path = require('path')

const fetchFiles = async (taskDir) => {
    try {
        console.log('Trying to fetch files from %s', taskDir)
        return await fs.readdir(taskDir)
    } catch (err) {
        console.error('Cannot read directory for some reason')
        console.error('\t', err)
        return null
    }
}

const getIndexFile = (files) => {
    switch (files.length) {
        case 0:
            return null
        case 1:
            return files[0]
        default:
            return (
                files
                .filter(f => f.startsWith('index.'))
                .slice(-1)
                .pop()
            ) || null
    }
}

const fetchIndexFile = async (indexFilePath) => {
    try {
        console.log('Trying to fetch index file from %s', indexFilePath)
        return await fs.readFile(indexFilePath)
    } catch (err) {
        console.error('Cannot fetch file for some reason')
        console.error('\t', err)
        return null
    }
}

const getTester = async (taskName) => {
    try {
        console.log('Trying to get tester for task %s', taskName)
        return await require(path.resolve(path.join('./tests', taskName)))
    } catch (err) {
        console.error('Cannot get tester for some reason')
        console.error('\t', err)
        return null
    }
}

module.exports = async (taskName, taskDir) => {
    let files = await fetchFiles(taskDir)
    if (!files) {
        console.info('No files, so do nothing')
        return
    } else {
        console.info('Fetched %i file(s)', files.length)
    }

    let indexFile = getIndexFile(files)
    if (!indexFile) {
        console.info('Cannot find index file, so do nothing')
        return
    } else {
        console.info('Use %s as index file', indexFile)
    }

    let indexFilePath = path.join(taskDir, indexFile)
    let indexFileBody = await fetchIndexFile(indexFilePath)
    if (!indexFileBody) {
        console.info('No content, so do nothing')
        return
    } else {
        console.info('Index file fetched')
    }

    let tester = await getTester(taskName)
    if (!tester) {
        console.info('Cannot get tester, so do nothing')
        return
    } else {
        console.info('Tester found for task %s', taskName)
    }

    return tester({
        body: indexFileBody,
        path: indexFilePath,
        dir: taskDir
    })
}
