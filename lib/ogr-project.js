if(typeof(plotdb)=="undefined" && !plotdb) var plotdb = {};
plotdb.chart.add('Radar Chart',{"key":1020,"name":"Radar Chart","owner":4,"theme":null,"parent":null,"description":"a standard, multiple radar chart","basetype":["6"],"visualencoding":["2","5"],"category":["1","5"],"tags":["weather","temperature","circular","cycle","period"],"likes":null,"searchable":true,"dimlen":2,"createdtime":"2016-03-20T03:10:08.000Z","modifiedtime":"2017-05-12T01:49:01.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"order of data point","type":["Order"],"fields":[],"fieldName":null},"radius":{"desc":"radius of point on radar line","type":["Number"],"fields":[],"require":true,"multiple":true,"fieldName":[]}},"config":{"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"13","default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"nodeFill":{"desc":"fill Dot with this color","name":"Fill Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Dot"},"nodeShow":{"name":"Show Data Dot","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Dot"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"8","default":8,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"aAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Angular Axis"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"rAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Radial Axis"},"aAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Angular Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ccc","category":"Grid"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"rAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Radial Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 2","default":"2 4","category":"Grid"},"lineSmoothing":{"name":"Line Smoothing","type":[{"name":"Choice","level":20,"values":["linear","step","step-before","step-after","basis","bundle","cardinal","monotone"],"default":""}],"value":"linear","default":"cardinal","category":"Line"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#e8e8e8","default":"rgba(255,255,255,0)","category":"Grid"},"legendPosition":{"name":"Position","type":[{"name":"Choice","level":20,"values":["top","left","right","bottom"],"default":""}],"value":"right","default":"right","category":"Legend"},"rAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"6","default":6,"category":"Radial Axis","rebindOnChange":true},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":1,"category":"Grid"},"nodeStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":2,"category":"Dot"},"aAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Angular Axis"},"rAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Radial Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(9 + Math.round(Math.random() * 3));
    var count = d3.range(Math.round(Math.random() * 2) + 2);
    return {
      order: [{name: "Month", data: list.map(function(d,i) { return plotdb.data.sample.month[i].substring(0,3); })}],
      radius: count.map(function(d,i) {
        return {
          name: "Value " + d,
          data: list.map(function(d,i) { return Math.round(Math.random() * 90 + 10); })
        };
      })
    };
  },
  dimension: {
    radius: { type: [plotdb.Number], require: true, multiple: true, desc: "radius of point on radar line" },
    order: { type: [plotdb.Order], desc: "order of data point" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    palette: {},
    strokeWidth: {},
    lineSmoothing: {},
    legendLabel: {},
    legendShow: {},
    legendPosition: {},
    rAxisShow: {},
    rAxisLabel: {},
    rAxisTickPadding: {},
    rAxisTickCount: {rebindOnChange: true},
    aAxisShow: {},
    aAxisLabel: {},
    aAxisTickPadding: {},
    nodeShow: {},
    nodeSize: {default: 8},
    nodeStrokeWidth: {default: 2},
    nodeFill: {default: "#fff"},
    gridShow: {},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridBackground: {},
    popupShow: {},
    unit: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.allGroup = this.svg.append("g");
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.gridGroup = this.allGroup.append("g").attr({class: "grid-group"});
    this.aAxisGroup = this.allGroup.append("g").attr({class: "axis angle"});
    this.rAxisGroup = this.allGroup.append("g").attr({class: "axis radius"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      var name = that.names[d3.select(this.parentNode).datum().idx];
      var order = that.orders[i];
      popup.select(".title").text(name + " @ " + order);
      popup.select(".value").text(d + " " + (that.config.unit || ""));
    });
    this.line = d3.svg.line().tension(0.5)
      .x(function(d,i) { return that.rScale(d) * Math.sin( that.aScale(that.orders[i]) ); })
      .y(function(d,i) { return that.rScale(d) * -Math.cos( that.aScale(that.orders[i]) ); });
    this.overlap = plotd3.rwd.overlap();
  },
  parse: function() {
    plotdb.Order.sort(this.data, "order");
    this.orders = d3.map(this.data, function(d,i) { return d.order; }).keys();
    this.parsed = d3.transpose(this.data.map(function(it) { return it.radius; }));
    this.parsed.map(function(d,i) { d.idx = i; });
    this.names = this.dimension.radius.fieldName || ["1","2","3"];
    this.radiusRange = d3.extent(this.parsed
      .map(function(it) { return d3.extent(it); })
      .reduce(function(a,b) { return a.concat(b); }, []));
    if(this.radiusRange[0] == this.radiusRange[1]) this.radiusRange[1]++;
  },
  bind: function() {
    var that = this, sel;
    sel = this.allGroup.selectAll("path.data").data(this.parsed);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("path").attr({class: "data", opacity: 0});
    sel = this.allGroup.selectAll("g.data-group").data(this.parsed);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("g").attr({class: "data-group", opacity: 0});
    this.allGroup.selectAll("g.data-group").each(function(d,i) {
      var sel = d3.select(this).selectAll("circle.node").data(d);
      sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
      sel = sel.enter().append("circle").attr({class: "node", opacity: 0});
      if(that.config.popupShow) that.popup.nodes(sel);
    });

    sel = this.gridGroup.selectAll("circle.grid.radius").data(this.rTicks);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("circle").attr({class: "grid radius",opacity: 0, r: 0}).sort(d3.descending);
    this.gridGroup.selectAll("circle.grid.radius").sort(function(a,b) { return b - a;});
    sel = this.gridGroup.selectAll("line.grid.angle").data(this.aTicks);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("line").attr({class: "grid angle",opacity: 0});
    sel = this.aAxisGroup.selectAll("g").data(this.aTicks);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("g").attr({class: "tick"}).each(function(d,i) {
      d3.select(this).append("text").attr("opacity", 0);
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.legendVertical = ( this.config.legendPosition == "left" || this.config.legendPosition == "right" ) ? true : false;
    this.line.interpolate(this.config.lineSmoothing);
    this.popup.fontSize(this.config.fontSize);
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .scale(this.cScale)
      .orient(this.config.legendPosition)
      .size(
        (this.legendVertical
        ? [220,this.height - 2 * this.config.margin]
        : [this.width - 2 * this.config.margin, 220]
      ))
      .label(this.config.legendLabel || " ")
      .fontSize(this.config.fontSize);
    this.legend.tickValues(this.names);
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = i + 1; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    var mh = height - (this.config.legendShow && !this.legendVertical ? this.legendSize[1] + this.config.fontSize : 0);
    var mw = width - (this.config.legendShow && this.legendVertical ? this.legendSize[0] + this.config.fontSize : 0);
    
    this.size = ((mw>mh?mh:mw) - that.config.margin * 2 - that.config.fontSize * 2)/2;
    if(this.size <= 10) this.size = 10;
    this.rScale = d3.scale.linear()
      .domain([0,this.radiusRange[1]])
      .range([0,this.size]).nice(5);
    this.rTicks = this.rScale.ticks(this.config.rAxisTickCount);
    this.rTicks.sort(function(a,b) { return b - a; });
    this.niceRRange = this.rScale.domain();
    this.rAxis = plotd3.rwd.axis()
      .scale(this.rScale)
      .orient("radius")
      .angle(Math.PI /(this.data.length || 1))
      .showGrid(false)
      .tickValues(this.rTicks)
      .fontSize(this.config.fontSize);
    this.rAxisGroup.call(this.rAxis).select(".domain").remove();
    this.aScale = d3.scale.ordinal()
      .domain(this.orders.concat(""))
      .rangePoints([0, 2 * Math.PI]);
    this.aTicks = d3.range(this.data.length);
  },
  render: function() {
    var that = this,sel;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.legendGroup.attr({
      transform: 
        ["translate(",
        (this.legendVertical
           ? (this.width/2 + 
              (this.config.legendPosition == "left"
              ? -(this.size + this.config.fontSize + this.legendSize[0])
              :  (this.size + this.config.fontSize)
             ))
           : (this.width - this.legendSize[0])/2
        ),
        (!this.legendVertical 
           ? (this.height/2 + 
             (this.config.legendPosition == "top"
             ? -(this.size + this.config.fontSize + this.legendSize[1])
             :  (this.size + this.config.fontSize)
            ))
           : (this.height - this.legendSize[1])/2
        ),
        ")"].join(" "),
      display: (this.config.legendShow ? "block" : "none")
    });
    this.allGroup.attr({
      transform: [
        "translate(",
        ((this.width + (this.legendVertical ? (this.config.legendPosition == "left" ? 1 : -1) : 0) * (this.config.legendShow
          ? this.legendSize[0] + this.config.fontSize 
          : 0))/2
        ), (this.height + (!this.legendVertical ? (this.config.legendPosition == "top" ? 1 : -1) : 0) * (this.config.legendShow
          ? this.legendSize[1] + this.config.fontSize : 0))/2,
        //(this.height/2),
        ")"
      ].join(" ")
    });
    this.gridGroup.attr({
      display: (this.config.gridShow ? "block" : "none")
    }).selectAll("circle.grid.radius").attr({
      cx: 0, cy: 0, fill: this.config.gridBackground, stroke: this.config.gridStroke, 
      "stroke-width": this.config.gridStrokeWidth, "stroke-dasharray": this.config.gridDashArray
    }).transition("morph").duration(500).attr({
      r: function(d,i) { return that.rScale(d); },
      opacity: 1
    });

    this.gridGroup.selectAll("line.grid.angle").attr({
      stroke: this.config.gridStroke,
      "stroke-width": this.config.gridStrokeWidth,
      "stroke-dasharray": this.config.gridDashArray
    }).transition("morph").duration(500).attr({
      x1: 0, y1: 0,
      x2: function(d,i) {
        return that.rScale(that.niceRRange[1]) * Math.sin( that.aScale(that.orders[d]) );
      },
      y2: function(d,i) {
        return that.rScale(that.niceRRange[1]) * -Math.cos( that.aScale(that.orders[d]) );
      },
      opacity: 1
    });
    this.aAxisGroup.attr({
      display: (this.config.aAxisShow ? "block" : "none")
    });
    this.rAxisGroup.attr({
      display: (this.config.rAxisShow ? "block" : "none")
    });
    this.aAxisGroup.selectAll(".tick text").attr({
      "font-size": that.config.fontSize,
      "text-anchor": "middle",
      dy: "0.38em",
    }).text(function(d,i) { return that.orders[i] || i; }).transition("morph").duration(function() {
      return d3.select(this).attr("transform") ? 500 : 0;
    }).attr({
      transform: function(d,i) {
        var r = (that.rScale(that.niceRRange[1]) + 1 * that.config.fontSize);
        var x = r * Math.sin( that.aScale(that.orders[d]) );
        var y = r * -Math.cos( that.aScale(that.orders[d]) );
        var a = (360 * i / that.data.length);
        return ["translate(", x, y, ") rotate(", a, ")"].join(" ");
      },
    });
    this.aAxisGroup.selectAll("text").transition("opacity").duration(500).attr({ opacity: 1 });
    this.allGroup.selectAll("path.data").each(function(d,i) {
      var strokeColor = that.cScale(that.names[i]);
      var rgb = d3.rgb(strokeColor);
      var fillColor = ["rgba(",rgb.r,",",rgb.g,",",rgb.b,",",0.2,")"].join("");
      d3.select(this).attr({
        fill: fillColor,
        stroke: strokeColor,
        "stroke-width": that.config.strokeWidth
      }).transition("morph").duration(500).attr({
        d: function(d,i) { return that.line(d,i) +"Z"; },
      });    
    }).transition("opacity").duration(500).attr({
      opacity: function(d,i) { return (!that.activeGroup || that.activeGroup == i+1 ? 1 : 0.1); }
    });
    this.allGroup.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this);
      var strokeColor = that.cScale(that.names[i]);
      var rgb = d3.rgb(strokeColor);
      var fillColor = ["rgba(",rgb.r,",",rgb.g,",",rgb.b,",",0.2,")"].join("");
      node.selectAll("circle.node").attr({
        fill: that.config.nodeFill || "#fff", stroke: strokeColor, "stroke-width": that.config.nodeStrokeWidth,
        display: (that.config.nodeShow ? "block" : "none")
      }).transition("morph").duration(500).attr({
        cx: function(d,i) { return that.rScale(d) * Math.sin( that.aScale(that.orders[i]) ); },
        cy: function(d,i) { return that.rScale(d) * -Math.cos( that.aScale(that.orders[i]) ); },
        r: that.config.nodeSize/2,
        opacity: 1
      });
    });
    this.allGroup.selectAll("g.data-group").transition("opacity").duration(500).attr({
      opacity: function(d,i) { return (!that.activeGroup || that.activeGroup == i+1 ? 1 : 0.1); }
    });
  }
}}});
plotdb.chart.add('Column Chart',{"key":1073,"name":"Column Chart","owner":4,"theme":null,"parent":null,"description":"best for accurately comparison and estimate the ratio in time series data. also useful in showing distribution / frequency data, with histogram.","basetype":["1"],"visualencoding":["3"],"category":["5"],"tags":["bar","compare","column","basic","histogram"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2016-05-22T17:10:50.000Z","modifiedtime":"2017-05-25T20:39:02.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"X axis","type":["Order"],"fields":[],"require":true,"fieldName":null},"value":{"desc":"Y axis","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"fill":{"name":"Bar Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#e03f0e","default":"#e03f0e","category":"Global Settings"},"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["None","Ascending","Descending"],"default":""}],"value":false,"default":false,"category":"Value","rebindOnChange":true},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Global Settings"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(14 + Math.round(Math.random() * 4));
    var value = [{name: "value", data: list.map(function(d,i) { return Math.random(); })}];
    var order = [{name: "order", data: list}];
    return {value: value, order: order};
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "Y axis" },
    order: { type: [plotdb.Order], require: true, desc: "X axis" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridShow: {},
    boxRoundness: {},
    labelShow: {},
    fill: { name: "Bar Color" },
    sort: { type: [plotdb.Choice(["None","Ascending","Descending"])], default: false, rebindOnChange: true },
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickDirection: {},
    xAxisStroke: {},
    xAxisTickCount: {default: 0},
    xAxisHandleOverlap: {},
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.order);
      popup.select(".value").text(parseInt(d.value*100)/100);
    });
    this.grid = plotd3.rwd.grid();
  },
  parse: function() {
    plotdb.Order.sort(this.data, "order");
    this.orders = this.data.map(function(d,i) { return d.order; });
    this.xticklen = d3.max(this.data.map(function(d,i) { return ("" + (d.order || "")).length; }));
    this.valueRange = d3.extent(this.data.map(function(d,i) { return d.value; }));
    if(this.valueRange[0] == this.valueRange[1]) this.valueRange[1]++;
    this.data.forEach(function(d,i) { d.idx = i; });
  },
  bind: function() {
    var that = this,sel;
    sel = this.svg.selectAll("rect.data").data(this.data, function(d,i) { return d.order; });
    sel.exit().attr({class: "", opacity:1}).transition("remove").duration(500).attr({opacity: 0}).remove();
    sel = sel.enter().append("rect").attr({class: "data", opacity: 0});
    if(this.config.popupShow) this.popup.nodes(sel);
    sel = this.svg.selectAll("text.label").data(this.data, function(d,i) { return d.order; });
    sel.exit().attr({class: "", opacity: 1}).transition("remove").duration(500).attr({opacity: 0}).remove();
    sel = sel.enter().append("text").attr({class: "label", opacity: 0});
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    if(this.config.sort != "None" ) {
      this.data.sort(function(a,b) {
        if(that.config.sort == "Descending") return b.value - a.value;
        else if(that.config.sort == "Ascending") return a.value - b.value;
        return a.idx - b.idx;
      });
    }
    this.svg.selectAll("g.tick text.label").attr({
      "font-size": this.config.fontSize,
      "font-family": this.config.fontFamily
    }).text(function(d,i) { return d.value; });
    this.popup.fontSize(this.config.fontSize);
    this.orders = this.data.map(function(d,i) { return d.order; });
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.padding = (width < 480 ? this.config.padding * 0.6 : this.config.padding);
    this.yScale = d3.scale.linear().domain([0, this.valueRange[1]])
      .range([height - this.config.margin, this.config.margin + (this.config.labelShow ? this.config.fontSize * 1.5 : 0)]);
    this.yAxis = plotd3.rwd.axis()
      .scale(this.yScale)
      .orient("left")
      .labelPosition(this.config.yAxisLabelPosition)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .tickValues(this.yScale.ticks(this.config.yAxisTickCount))
      .tickFormat(function(d,i) { return d; })
      .fontSize(this.config.fontSize);
    this.yAxis.label(this.config.yAxisLabel || "");
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);

    var step = (width - this.config.margin * 2 - this.yAxisWidth) / (this.data.length || 1);
    var rate = this.padding / step;
    if(rate > 1) rate = 1;
    this.xScale = d3.scale.ordinal().domain(this.orders)
      .rangeBands([this.config.margin + this.yAxisWidth, width - this.config.margin],rate,rate);
    var barWidth = this.xScale.rangeBand();
    if(barWidth<1) {
      rate = (barWidth - 1)/step;
      if(rate > 1) rate = 1;
      this.xScale.rangeBands([this.config.margin + this.yAxisWidth, width - this.config.margin],rate,rate);
    }
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .tickDirection(this.config.xAXisTickDirection)
      .ticks(this.config.xAxisTickCount)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .fontSize(this.config.fontSize);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.yScale.range([height - this.config.margin - this.xAxisHeight - 1, this.config.margin + (this.config.labelShow ? this.config.fontSize * 1.5 : 0)]);
    this.yAxisGroup.call(this.yAxis);
    this.grid.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .orient("horizontal");
    this.gridGroup.call(this.grid);
  },
  render: function() {
    var that = this;
    var w = this.xScale.rangeBand();
    if( w <= this.xticklen * this.config.fontSize ) this.overlap = true; else this.overlap = false;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.svg.selectAll("text.label").attr({
      x: function(d,i) { return that.xScale(d.order) + w/2; },
      y: function(d,i) { return that.yScale(d.value) - that.config.fontSize * 0.5; },
      fill: this.config.textFill,
      opacity: (this.config.labelShow ? 1 : 0),
      "text-anchor": "middle"
    }).style({
      display: (this.config.labelShow ? "block" : "none")
    }).text(function(d,i) { return Math.round(d.value*100)/100; });
    this.gridGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth,
        0,
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.yAxisGroup.attr({
      transform: "translate("+(that.yAxisWidth + that.config.margin)+" 0)",
      display: this.config.yAxisShow ? "block" : "none"
    }).select(".domain").attr({
      display: this.config.yAxisShowDomain ? "block" : "none"
    });
    this.xAxisGroup.attr({
      transform: "translate(0 "+(that.height-that.config.margin-that.xAxisHeight)+")",
      display: this.config.xAxisShow ? "block" : "none"
    }).select(".domain").attr({
      display: this.config.xAxisShowDomain ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.svg.selectAll("rect.data").each(function(d,i) {
      var node = d3.select(this);
      if(!this.inited) {
        node.attr({
          x: function(d,i) { return that.xScale(d.order); },
          width: w,
          y: that.yScale(0),
          height: 0,
          fill: that.config.fill
        });
      } 
      node = node.transition().duration(500);
      node.attr({
        x: function(d,i) { return that.xScale(d.order); },
        width: w,
        y: function(d,i) { return that.yScale(d.value); },
        height: function(d,i) { return that.yScale(0) - that.yScale(d.value); },
        fill: that.config.fill,
        rx: that.config.boxRoundness,
        ry: that.config.boxRoundness,
        opacity: 1
      });
      this.inited = true;
    });
  }
}}});
