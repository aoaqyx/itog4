<script>
  const nav = [
    {
      title: "Обо мне",
      href: "/about",
    },
    {
      title: "Блог",
      href: "/blog",
    },
    {
      title: "Портфолио",
      href: "/project",
    },
    {
      title: "Контакты",
      href: "/contact",
    },
    {
      title: "temp",
      href: "/temp",
    },
  ];
</script>

<nav>
  <div class="nav-container">
    <a href="/" class="nav-logo" title="Back to Homepage">Арсений Одинцов</a>
    <div class="nav-links">
      {#each nav as link}
        <a href={link.href} class="link">{link.title}</a>
      {/each}
    </div>
  </div>
</nav>

<div class="container">
  <!-- Pages will be injected below -->
  <slot />
</div>

<style>
  .container {
    max-width: 1400px;
    margin: 50px auto;
  }
</style>
