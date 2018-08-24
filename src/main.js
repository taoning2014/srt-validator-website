import srtValidator from './srtValidator';

window.onload = () => {
  const fileInput = document.getElementById('caption-file');
  fileInput.addEventListener('change', event => {
    // TODO add srtValidator here
    console.log('i am changed');
    console.log(event);
  });
};

const srtString = `0
00:00:00,970 --> 00:00:03,000
Jellyfish at the Monterey Aquarium

2
00:00:04,080 --> 00:00:06,080
Dude - get out of the way!

3
00:00:09,350 --> 00:00:13,350
Shaky Hands...

5
00:00:17,000 --> 00:00:22,000
Ah yes, this is better...

5
00:00:24,825 --> 00:00:23,825
Pro Tip: Turn off the camera flash!

5
00:00:0,000 --> 00:00:41,000
Thanks for watching and I hope you'll have fun with the VideoSub library!`;

console.log(srtValidator(srtString));
