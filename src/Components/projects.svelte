<script>
  import { fade, fly } from "svelte/transition";
  import Project from "./project.svelte";

  let projects = [
    {
      title: "Right on Trek",
      imgLink: "Images/rot.png",
      altText: "just Right on Trek logo",
      link: "/#/projects/rightontrek",
      teaser: 0,
    },
    {
      title: "Educt ⚙︎",
      imgLink: "Images/educt.png",
      altText: "just educt logo",
      link: "https://vdtlv.notion.site/Educt-co-founder-1800b5fd8ead4e17a6f37a7b2470e69d",
      teaser: 2,
    },
    /*{
      title: "Phase 10",
      imgLink: "Images/phase.png",
      altText: "phase 10 with wired font",
      link: "https://vdtlv.notion.site/Phase-10-student-project-5584573a3177445ba2b402a60f0d6f99",
      teaser: 2,
    },*/
    {
      title: "Fish & Rice ⚙︎",
      imgLink: "Images/fnr.png",
      altText: "Fish and Rice logo",
      link: "https://vdtlv.notion.site/Fish-Rice-aefff516d966442db9aadbf56d4e977d",
      teaser: 2,
    },
    {
      title: "ePost",
      imgLink: "Images/epost.gif",
      altText: "cool animation representing main feature of epost",
      link: "/#/projects/epost",
      teaser: 0,
    },
    {
      title: "ChefBaity",
      imgLink: "Images/chefbaity.png",
      altText: "ChafBaity logo app",
      link: "/#/projects/chefbaity",
      teaser: 0,
    },
    {
      title: "rocketlaunch.live",
      imgLink: "Images/rocketlaunch.gif",
      altText: "flying rocket",
      link: "/#/projects/rocketlaunch",
      teaser: 0,
    },
  ];


</script>


<div class="projectlist" in:fly={{ y: 20, duration: 200, delay: 200 }}
out:fade={{ duration: 100 }}>
{#each projects as project}
<Project title={project.title} imgLink={project.imgLink} altText={project.altText} link={project.link} teaser={project.teaser}/>
{/each}

<!---->



</div>

<style>

  .projectlist {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 16px;
  }

  /* pseudo class for alignement last row 
  .projectlist::after {
  content: "";
  flex: auto;
  }

</style>
