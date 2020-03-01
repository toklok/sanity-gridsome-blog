<template>
  <Layout :show-logo="false">
    <h1>Hello World</h1>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About me',
    meta: [
      { name: 'author', content: 'John Doe' },
      { name: 'keywords', content: 'HTML,CSS,XML,JavaScript' }
    ]
  }
}
</script>