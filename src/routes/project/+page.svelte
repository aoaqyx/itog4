<svelte:head>
 <title>Портфолио</title>
</svelte:head>

<div class='container'>
 <h1>Мои проекты</h1>
 <div class='apps'>
  {#each routes as page}
   <div class='app'>
    <h2>{page.title}</h2>
    <p>{page.body}</p>
    <p class='readmore'>
     <a class='link' href={`/project/apps/${page.id}`}>
      Читать далее
     </a>
    </p>
   </div>
  {/each}
 </div>
</div>
