<script>
  import { fade, fly } from "svelte/transition";
  import SocialButton from "./socialButton.svelte";

  function preload(src) {
    return new Promise(function (resolve) {
      let img = new Image();
      img.onload = resolve;
      img.src = src;
    });
  }

  let src = "Images/vdtlv.jpg";
  let socials = [
    {
      buttonLink: "https://dribbble.com/vdtlv",
      buttonText: "<b>Dribbble</b> @vdtlv",
    },
    {
      buttonLink: "https://github.com/vdtlv",
      buttonText: "<b>Github</b> /vdtlv",
    },
    { buttonLink: "https://t.me/vdtlv", buttonText: "<b>Telegram</b> @vdtlv" },
    {
      buttonLink: "https://www.instagram.com/vdtlv/",
      buttonText: "<b>Instagram</b> @vdtlv",
    },
  ];
</script>

<div
  class="main"
  in:fly={{ y: 20, duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
  <div class="content">
    <h2>My name is Viacheslav Diatlov (he/him), living in 
      Saint-Petersburg. I am working as UI/UX Designer and 
      do programming in my spare time. </h2>
    <h3><br>Design</h3>
    <p>An attractive user interface is just a tip of the iceberg. 
      I enjoy working on design systems, develop and improve them. 
      Figma, Blender and Procreate are exceptional until you get 
      unexpected challenges. I am trying to bypass Adobe tools 
      and this is the reason I am always searching for new powerful 
      services which can close all my needs. There are so many 
      great tools for interface design or 2D/3D graphics.</p>
    <h3><br>Code</h3>
    <p>I am keen on programming, web things are pretty ok for me, 
      <i>especially, with YouTube and StackOverflow</i>. I 
      develop simple web services for my daily routine but still working
      on my skills for making things that need to reach a wide audience.
      As for today, I like playing with Svelte and trying to learn Swift.</p>
  </div>
  <div class="info">
    {#await preload(src) then _}
      <img {src} in:fly alt="I am Slava, that's me" />
    {/await}

    <div class="socials">
      {#each socials as social}
        <SocialButton link={social.buttonLink} txt={social.buttonText} />
      {/each}
    </div>
    <br>
  </div>
</div>

<style>
  img {
    width: 100%;
    height: auto;
    border-radius: 32px;
  }

  h2 {
    font-weight: 600;
    line-height: 135%;
  }


  .main {
    display: flex;
    padding: 1em;
    margin: 0 auto;
    flex-direction: column-reverse;
  }

  .content {
    width: 100%;
    flex-grow: 2;
  }
  .info {
    flex-grow: 1;
    border-style: none none solid none;
    border-color: var(--text-color); 
  }
  .socials {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 640px) {
    .main {
      overflow-y: hidden;
    }
  }

  @media (min-width: 640px) {
    img {
      width: 256px;
      height: 256px;
      border-radius: 16px;
    }
    .main {
      display: flex;
      max-width: 768px;
      flex-direction: row;
    }
    .info {
    border-style: none ;
    }
    .content {
      margin-right: 32px;
      width: 480px;
      flex-grow: 2;
    }
  }
</style>
