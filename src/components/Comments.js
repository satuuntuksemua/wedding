import React from 'react'

const Comments = () => (
  <div>
    <div id="disqus_thread"></div>
    <script dangerouslySetInnerHTML={{
      __html: `
        var disqus_config = function () {
          this.page.url = window.location.href;
          this.page.identifier = window.location.pathname;
        };

        (function() {
          var d = document, s = d.createElement('script');
          s.src = 'https://latiefdole.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
        })();
      `
    }}></script>
  </div>
)

export default Comments
