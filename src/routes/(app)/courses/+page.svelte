<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="flex flex-col">
    
    {#each data.courses.items as item}
         <a href="/courses/{item.slug}" class="text-xl mx-2 py-10 px-3 shadow-lg rounded-md" >
             {item.name} :
             {item.code}
         </a>
    {/each}
</div>
