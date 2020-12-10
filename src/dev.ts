import TscWatchClient from 'tsc-watch/client'
import path from 'path'

const watch = new TscWatchClient()

watch.on('success', () => {
  const [, , folder] = process.argv
  require(path.join(__dirname, '../dist/challenges', folder, `${folder}.js`))
})
watch.start('--project', '.')

try {
  // do something...
  console.log('something')
} catch (e) {
  watch.kill() // Fatal error, kill the compiler instance.
}
