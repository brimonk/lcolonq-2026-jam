LCOLONQ MICROJAM 2K26-A-PALOOZA
what is it: a game jam for the LCOLONQ zone or "greencircle" or cyberspace or whatever else we call it!
why is it: let's have some fun on the computer together!
when is it: submissions are due on Friday, July 17th 2026.
where is it: submit links to entries on Discord or IRC or Twitch Chatroom or anywhere we are likely to see them. if you need a place to upload your submission, contact clonk! this is a small group, we can ask each other questions and figure things out together.
who is it: you, maybe! if you don't feel confident making a game alone, maybe team up with somebody else! ask around in the Discord or IRC or Twitch Chatroom or anywhere else!
how is it: pretty good; see below!
THE DETAILS
or, what are we making, actually
For this event, your challenge is to make a "microgame". Microgame is a term used by the WarioWare game series to describe short, (mostly) self-contained minigames played in rapid succession. The individual microgames tend to present a single gameplay mechanic or task for the player to perform, with a well-defined success and failure state. Typical microgames are only a few seconds long, while some end-of-stage "boss games" can last a minute or more. In WarioWare, the player is presented with a series of microgames to play in a random order. Failing at an individual microgame costs the player a life, and losing all lives means game over!

For an example of this type of gameplay, here is a nice demonstration video.

Your mission in this game jam is to make a microgame! At the end, we'll collect all the submissions together, so you can play through the whole collection like you would a stage in WarioWare. In order for this to work nicely, it's best if everyone follows some simple guidelines. These mostly aren't hard-and-fast rules, but moreso a framework to ensure that the overall collection is playable.

Make a game that's playable in the browser.
The browser is how we're going to ensure all of the games can play nicely together. This doesn't mean you have to write a game with JavaScript!

Many languages and libraries can be built to WebAssembly. For example, if you like C and raylib, check out this guide! It's also quite easy to write Rust programs targeting WebAssembly. In general, if you have a preferred language and graphics library, it's likely you'll be able to make something work!

Full-fledged game engines like Godot also have the ability to export a web build. For Godot, see the documentation.

It's also perfectly fine to work with JavaScript and Canvas, either using some library or plain browser APIs! If you'd like to go this route and aren't sure where to start, check out the MDN documentation for the Canvas API or maybe WebGL. If you'd like something a bit more batteries-included, maybe check out Pixi or Phaser.

Games should be primarily controlled using the mouse.
We want to make sure that someone playing the collection doesn't get confused by the controls. With keyboard controls, each game might pick totally different keys, and adjusting the player will be a challenge. As such, please center your game's control scheme around a standard two-button mouse. You're still welcome to use the keyboard and any other input method that's generally available, but try to avoid assuming that the player will know the control scheme you require. For example, a keyboard-involved microgame might involving mashing keys indiscriminately, or playing a "hot-and-cold" game based on the physical locations of keys pressed in the player's keyboard layout. Get creative!

Keep it short and focused! Less than a minute is ideal.
Ideally your game is tightly focused on a single gameplay idea. Feel free to interpret this however you wish! If you want to make a two minute mini-RPG, be my guest! Rough and interesting is a good way to go.

Make sure there is an obvious win condition and lose condition.
We need a way to know if the player should lose a life after your game runs. The player running out of time is a perfectly good lose condition (but make sure to display a timer somewhere onscreen if this is the case!). But again, feel free to be inventive!

THE RULES
ok these are actual rules don't bend these ones please
Alongside your game, please submit source code (either a link to a repository or actual source in an archive file). Please include the open-source license your are releasing your code under, as well as any licenses and attribution for any assets used.

Please do not use any "trained" machine learning tool with external training data for programming or asset creation. That is: no off-the-shelf LLMs, image generation, etc. anywhere in the development process or final game. Feel free to use machine learning techniques at your leisure if you're using a model you trained entirely yourself on data you have collected yourself (and to which you have a license).

In brief: Claude code/ChatGPT/AI images are banned. If you'd like to write some weird genetic algorithm thing or do reinforcement learning for game AI or procedural textures or whatever else, that's cool and please do it!

Be kind.
LCOLONQ 2"K"26. Most rights reversed. All words endorsed by my employer. I love the computer and the people on it.

**Fetched 2026-05-26 23:40:13** - https://api.colonq.computer/jam/2026
