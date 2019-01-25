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
					title: 'Video 1', 
					vimeoId: '301926039'
				},
					{
					title: "Video 2",
					vimeoId: "85876630",
					},
					{
					title: 'Video 3', 
					vimeoId: '301925886'
				},
				{
					title: 'Video 4', 
					vimeoId: '301926457'
				},
				{
					title: 'Video 5', 
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
				<h1>
					React Player Issue
				</h1>
				<p>Demonstrates a warning that breaks the player. If videos are 
				clicked in rapid succession a warning is given: <strong>Player.js:268 ReactPlayer: the attempt to 
				load <em>url</em> is being deferred until the player has loaded</strong>
				</p>

				<p>But this seems to permanently break the player. After being in this 
				state, no other videos can be loaded unless the component unmounted 
				and remounted. It looks like the <a href="https://github.com/CookPete/react-player/blob/9618272e6e4b518e493d3130b96dd2ebeb97b506/src/Player.js#L37" target="_blank" rel="noopener noreferrer">desired behavior</a> is 
				for the new url to load once the player is ready but that 
				doesn't happen.</p>

				<p>Occurs in Chrome, Firefox, and Safari.</p>

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
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('player-demo')
);