import ReactDOM from 'react-dom';
import React from 'react';
import ReactPlayer from 'react-player';

class App extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			active: 0,
			allowPlaying: true,
			videoIsPlaying: false,
			videos: [
				{
					title: 'Restricted Embed 1', 
					vimeoId: '301926039'
				},
		    {
		      title: "Restricted Embed 2",
		      vimeoId: "85876630",
		    },
		    {
					title: 'Restricted Embed 3', 
					vimeoId: '301925886'
				},
				{
					title: 'Embeddable Anywhere 1', 
					vimeoId: '301926457'
				},
				{
					title: 'Embeddable Anywhere 2', 
					vimeoId: '301926243'
				}
			]
		};
		
		this.handlePlay = this.handlePlay.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.handleOnEnded = this.handleOnEnded.bind(this);
		this.handleToggleAllowPlaying = this.handleToggleAllowPlaying.bind(this);
		this.handleSelectVideo = this.handleSelectVideo.bind(this);
	}
	
	handlePlay() {
		this.setState({videoIsPlaying: true});
	}
	
	handlePause() {
		this.setState({videoIsPlaying: false});
	}
	
	handleToggleAllowPlaying(e) {
		this.setState(prevState => ({allowPlaying: !prevState.allowPlaying}));
	}
	
	handleOnEnded() {
		this.setState(state => ({
			active: state.active + 1 < state.videos.length ? state.active + 1 : 0
		}));
	}

	handleSelectVideo(i) {
		this.setState({active: i});
	}
	
	render() {
		const { title, vimeoId } = this.state.videos[this.state.active];
		return (
			<div>
				<h1>React Player <a href="https://github.com/CookPete/react-player/issues/520" target="_blank" rel="noopener noreferrer">Issue #520</a></h1>
				<p>Demonstrates an issue where certain videos will cause the React Player to stop controlling the video playback. When the second video begins playing, the play/pause button will cease to control the video. In Safari it continues to work though the second video does not seem to autoplay, despite the first video autoplaying just fine.</p>

				<div className="row">
					<div className="col">
						<h2>{title}</h2>
						<p>
							<button onClick={this.handleToggleAllowPlaying}>
								{this.state.allowPlaying ? 'Pause' : 'Play'}
							</button>
						</p>
						<div className="player-wrapper">
							<ReactPlayer 
								playing={this.state.allowPlaying} 
								url={'https://www.vimeo.com/' + vimeoId} 
								onStart={this.handlePlay}
								onPlay={this.handlePlay} 
								onPause={this.handlePause} 
								onEnded={this.handleOnEnded} 
								className="react-player"
							/>
						</div>
						<p>
							{this.state.allowPlaying ? 
								'Playing Allowed' : 'Playing Disallowed'
							}
						</p>
						<p>
							{this.state.videoIsPlaying ? 
								'Video Is Playing' : 'Video Is Not Playing'
							}
						</p>
						<ul>
							{this.state.videos.map(
								({title}, i) => {
									const activeVideo = i === this.state.active;
									return (
										<li 
											key={title} 
											style={{
												cursor: 'pointer', 
												color:  activeVideo ? '#ff0000' : '#000000'
											}} 

											onClick={(e) => {
												if(!activeVideo) {
													this.handleSelectVideo(i);
												}
											}}
										>
											{title}
										</li>
									);
								}
							)}
						</ul>
					</div>
					<div className="col">
						<h2>Browser Observations</h2>
						<h3>Chrome:</h3>
						<strong>Version 70.0.3538.110</strong>
						<ul>
							<li>1st Video Loads and autoplays if playing is true as expected.</li>
							<li>2nd Video Loads and autoplays but without firing onPlaying event.</li>
							<li>Video can no longer be controlled by playing prop.</li>
							<li>Interacting with the Vimeo player regains expected functionality.</li>
							<li>Logged to console: nothing</li>
						</ul>

						<h3>Firefox</h3>
						<strong>Version 63.0.3</strong>
						<ul>
							<li>1st Video Loads and autoplays if playing is true as expected.</li>
							<li>2nd Video Loads and autoplays but without firing onPlaying event.</li>
							<li>Video can no longer be controlled by playing prop.</li>
							<li>Interacting with the Vimeo player regains expected functionality.</li>
							<li>Logged to console: InvalidStateError: An attempt was made to use an object that is not, or is no longer, usable - player.js:2</li>
						</ul>

						<h3>Safari</h3>
						<strong>Version 12.0.1</strong>
						<ul>
							<li>1st Video Loads and autoplays if playing is true as expected.</li>
							<li>2nd Video Loads but does not autoplay even if playing is true.</li>
							<li>Video can be controlled by playing prop.</li>
							<li>Logged to console: Successfuly preconnected to https://f.vimeocdn.com/</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('player-demo')
);