module.exports = {
  siteName: `Gridsome Starter Blog`,
  titleTemplate: `%s - Gridsome`,

  plugins: [
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: '3f74012e80df80ad8fccb8d578f851', // required
        previewMode: false,
        apiUrl: 'https://grido.datocms.com',
        typeName: 'DatoCms'
      }
    }
  ]
}
