<script>
  export let link;
  export let txt;
</script>

<a href={link}>{txt}</a>

<style>
  a {
    margin-top: 0.2em;
    width: fit-content;
    margin-left: -2px;
    font-size: 1.1em;
    font-weight: 500;
    color: var(--text-color);
    border-radius: 4px;
    padding: 4px;
  }
  a:hover {
    text-decoration: none;
    background-color: var(--hover);
    transition: 0.2s;
    cursor: pointer;
  }
</style>
