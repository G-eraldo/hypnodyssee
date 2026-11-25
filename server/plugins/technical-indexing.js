export default defineNitroPlugin(nitro => {
  nitro.hooks.hook('beforeResponse', event => {
    const path = getRequestURL(event).pathname
    if (path.endsWith('.md') || path === '/llms.txt' || path === '/llms-full.txt') {
      setResponseHeader(event, 'X-Robots-Tag', 'noindex, follow')
    }
  })
})
