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
    <h2>I like playing with svelte</h2>
    <p>for sure i dont really</p>
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
  </div>
</div>

<style>
  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
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
  }
  .socials {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 640px) {
    img {
      width: 256px;
      height: auto;
      border-radius: 8px;
    }
    .main {
      max-width: 768px;
      flex-direction: row;
    }
    .content {
      width: 512px;
      flex-grow: 2;
    }
  }
</style>
