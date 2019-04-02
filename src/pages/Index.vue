<template>
  <Layout class="home">
    <ul>
      <li v-for="{ node } in $page.allPosts.edges" :key="node.id">
        <router-link :to="`/blog/${post.slug}`">
          <h2 v-html="node.title"/>
        </router-link>
        <!-- <span v-html="node.updatedAt"/> -->
        <div v-html="node.text"/>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allPosts (page: $page) {
      edges {
        node {
          id
          title
          text
          slug
        }
      }
    }
  }
</page-query>

<style scoped>
  .home >>> .heading {
    margin-bottom: 70px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 20px;
  }

  ul li a h2 {
    margin-bottom: 10px;
  }

  span {
    font-size: 80%;
    padding: 0;
  }

  ul li p:first-child {
    margin-top: 3px;
  }

  ul li p {
    margin: 0;
    line-height: 1.5;
  }
</style>