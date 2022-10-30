<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="grid grid-cols-2 place-content-center gap-4 h-48 ">
    
    {#each data.courses.items as item}
         <!-- content here -->
         <a href="/courses/{item.slug}" class="text-xl mx-2 py-10 px-3 shadow-md rounded-md text-center " >
             {item.name} :
             {item.code}
         </a>
    {/each}
</div>
