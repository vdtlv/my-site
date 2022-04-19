<script>
  import { fade, fly } from "svelte/transition";

  import Project from "./project.svelte";

  let projects = [
    {
      title: "Educt",
      imgLink: "Images/educt.png",
      altText: "just educt logo",
      link: "https://vdtlv.notion.site/Educt-co-founder-1800b5fd8ead4e17a6f37a7b2470e69d",
      teaser: 0,
    },
    {
      title: "Phase 10",
      imgLink: "Images/phase.png",
      altText: "phase 10 with wired font",
      link: "https://vdtlv.notion.site/Phase-10-student-project-5584573a3177445ba2b402a60f0d6f99",
      teaser: 0,
    },
    {
      title: "ePost",
      imgLink: "Images/epost.gif",
      altText: "cool animation representing main feature of epost",
      link: "https://vdtlv.notion.site/ePost-Diploma-project-22b01964f80c424ca83e8d097d0ffdb6",
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

<!--

<a href="https://vdtlv.notion.site/Phase-10-student-project-5584573a3177445ba2b402a60f0d6f99" target="_blank" class="project" >
  <img src="Images/phase.png" data-src="Images/phase.png" alt="phase 10 with wired font" >
  <h6 >Phase 10</h6>
</a>

  <a href="https://vdtlv.notion.site/ePost-Diploma-project-22b01964f80c424ca83e8d097d0ffdb6" target="_blank" class="project" >
    <img src="Images/epost.gif" data-src="Images/epost.gif" alt="cool animation representing main feature of epost" >
    <h6 >ePost</h6>
  </a>

-->



</div>

<style>

  .projectlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 16px;
  }

</style>
