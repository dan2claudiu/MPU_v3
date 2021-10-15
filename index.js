(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.copy2 = function() {
	this.initialize(img.copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mcLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcLogo, new cjs.Rectangle(0,0,600,500), null);


(lib.mcCTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CTA();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcCTA, new cjs.Rectangle(0,0,600,500), null);


(lib.mcCopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.copy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcCopy2, new cjs.Rectangle(0,0,600,500), null);


(lib.mcCopy1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.copy1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcCopy1, new cjs.Rectangle(0,0,600,500), null);


(lib.mcClickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgJXAu4MAAAhdvISvAAMAAABdvg");
	this.shape.setTransform(60,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcClickTag, new cjs.Rectangle(0,0,120,600), null);


(lib.mc5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image1, null, new cjs.Matrix2D(0.5,0,0,0.5,-150,-45.5)).s().p("A3bHHIAAuNMAu3AAAIAAONg");
	this.shape.setTransform(150,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc5, new cjs.Rectangle(0,0,300,91), null);


(lib.mc4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image1, null, new cjs.Matrix2D(0.5,0,0,0.5,-150,-103)).s().p("A3bB4IAAjvMAu3AAAIAAB3MgrRAAAIAAB4g");
	this.shape.setTransform(150,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc4, new cjs.Rectangle(0,0,300,24), null);


(lib.mc3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image1, null, new cjs.Matrix2D(0.5,0,0,0.5,-161.5,-109)).s().p("A1oA8IAAh3MArRAAAIAAB3g");
	this.shape.setTransform(138.5,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc3, new cjs.Rectangle(0,0,277,12), null);


(lib.mc2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image1, null, new cjs.Matrix2D(0.5,0,0,0.5,-150,-121)).s().p("A3bA8IAAh3MAu3AAAIAAB3g");
	this.shape.setTransform(150,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc2, new cjs.Rectangle(0,0,300,12), null);


(lib.mc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.image1, null, new cjs.Matrix2D(0.5,0,0,0.5,-150,-188.5)).s().p("A3bJnIAAzNMAu3AAAIAATNg");
	this.shape.setTransform(150,61.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc1, new cjs.Rectangle(0,0,300,123), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,218,219];
	// timeline functions:
	this.frame_0 = function() {
		/*
		var i;
		
		this.clickTag_mc.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.google.com", "_blank");
			console.log("clickTag");
		}
		*/
	}
	this.frame_218 = function() {
		this.stop();
		
		if (typeof i == 'undefined')
		{
		 i = -1;
		 this.play();
		 //this.stop();
		 i++;
		 //console.log(i+1);
		}
		
		if( i < 2)
		{
		 //console.log(i+2);
			console.log("loop");
		 this.play();
		 //this.stop();
		 i++;
		}
		
		
		if( i == 2)
		{
		 //console.log(i+2);
			//console.log("stop");
			console.log("loop is "+ i + ", stop ");
			this.stop();
		}
	}
	this.frame_219 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(218).call(this.frame_218).wait(1).call(this.frame_219).wait(1));

	// clickTag
	this.clickTag_mc = new lib.mcClickTag();
	this.clickTag_mc.name = "clickTag_mc";
	this.clickTag_mc.setTransform(150,125,2.5001,0.4167,0,0,0,60,300);
	new cjs.ButtonHelper(this.clickTag_mc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_mc).wait(220));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D8DADA").ss(1,2,0,3).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_138 = new cjs.Graphics().p("AqkFHIAAqNIVJAAIAAKNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(138).to({graphics:mask_graphics_138,x:226.775,y:207.775}).wait(82));

	// CTA
	this.instance = new lib.mcCTA();
	this.instance.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(138).to({y:180,alpha:1},0).to({y:125},8,cjs.Ease.get(1)).wait(74));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_119 = new cjs.Graphics().p("AyUEnIAApNMAkpAAAIAAJNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(119).to({graphics:mask_1_graphics_119,x:117.8,y:139.05}).wait(101));

	// copy2
	this.instance_1 = new lib.mcCopy2();
	this.instance_1.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({y:180,alpha:1},0).to({y:125},8,cjs.Ease.get(1)).wait(93));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_91 = new cjs.Graphics().p("A9cIwIAAxfMA65AAAIAARfg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_2_graphics_91,x:172.575,y:29.5}).wait(129));

	// copy1
	this.instance_2 = new lib.mcCopy1();
	this.instance_2.setTransform(150,125,0.5,0.5,0,0,0,300,250);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({y:198,alpha:1},0).to({y:125},8,cjs.Ease.get(1)).wait(121));

	// 5
	this.instance_3 = new lib.mc5();
	this.instance_3.setTransform(150,25.5,1,1,0,0,0,150,45.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).to({y:45.5},13,cjs.Ease.get(1)).wait(13).to({scaleX:1.6724,scaleY:1.6724,y:5.1},8,cjs.Ease.get(1)).wait(8).to({regX:150.1,regY:46.2,scaleX:0.0876,scaleY:0.0876,x:92.05,y:43.45},8,cjs.Ease.get(1)).to({_off:true},1).wait(129));

	// 4
	this.instance_4 = new lib.mc4();
	this.instance_4.setTransform(150,83,1,1,0,0,0,150,12);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({y:103},13,cjs.Ease.get(1)).wait(26).to({scaleX:1.6724,scaleY:1.6724,y:101.2},8,cjs.Ease.get(1)).wait(8).to({regX:150.1,scaleX:0.0876,scaleY:0.0876,x:92.05,y:48.45},8,cjs.Ease.get(1)).to({_off:true},1).wait(129));

	// 3
	this.instance_5 = new lib.mc3();
	this.instance_5.setTransform(161.5,89,1,1,0,0,0,138.5,6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({y:109},13,cjs.Ease.get(1)).wait(39).to({scaleX:1.6724,scaleY:1.6724,x:169.25,y:111.3},8,cjs.Ease.get(1)).wait(8).to({regX:138.7,regY:6.3,scaleX:0.0876,scaleY:0.0876,x:93.05,y:49},8,cjs.Ease.get(1)).to({_off:true},1).wait(129));

	// 2
	this.instance_6 = new lib.mc2();
	this.instance_6.setTransform(150,101,1,1,0,0,0,150,6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({y:121},13,cjs.Ease.get(1)).wait(52).to({scaleX:1.6724,scaleY:1.6724,y:131.35},8,cjs.Ease.get(1)).wait(8).to({regX:150.1,regY:6.3,scaleX:0.0876,scaleY:0.0876,x:92.05,y:50.05},8,cjs.Ease.get(1)).to({_off:true},1).wait(129));

	// 1
	this.instance_7 = new lib.mc1();
	this.instance_7.setTransform(150,188.5,1,1,0,0,0,150,61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({regY:61.6,scaleX:1.6724,scaleY:1.6724,y:244.35},8,cjs.Ease.get(1)).wait(8).to({regX:150.1,scaleX:0.0876,scaleY:0.0876,x:92.05,y:55.95},8,cjs.Ease.get(1)).to({_off:true},1).wait(129));

	// logo
	this.instance_8 = new lib.mcLogo();
	this.instance_8.setTransform(150,125,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(220));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(49.2,54,351.7,293.1);
// library properties:
lib.properties = {
	id: 'CD0B9AAE894E4F1FAE7117107336388A',
	width: 300,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/copy1.png?1634283705245", id:"copy1"},
		{src:"images/copy2.png?1634283705245", id:"copy2"},
		{src:"images/CTA.png?1634283705245", id:"CTA"},
		{src:"images/image1.png?1634283705245", id:"image1"},
		{src:"images/logo.png?1634283705245", id:"logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CD0B9AAE894E4F1FAE7117107336388A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;