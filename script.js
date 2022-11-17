function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class CardProfile extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      index: 0,
      currentTime: '0:00',
      musicList: [{ name: 'Goodbyes', author: 'Post Malone ft.Young Thug', img: 'https://cdn.justjared.com/wp-content/uploads/headlines/2019/07/malone-goodbyes.jpg', audio: 'https://www.soloplay.ng/wp-content/uploads/2020/09/Post_Malone_Ft_Young_Thug_-_Goodbyes_Soloplay.ng.mp3', duration: '3:07' },
      { name: 'Sunflower', author: 'Post Malone ft.Swae lee', img: 'https://wallpapercave.com/wp/wp4153040.jpg', audio: 'https://ebukaloaded.com/?smd_process_download=1&download_id=4302', duration: '2:38' },
      { name: 'I Like You', author: 'Post Malone w. Doja Cat ', img: 'https://images.genius.com/8490d88e56d415ad28204bcb83ac3f21.300x300x1.jpg', audio: 'https://thinknews.com.ng/wp-content/uploads/2022/06/Post_Malone_Doja_Cat_Wrapped_Around_Your_Finger_(thinkNews.com.ng).mp3', duration: '3:12' },
      { name: 'Deja Vu', author: 'Post Malone ft. Justin Bieber', img: 'https://c.saavncdn.com/117/Deja-Vu-English-2016-500x500.jpg', audio: 'https://olagist.net/wp-content/uploads/2020/11/Post_Malone_ft_Justin_Bieber_-_Deja_Vu.mp3', duration: '3:55' },
      { name: 'Congratulations', author: 'Post Malone ft. Quavo',img: 'https://instrumentalfx.co/wp-content/uploads/2017/10/Post-Malone-I-Fall-Apart-Instrumental-mp3-download.png', audio: 'https://www1.morexlusive.com/wp-content/uploads/2021/11/Post_Malone_ft_Quavo_-_Congratulations.mp3', duration:'3:46'},
      { name: 'Circles', author:'Post Malone', img:'https://www.midiorama.com/wp-content/uploads/2019/09/post-malone-circles-920x625.png', audio:'https://www1.morexlusive.com/wp-content/uploads/2020/11/Post_Malone_-_Circles.mp3', duration:'3:34'},
      {name: 'Bohemian Rhapsody', author:'Queen',
      img: 'https://the29mob.com/wp-content/uploads/2021/09/1_tQs4H7Ua65sd7iUxeLcDkw.png',
      audio: 'https://www.mixloaded.com/wp-content/uploads/2022/06/Queen_-_Bohemian_Rhapsody_MixLoaded.Com.mp3', duration:'5:59'},
      {name: 'Love Of My',author: 'Queen',img: 'https://bdspotlight.com/wp-content/uploads/2021/09/queen.jpg',
      audio:'https://minty.club/artist/queen/love-of-my-life/queen-love-of-my-life.mp3',duration:'3:33'},
      {name:"Don't Stop Me Now",author: 'Queen',img:'https://i.ytimg.com/vi/2CxLOFwTKb4/maxresdefault.jpg',
      audio: 'https://minty.club/artist/queen/dont-stop-me-now/queen-dont-stop-me-now.mp3',duration:'3:29'},
      {name:"Can't Help Falling in Love", author:'Elvis Presley',img : 'https://i.ytimg.com/vi/2YFYRYUoCPQ/mqdefault.jpg',audio:'https://mp3gaga.com/wp-content/uploads/2022/06/mp3gaga.com-Elvis-Presley-Cant-Help-Falling-in-Love.mp3',duration:'3:01'},
      {name : 'If I Can Dream', author:'Elvis Presley',img: 'https://bestclassicbands.com/wp-content/uploads/2022/08/Elvis-1968-NBC-Special-If-I-Can-Dream-2.jpeg',audio:'https://tainhacmoinhat.com/download-mp3/BnyVzynmygO8/mp3',duration:'3:20'}],
      pause: false });_defineProperty(this, "changeCurrentTime",


    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;
      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;

      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      this.playheadRef.style.width = userClickWidhtInPercent + "%";
      this.playerRef.currentTime = duration * userClickWidhtInPercent / 100;
    });_defineProperty(this, "hoverTimeLine",

    e => {
      const duration = this.playerRef.duration;

      const playheadWidth = this.timelineRef.offsetWidth;

      const offsetWidht = this.timelineRef.offsetLeft;
      const userClickWidht = e.clientX - offsetWidht;
      const userClickWidhtInPercent = userClickWidht * 100 / playheadWidth;

      if (userClickWidhtInPercent <= 100) {
        this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
      }

      const time = duration * userClickWidhtInPercent / 100;

      if (time >= 0 && time <= duration) {
        this.hoverPlayheadRef.dataset.content = this.formatTime(time);
      }
    });_defineProperty(this, "resetTimeLine",

    () => {
      this.hoverPlayheadRef.style.width = 0;
    });_defineProperty(this, "timeUpdate",

    () => {
      const duration = this.playerRef.duration;
      const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
      const playPercent = 100 * (this.playerRef.currentTime / duration);
      this.playheadRef.style.width = playPercent + "%";
      const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));
      this.setState({
        currentTime });

    });_defineProperty(this, "formatTime",

    currentTime => {
      const minutes = Math.floor(currentTime / 60);
      let seconds = Math.floor(currentTime % 60);

      seconds = seconds >= 10 ? seconds : "0" + seconds % 60;

      const formatTime = minutes + ":" + seconds;

      return formatTime;
    });_defineProperty(this, "updatePlayer",

    () => {
      const { musicList, index } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      this.playerRef.load();
    });_defineProperty(this, "nextSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "prevSong",

    () => {
      const { musicList, index, pause } = this.state;

      this.setState({
        index: (index + musicList.length - 1) % musicList.length });

      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });_defineProperty(this, "playOrPause",


    () => {
      const { musicList, index, pause } = this.state;
      const currentSong = musicList[index];
      const audio = new Audio(currentSong.audio);
      if (!this.state.pause) {
        this.playerRef.play();
      } else {
        this.playerRef.pause();
      }
      this.setState({
        pause: !pause });

    });_defineProperty(this, "clickAudio",

    key => {
      const { pause } = this.state;

      this.setState({
        index: key });


      this.updatePlayer();
      if (pause) {
        this.playerRef.play();
      }
    });}componentDidMount() {this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);this.playerRef.addEventListener("ended", this.nextSong, false);this.timelineRef.addEventListener("click", this.changeCurrentTime, false);this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);}componentWillUnmount() {this.playerRef.removeEventListener("timeupdate", this.timeUpdate);this.playerRef.removeEventListener("ended", this.nextSong);this.timelineRef.removeEventListener("click", this.changeCurrentTime);this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);}


  render() {
    const { musicList, index, currentTime, pause } = this.state;
    const currentSong = musicList[index];
    return /*#__PURE__*/(
      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("div", { className: "current-song" }, /*#__PURE__*/
      React.createElement("audio", { ref: ref => this.playerRef = ref }, /*#__PURE__*/
      React.createElement("source", { src: currentSong.audio, type: "audio/ogg" }), "Your browser does not support the audio element."), /*#__PURE__*/


      React.createElement("div", { className: "img-wrap" }, /*#__PURE__*/
      React.createElement("img", { src: currentSong.img })), /*#__PURE__*/

      React.createElement("span", { className: "song-name" }, currentSong.name), /*#__PURE__*/
      React.createElement("span", { className: "song-autor" }, currentSong.author), /*#__PURE__*/

      React.createElement("div", { className: "time" }, /*#__PURE__*/
      React.createElement("div", { className: "current-time" }, currentTime), /*#__PURE__*/
      React.createElement("div", { className: "end-time" }, currentSong.duration)), /*#__PURE__*/


      React.createElement("div", { ref: ref => this.timelineRef = ref, id: "timeline" }, /*#__PURE__*/
      React.createElement("div", { ref: ref => this.playheadRef = ref, id: "playhead" }), /*#__PURE__*/
      React.createElement("div", { ref: ref => this.hoverPlayheadRef = ref, class: "hover-playhead", "data-content": "0:00" })), /*#__PURE__*/


      React.createElement("div", { className: "controls" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.prevSong, className: "prev prev-next current-btn" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-backward" })), /*#__PURE__*/

      React.createElement("button", { onClick: this.playOrPause, className: "play current-btn" },

      !pause ? /*#__PURE__*/React.createElement("i", { className: "fas fa-play" }) : /*#__PURE__*/
      React.createElement("i", { class: "fas fa-pause" })), /*#__PURE__*/


      React.createElement("button", { onClick: this.nextSong, className: "next prev-next current-btn" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-forward" })))), /*#__PURE__*/



      React.createElement("div", { className: "play-list" },
      musicList.map((music, key = 0) => /*#__PURE__*/
      React.createElement("div", { key: key,
        onClick: () => this.clickAudio(key),
        className: "track " + (
        index === key && !pause ? 'current-audio' : '') + (
        index === key && pause ? 'play-now' : '') }, /*#__PURE__*/

      React.createElement("img", { className: "track-img", src: music.img }), /*#__PURE__*/
      React.createElement("div", { className: "track-discr" }, /*#__PURE__*/
      React.createElement("span", { className: "track-name" }, music.name), /*#__PURE__*/
      React.createElement("span", { className: "track-author" }, music.author)), /*#__PURE__*/

      React.createElement("span", { className: "track-duration" },
      index === key ?
      currentTime :
      music.duration))))));







  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(CardProfile, null),
document.getElementById('root'));