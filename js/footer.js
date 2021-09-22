const footerHtml = 
  `<div class="container">
    <div class="py-3">
      <div class="row">
        <div class="col-12 col-lg-9">
          <span>
            This is an open source, non-profit & community project. Please reach
            out on Github/Contact for adding information or corrections.
            Citiations for text to Wikipedia.
          </span>
        </div>
        <div class="col-12 col-lg-3 d-flex justify-content-end">
          <a
            href="https://github.com/pratham-webdev/simply-hanuman"
            class="me-3"
            target="_blank"
          >
            Github
          </a>
          <a href="mailto:pratham.webdev@gmail.com" class="me-3">
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>`;

$(`#footer`).append(footerHtml);
