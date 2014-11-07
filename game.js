(function() {
	var sources = [
		'images/grass.png',
		'images/block.png',
		'images/body.png',
		'images/head.png',
		'images/nail.png'
	];
	var stageW = 640;
	var stageH = 960;
	//地图
	var map = {
		sources: [
			'images/grass.png',
			'images/block.png'
		],
		width: 16,
		height: 24,
		gridSize: 40,
		data: [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]
	};
	var mapLayer = document.getElementById('map').getContext('2d');
	var items = [];
	var renderMap = function(target, mapData) {
		var _W = mapData.width;
		var _H = mapData.height;
		var data = mapData.data;
		var size = mapData.gridSize;
		var sources = [];
		for (var idx = 0; idx < mapData.sources.length; idx++) {
			var img = new Image();
			img.src = mapData.sources[idx];
			sources.push(img);
		}
		for (var i = 0; i < _W; i++) {
			for (var j = 0; j < _H; j++) {
				var type = data[i][j];
				target.drawImage(sources[type], i * size, j * size, size, size);
			}
		}
	};
	var preLoad = function(list, callback) {
		var count = 0;
		for (var i = 0; i < list.length; i++) {
			var img = new Image();
			img.src = list[i];
			img.onload = function() {
				count++;
				if (count === list.length) {
					callback();
				}
			}
		}
	};
	//物品
	var itemLayer = document.getElementById('items').getContext('2d');
	//创建物体
	var createItem = function(target, type, position) {

	};
	//清除物体
	var clearItem = function(target, posX, posY) {

	};
	//蛇
	var snakeLayer = document.getElementById('snake').getContext('2d');
	var Clock = 0;
	var snake = {
		direction: 0, //用来标识当前蛇的前进方向,0上1右2下3左
		timespan: 300, //刷新的时间间隔
		sources: [
			'images/body.png',
			'images/head.png',
			'images/nail.png'
		],
		data: [{
			type: 1,
			x: 0,
			y: 22,
			direction: 0
		}, {
			type: 2,
			x: 0,
			y: 23,
			direction: 0
		}]
	};
	var renderSnake = function() {
		var target = snakeLayer;
		//target.fillStyle = 'rgba(0,0,0,0)';
		target.clearRect(0, 0, stageW, stageH);
		var data = snake.data;
		var size = map.gridSize;
		var sources = [];
		for (var idx = 0; idx < snake.sources.length; idx++) {
			var img = new Image();
			img.src = snake.sources[idx];
			sources.push(img);
		}
		//判断蛇前方是否存在障碍
		//绘制蛇
		for (var i = 0; i < data.length; i++) {
			//target.save();
			var type = data[i].type;
			target.drawImage(sources[type], data[i].x * size, data[i].y * size, size, size);
			//target.restore();
		}
		requestAnimationFrame(renderSnake);
	};
	var updateSnake = function() {
		var timespan = snake.timespan;
		var direction = snake.direction;
		//更新蛇的位置
		var data = snake.data;
		var l = data.length - 1;
		var obj = JSON.parse(JSON.stringify(data[0]));
		for (var i = 0; i < l; i++) {
			data[i].type = data[i + 1].type;
		}
		data.splice(data.length - 1, 1);
		snake.data = [obj].concat(data);
		console.log(snake.data[1]);
		//0上1右2下3左
		switch (direction) {
			case 0:
				obj.y--;
				break;
			case 1:
				obj.x++;
				break;
			case 2:
				obj.y++;
				break;
			case 3:
				obj.x--;
				break;
			default:
				break;
		}
		setTimeout(updateSnake, timespan);
	};
	//物品
	var items = {

	};
	//开始
	var start = function() {
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
		renderMap(mapLayer, map);
		updateSnake();
		renderSnake(snakeLayer);
		//绑定手势
		var hammer = new Hammer(document.getElementById("snake-container"));
		console.log(hammer);
		hammer.on('swipe', function(e) {
			console.log(e);
		});
	};
	preLoad(sources, start);
})();