var tests = [



	{
		id:		'multimedia',
		name:	'Multimedia',
		column:	'right',
		items:	[
					{
						id:		'audio',
						name:	'Soporte audio',
						status:	'stable',
						items:	[
									{
										id:		'element',
										name: 	'<code>audio</code>',
										value:	18,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/html5/embedded-content-0.html#the-audio-element' ],
													[ 'mdn', '/Web/Guide/HTML/Using_HTML5_audio_and_video' ]
												]
									}, {
										id:		'loop',
										name: 	'Bucle de audio',
										value:	1,
										url:	'http://www.w3.org/TR/html5/embedded-content-0.html#attr-media-loop'
									}, {
										id:		'preload',
										name: 	'Precarga en segundo plano',
										value:	1,
										url:	'http://www.w3.org/TR/html5/embedded-content-0.html#attr-media-preload'
									},


									'<strong>Avanzado</strong>',

									{
										id:		'webaudio',
										name: 	'API de audio web',
										value:	{ maximum: 5, award: { PREFIX: 3 } },
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/webaudio/' ]
												]
									},

									{
										id:		'speechrecognition',
										name: 	'Reconocimiento de voz',
										status:	'experimental',
										value:	{ maximum: 3, award: { PREFIX: 2 } },
										url:	'https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html'
									},

									{
										id:		'speechsynthesis',
										name: 	'Síntesis de voz',
										status:	'experimental',
										value:	{ maximum: 2, award: { PREFIX: 1 } },
										url:	'https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html'
									},

									'<strong>Códecs de audio</strong>',

									{
										id:		'codecs.pcm',
										name: 	'Soporte de audio PCM',
										status:	'optional'
									}, {
										id:		'codecs.mp3',
										name: 	'Soporte MP3',
										status:	'optional'
									}, {
										id:		'codecs.mp4.aac',
										name: 	'Soporte AAC',
										status:	'optional'
									}, {
										id:		'codecs.mp4.ac3',
										name: 	'Soporte Dolby Digital',
										status:	'optional'
									}, {
										id:		'codecs.mp4.ec3',
										name: 	'Soporte Dolby Digital Plus',
										status:	'optional'
									}, {
										id:		'codecs.ogg.vorbis',
										name: 	'Asistencia de Ogg Vorbis',
										status:	'optional'
									}, {
										id:		'codecs.ogg.opus',
										name: 	'Soporte Ogg Opus',
										status:	'optional'
									}, {
										id:		'codecs.ogg.flac',
										name: 	'Soporte Ogg FLAC',
										status:	'optional'
									}, {
										id:		'codecs.webm.vorbis',
										name: 	'WebM con soporte de Vorbis',
										status:	'optional'
									}, {
                                        id:     'codecs.webm.opus',
                                        name:   'WebM con soporte de Opus',
                                        status: 'optional'
									}
								]
					}
				]
	}
]