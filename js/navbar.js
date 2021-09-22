const navHtml = `<nav class="navbar navbar-expand-lg navbar-light bg-new fixed-top">
<div class="container">
  <a class="navbar-brand" href="/">Simply Hanuman</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link" href="/">Hanuman Chalisa</a>
      <a class="nav-link" href="/sankatmochan.html">Sankatmochan</a>
      <a class="nav-link" href="/aarti.html">Aarti</a>
    </div>
  </div>
</div>
</nav>`

$(`#navbar`).append(navHtml);