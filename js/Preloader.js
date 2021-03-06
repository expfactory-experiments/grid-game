Game.Preloader = function (game) {

	this.background = null
	this.preloadBar = null
	this.ready = false
	this.rnd

}

Game.Preloader.prototype = {

	init: function (problem_set) {
		this.problem_set = problem_set
	},

	preload: function () {


		this.preloadBar = this.add.sprite(120, 200, 'preloaderBar')

		this.load.setPreloadSprite(this.preloadBar)

		this.game.load.spritesheet('balls', 'images/balls.png', 17, 17)
		this.game.load.spritesheet('board', 'images/board.png')
		this.game.load.image('water_base', 'images/water_base.png')
		this.game.load.image('measurer', 'images/Measuring_cylinder.svg')
		this.game.load.image('go', 'images/Go_button.png')
		this.game.load.image('equalB','images/Equal_Button.png')
		this.game.load.image('unequalB','images/Unequal_Button.png')
		this.game.load.image('jar', 'images/jar.png')
		this.game.load.image('jarSmall', 'images/jar2.png')
		this.game.load.image('dispenser','images/BallDispenser.png')
		this.game.load.physics('jarData','images/jar.json')
		this.game.load.physics('smalljarData', 'images/jar2.json')
		this.game.load.image('balancingact', 'images/BalancingAct_Button.png')
		this.game.load.image('coin', 'images/coin_gold.png')
		this.game.load.image('next', 'images/next_button.png')
		this.game.load.image('back', 'images/back_button.png')
		this.game.load.image('triangle', 'images/triangle.svg')
		this.game.load.image('circle', 'images/circle.svg')
		this.game.load.image('arrow','images/arrow.svg')

		// this.game.load.spritesheet('balls', 'images/balls.png', 17, 17)
    // this.game.load.spritesheet('board', 'images/board.png')
		// this.game.load.image('water_base', 'images/water_base.png')
		// this.game.load.image('measurer', 'images/Measuring_cylinder.svg')
		// this.game.load.image('go', 'images/Go_button.png')
		// this.game.load.image('equalB','images/Equal_Button.png')
		// this.game.load.image('unequalB','images/Unequal_Button.png')
		// this.game.load.image('jar', 'images/jar.png')
		// this.game.load.image('jarSmall', 'images/jar2.png')
		// this.game.load.image('dispenser','images/BallDispenser.png')
		// this.game.load.physics('jarData','images/jar.json')
		// this.game.load.physics('smalljarData', 'images/jar2.json')
		// this.game.load.image('balancingact', 'images/BalancingAct_Button.png')
		// this.game.load.image('coin', 'images/coin_gold.png')
		// this.game.load.image('next', 'images/next_button.png')
		// this.game.load.image('back', 'images/back_button.png')
		// this.game.load.image('triangle', 'images/triangle.svg')
		// this.game.load.image('circle', 'images/circle.svg')
		// this.game.load.image('arrow','images/arrow.svg')

		//
		// this.game.load.script('filterX', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/BlurX.js');
    // this.game.load.script('filterY', 'https://cdn.rawgit.com/photonstorm/phaser/master/filters/BlurY.js');
		// this.game.load.script('threshold','threshold.js')

	},

	create: function () {

		this.preloadBar.cropEnabled = false
		this.state.start('Menu', true, false, this.problem_set)


	},


}
