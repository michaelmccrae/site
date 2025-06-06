'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const tweetEmbed = `
    <blockquote class="twitter-tweet" data-media-max-width="560">
      <p lang="en" dir="ltr">
        Rhodium, palladium are riding high. Platinum, not so much 
        <a href="https://t.co/gfB7p90V5S">https://t.co/gfB7p90V5S</a> via 
        <a href="https://twitter.com/neil_c?ref_src=twsrc%5Etfw">@neil_C</a>, 
        <a href="https://twitter.com/KitcoNewsNOW?ref_src=twsrc%5Etfw">@kitconewsnow</a> 
        <a href="https://t.co/Lmpyr5zIBD">pic.twitter.com/Lmpyr5zIBD</a>
      </p>
      &mdash; Michael McCrae (@michaelmccrae) 
      <a href="https://twitter.com/michaelmccrae/status/1105903869744209920?ref_src=twsrc%5Etfw">March 13, 2019</a>
    </blockquote>
  `;

  return <div dangerouslySetInnerHTML={{ __html: tweetEmbed }} />;
}
