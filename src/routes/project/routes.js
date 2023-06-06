export const routes = [
    {
        id: 1,
        title: 'TODO',
        body: 'Простое и удобное приложение для организации задач. С его помощью вы можете легко создавать, отслеживать и завершать свои ежедневные задачи.',
    },
];
<script>
import { routes } from './routes.js';
</script>
<style>
  .container {
   margin: 50px auto;
   max-width: 800px;
   padding: 0 20px;
  }

  .apps {
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 20px;
  }

  .app {
   border: 1px solid #ddd;
   padding: 10px;
   box-shadow: 0 0 10px #eee;
  }

  .link {
   color: rgb(10, 10, 139);
  }
 </style>
