Demonstrates a warning that breaks the player. If videos are clicked in rapid succession a warning is given:

"Player.js:268 ReactPlayer: the attempt to load https://www.vimeo.com/301926039 is being deferred until the player has loaded"

But this seems to permanently break the player. After being in this state, no other videos can be loaded unless the component unmounted and remounted. It looks like the [desired behavior](https://github.com/CookPete/react-player/blob/9618272e6e4b518e493d3130b96dd2ebeb97b506/src/Player.js#L37) is for the new url to load once the player is ready but that doesn't happen.

Occurs in Chrome, Firefox, and Safari.

[Demo](https://thebrengun.github.io/react-player-issue-520/)