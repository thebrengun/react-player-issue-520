Demonstrates an issue where certain videos will cause the React Player to stop controlling the video playback. When the second video begins playing, the play/pause button will cease to control the video. In Safari it continues to work though the second video does not seem to autoplay, despite the first video autoplaying just fine.

[Demo](https://thebrengun.github.io/react-player-issue-520/)

## Chrome:
### Version 70.0.3538.110

- 1st Video Loads and autoplays if playing is true as expected.
- 2nd Video Loads and autoplays but without firing onPlaying event.
- Video can no longer be controlled by playing prop.
- Interacting with the Vimeo player regains expected functionality.
- Logged to console: nothing

## Firefox
### Version 63.0.3

- 1st Video Loads and autoplays if playing is true as expected.
- 2nd Video Loads and autoplays but without firing onPlaying event.
- Video can no longer be controlled by playing prop.
- Interacting with the Vimeo player regains expected functionality.
- Logged to console: InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable - player.js:2

## Safari
### Version 12.0.1

- 1st Video Loads and autoplays if playing is true as expected.
- 2nd Video Loads but does not autoplay even if playing is true.
- Video can be controlled by playing prop.
- Logged to console: Successfuly preconnected to https://f.vimeocdn.com/