if(typeof(plotdb)=="undefined" && !plotdb) var plotdb = {};
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
plotdb.chart.add('grouped radar chart',{"key":14123,"name":"grouped radar chart","owner":12,"theme":null,"parent":1020,"description":"a standard, multiple radar chart","basetype":["6"],"visualencoding":["2","5"],"category":["1","5"],"tags":["weather","temperature","circular","cycle","period"],"likes":null,"searchable":true,"dimlen":2,"createdtime":"2017-06-27T15:35:22.000Z","modifiedtime":"2017-07-13T06:04:14.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"permission":{"list":[],"switch":"publish"},"assets":[],"dimension":{"name":{"desc":"attribute name of data point","type":["String"],"fields":[{"key":82908,"bind":"name","name":"Name","dataset":8046,"datatype":"String","location":"server","datasetname":"grouped radar chart (Dataset)"}],"fieldName":["Name"]},"radius":{"desc":"radius of point on radar line","type":["Number"],"fields":[{"key":82907,"bind":"radius","name":"Value","dataset":8046,"datatype":"Number","location":"server","datasetname":"grouped radar chart (Dataset)"}],"require":true,"fieldName":["Value"]},"category":{"desc":"category of data point","type":["String"],"fields":[{"key":82909,"bind":"category","name":"Category","dataset":8046,"datatype":"Number","location":"server","datasetname":"grouped radar chart (Dataset)"}],"fieldName":["Category"]}},"config":{"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"nodeFill":{"desc":"fill Dot with this color","name":"Fill Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Dot"},"nodeShow":{"name":"Show Data Dot","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Dot"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":8,"default":8,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"aAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Angular Axis"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"rAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Radial Axis"},"aAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Angular Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ccc","category":"Grid"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"rAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Radial Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":"2","category":"Global Settings"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 2","default":"2 4","category":"Grid"},"lineSmoothing":{"name":"Line Smoothing","type":[{"name":"Choice","level":20,"values":["linear","step","step-before","step-after","basis","bundle","cardinal","monotone"],"default":""}],"value":"linear","default":"cardinal","category":"Line"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#e8e8e8","default":"rgba(255,255,255,0)","category":"Grid"},"legendPosition":{"name":"Position","type":[{"name":"Choice","level":20,"values":["top","left","right","bottom"],"default":""}],"value":"right","default":"right","category":"Legend"},"rAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Radial Axis","rebindOnChange":true},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":1,"category":"Grid"},"nodeStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Dot"},"aAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Angular Axis"},"rAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Radial Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":{},"inherit":[],"metashow":null,"footer":null,code: {content: {
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
    radius: { type: [plotdb.Number], require: true, desc: "radius of point on radar line" },
    name: { type: [plotdb.String], desc: "attribute name of data point" },
    category: { type: [plotdb.String], desc: "category of data point" }
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
      popup.select(".title").text(d.name + " @ " + d.category);
      popup.select(".value").text(d.value + " " + (that.config.unit || ""));
    });
    this.line = d3.svg.line().tension(0.5)
      .x(function(d,i) { return that.rScale(d.value) * Math.sin( that.aScale(d.idx) ); })
      .y(function(d,i) { return that.rScale(d.value) * -Math.cos( that.aScale(d.idx) ); });
    this.overlap = plotd3.rwd.overlap();
  },
  parse: function() {
    var that = this;
    this.cats = d3.map(this.data, function(d,i) { return d.category; }).keys();
    this.parsed = d3.nest()
      .key(function(d,i) { return d.category; })
      .entries(this.data);
    for(var j=0;j<this.parsed.length;j++) {
      this.parsed[j].length = this.parsed[j].values.length;
    }
    for(var i=0, offset = 0, last, cur, value, len;i<this.parsed.length;i++) {
      len = this.parsed[i].length;
      last = this.parsed[(i + this.parsed.length - 1) % this.parsed.length];
      cur = this.parsed[i];
      value = (cur.values[0].radius + last.values[last.values.length - 1].radius)/2;
      cur.values = [{radius:value, idx: offset - 0.5, idxset: true}].concat(cur.values);
      last.values.push({radius:value, idx: offset - 0.5, idxset: true});
      this.parsed[i].offset = offset;
      offset += len;
    }
    this.names = [];
    this.parsed = this.parsed 
      .map(function(d,i) { 
        var ret = d.values.map(function(e,j) { 
          if(e.name) that.names.push(e.name); 
          return {category: d.key, name: e.name, value: e.radius, idx: (e.idxset ? e.idx : j + d.offset - 1) };
        });
        ret.cat = d.key;
        return ret;
      }); 
    this.radiusRange = d3.extent(this.parsed
      .map(function(it) { return d3.extent(it,function(d,i) { return d.value; }); })
      .reduce(function(a,b) { return a.concat(b); }, []));
    if(this.radiusRange[0] == this.radiusRange[1]) this.radiusRange[1]++;
  }, 
  bind: function() { 
    var that = this, sel; 
    sel = this.allGroup.selectAll("path.data").data(this.parsed);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("path").attr({class: "data", opacity: 0});
    sel = this.allGroup.selectAll("path.fill").data(this.parsed);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("path").attr({class: "fill", opacity: 0});

    sel = this.allGroup.selectAll("g.data-group").data(this.parsed);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("g").attr({class: "data-group", opacity: 0});
    this.allGroup.selectAll("g.data-group").each(function(d,i) {
      var sel = d3.select(this).selectAll("circle.node").data(d.filter(function(e,j) { return e.idx == parseInt(e.idx); }));
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
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette, this.cats);
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
    this.legend.tickValues(this.cats);
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
    var aDomain = [];
    for(var i=-0.5;i <= this.data.length - 0.5; i+=0.5) aDomain.push(i);
    this.aScale = d3.scale.ordinal()
      .domain(aDomain)
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
        return that.rScale(that.niceRRange[1]) * Math.sin( that.aScale(i) );
      },
      y2: function(d,i) { 
        return that.rScale(that.niceRRange[1]) * -Math.cos( that.aScale(i) );
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
    }).text(function(d,i) { return that.names[d || i]; }).transition("morph").duration(function() {
      return d3.select(this).attr("transform") ? 500 : 0;
    }).attr({
      transform: function(d,i) {
        var r = (that.rScale(that.niceRRange[1]) + 1 * that.config.fontSize);
        var x = r * Math.sin( that.aScale(i) );
        var y = r * -Math.cos( that.aScale(i) );
        var a = (360 * (i + 0.5) / that.data.length);
        return ["translate(", x, y, ") rotate(", a, ")"].join(" ");
      },
    });
    this.aAxisGroup.selectAll("text").transition("opacity").duration(500).attr({ opacity: 1 });
    this.allGroup.selectAll("path").each(function(d,i) {
      var node = d3.select(this);
      var strokeColor = that.cScale(d.cat);
      var rgb = d3.rgb(strokeColor);
      var fillColor = ["rgba(",rgb.r,",",rgb.g,",",rgb.b,",",0.2,")"].join("");
      var isfill = node.classed("fill");
      node.attr({
        fill: isfill ? fillColor : "none", 
        stroke: isfill ? "none" : strokeColor,
        "stroke-width": that.config.strokeWidth
      }).transition("morph").duration(500).attr({
        d: function(d,i) {
          var ret = that.line(d,i);
          if(!ret) return "";
          return ret + (isfill ? "L0 0Z" : "");
        },
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
        cx: function(d,i) { return that.rScale(d.value) * Math.sin( that.aScale(d.idx) ); },
        cy: function(d,i) { return that.rScale(d.value) * -Math.cos( that.aScale(d.idx) ); }, 
        r: that.config.nodeSize/2,
        opacity: 1
      }); 
    });
    this.allGroup.selectAll("g.data-group").transition("opacity").duration(500).attr({
      opacity: function(d,i) { return (!that.activeGroup || that.activeGroup == i+1 ? 1 : 0.1); }
    });
  }
}}});
plotdb.chart.add('Line Chart - OGR edition',{"key":14126,"name":"Line Chart - OGR edition","owner":12,"theme":null,"parent":953,"description":"The standard line chart. support overlapped multiple line. best for visualizing trend.","basetype":["2"],"visualencoding":["1","4"],"category":["4","5"],"tags":["line","trend","basic"],"likes":1,"searchable":true,"dimlen":2,"createdtime":"2017-06-28T08:54:39.000Z","modifiedtime":"2017-07-13T06:00:34.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"permission":{"list":[],"switch":"publish"},"assets":[],"dimension":{"order":{"desc":"x axis index","type":["Order"],"fields":[{"key":82921,"bind":"order","name":"month","dataset":8051,"datatype":"Date","location":"server","datasetname":"Line Chart - OGR edition (Dataset)"}],"require":true,"fieldName":["month"]},"value":{"desc":"y axis value","type":["Number"],"fields":[{"key":82918,"bind":"value","name":"zymotic rate(‰)","dataset":8051,"datatype":"Number","location":"server","datasetname":"Line Chart - OGR edition (Dataset)"},{"key":82919,"bind":"value","name":"wound rate(‰)","dataset":8051,"datatype":"Number","location":"server","datasetname":"Line Chart - OGR edition (Dataset)"},{"key":82920,"bind":"value","name":"other rate(‰)","dataset":8051,"datatype":"Number","location":"server","datasetname":"Line Chart - OGR edition (Dataset)"}],"require":true,"multiple":true,"fieldName":["zymotic rate(‰)","wound rate(‰)","other rate(‰)"]}},"config":{"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"nodeShow":{"name":"Show Data Dot","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Dot"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":12,"default":12,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"rgba(100%,100%,100%,0)","default":"rgba(255,255,255,0)","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"nodeStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Dot"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisZeroBaseline":{"desc":"y Axis starts with zero","name":"Zero Baseline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis","rebindOnChange":true},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":{},"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var src = plotdb.data.sample.crimeanWar;
    return {
      value: [src["zymotic rate(‰)"], src["wound rate(‰)"], src["other rate(‰)"]],
      order: [src.month]
    };
  },
  dimension: {
    value: { type: [plotdb.Number], multiple: true, require: true, desc: "y axis value" },
    order: { type: [plotdb.Order], require: true, desc: "x axis index" },
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    palette: {},
    legendShow: {},
    legendLabel: {},
    nodeSize: {default: 12},
    nodeShow: {},
    nodeStrokeWidth: {default: 2},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridShow: {},
    gridBackground: {},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    yAxisZeroBaseline: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {default: 0},
    xAxisStroke: {},
    xAxisLabelPosition: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {},
    popupShow: {},
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.popup = plotd3.html.tooltip(this.root);
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.grid = plotd3.rwd.grid();
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.svg.on("mousemove", function() {
      if(!that.config.popupShow) return;
      var box = this.getBoundingClientRect();
      var x = d3.event.clientX - box.left;
      var y = d3.event.clientY - box.top;
      if(y>=that.height - that.xAxisHeight - that.legendSize[1] - that.config.margin) return;
      var iy = that.yScale.invert(y);
      var ix = parseInt(Math.round(that.xScale.invert(x)));
      var min = -1;
      var target = null;
      for(var i = 0; i < that.parsed.dots.length; i++) {
        ds = that.parsed.dots[i];
        for(var v,j = 0; j < ds.data.length; j++) {
          dot = ds.data[j];
          dot.active = false;
          if(dot.order != ix) continue;
          v = Math.abs(dot.value - iy);
          if(min<0 || v < min) {
            min = v;
            target = dot;
          }
        }
      }
      if(target) target.active = true;
      that.target = target;
      if(that.target) {
        var x = that.xScale(that.target.order);
        var y = that.yScale(that.target.value);
        var direction = "left";
        var svgbox = that.svg[0][0].getBoundingClientRect();
        if( x < that.width/2 ) direction = "right";
        that.popup.direction(direction);
        that.popup.show(x, y);
        that.popup.call(function() {
          var node = d3.select(this);
          node.select(".title").text(that.parsed.group[that.target.group].name);
          node.select(".value").text(that.parsed.order[that.target.order].value + ": " + that.target.value);
        });
      }
      that.render();
    });
  },
  parse: function() {
    var that = this;
    var p = this.parsed = {
      dots: [],
      lines: [],
      order: [],
      group: [],
      values: []
    };
    var list = null;
    if(this.data.length) {
      //plotdb.Order.sort(this.data, "order", true);
      p.order = this.data.map(function(it) { return {
        idx: 0,
        value: it.order,
        parsed: it.order
      };});
      p.order.forEach(function(d,i) { d.idx = i; });
      p.order = p.order.filter(function(it) { return it.value != null && typeof(it.value) != "undefined"; });
      for(var j=0;j < this.data[0].value.length; j++) {
        p.group.push({
          name: (this.dimension.value && this.dimension.value.fieldName
                 ?(this.dimension.value.fieldName[j] || j):j),
          idx: j
        }); /* name: should fetch from field meta */
        p.dots.push(dots = {group: j, data: []});
        for(var i=0;i<this.data.length;i++) {
          /* order of "order" might be re-arranged so we have to lookup again */
          var orderIdx = (p.order.filter(function(it) { return it.value == that.data[i].order; })[0] || {idx: -1}).idx;
          dots.data.push({
            group: j,
            value: this.data[i].value[j],
            order: orderIdx
          });
        }
        //dots.data.sort(function(a,b) { return b.order - a.order; });
        p.lines.push({idx: j, data: d3.pairs(dots.data)});
        p.values = p.values.concat(dots.data.map(function(it) { return it.value;}));
      }
    }
  },
  bind: function() {
    var that = this,sel;
    sel = this.svg.selectAll("g.series.line").data(this.parsed.lines);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "series line"});
    this.svg.selectAll("g.series.line").each(function(it) {
      var sel = d3.select(this).selectAll("line.connect").data(it.data);
      sel.exit().remove();
      sel.enter().append("line").attr({class: "connect"});
    });
    this.lines = d3.select(this.root).selectAll("line.connect");
    sel = this.svg.selectAll("g.series.dot").data(this.parsed.dots);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "series dot"});
    this.svg.selectAll("g.series.dot").each(function(it) {
      var sel = d3.select(this).selectAll("circle.node").data(it.data);
      sel.exit().remove();
      sel.enter().append("circle").attr({class: "node"})
    });
    this.dots = d3.select(this.root).selectAll("circle.node");
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var svgbox = this.svg[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.circleSize = [this.config.nodeSize, this.config.nodeStrokeWidth];
    if(this.width < 480 || this.height < 320) {
      if(this.circleSize[0] > 8) this.circleSize[0] = 8;
      if(this.circleSize[1] > 4) this.circleSize[1] = 4;
    }
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend().orient("bottom").scale(this.cScale)
      .fontSize(this.config.fontSize)
      .label(this.config.legendLabel)
      .size([this.width - 2 * this.config.margin, 100])
      .tickValues(this.parsed.group.map(function(it){ return it.name; }));
    this.legendGroup.call(this.legend);
    this.legendSize = this.config.legendShow ? this.legend.offset() : [0,0];
    this.legendGroup.selectAll(".legend")
      .on("mouseover", function(it) { that.activeGroup = it; that.render(); })
      .on("mouseout", function(it) { that.activeGroup = null; that.render(); });
    this.popup.fontSize(this.config.fontSize);
    var ymin = d3.min(this.parsed.values);
    if(this.config.yAxisZeroBaseline) ymin = 0;
    this.yScale = d3.scale.linear()
      .domain([ymin,d3.max(this.parsed.values)])
      .range([height - this.config.margin - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0), this.config.margin]);
    this.yAxis = plotd3.rwd.axis()
      .orient("left")
      .scale(this.yScale)
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    
    this.xScale = d3.scale.linear()
      .domain(d3.extent(this.parsed.order.map(function(it) { return it.idx; })))
      .range([
        this.config.margin + this.yAxisWidth + this.config.padding,
        width - this.config.margin - this.config.padding
      ]);
    this.xAxis = plotd3.rwd.axis()
      .orient("bottom")
      .scale(this.xScale)
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .ticks(this.config.xAxisTickCount)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .tickFormat(function(it) {
        if(!that.parsed.order[it]) return "";
        return that.parsed.order[it].value;
      })
      .fontSize(this.config.fontSize);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset(): 0);
    this.yScale
      .range([
        height - this.config.margin - this.xAxisHeight - this.legendSize[1] - (this.config.legendShow ? this.config.fontSize : 0),
        this.config.margin
      ]);
    this.yAxisGroup.call(this.yAxis);
    this.grid.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .background(this.config.gridBackground)
      .orient("horizontal");
    this.gridGroup.call(this.grid);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.gridGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth,
        0,
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.xAxisGroup.selectAll(".domain").attr({
      display: (this.config.xAxisShowDomain ? "block" : "none"),
      d: ["M",
        this.config.margin + this.yAxisWidth,
        this.config.xAxisTickSizeOuter,
        "V0",
        "H",
        this.width - this.config.margin,
        "V",
        this.config.xAxisTickSizeOuter
      ].join(" ")
    });
    this.yAxisGroup.selectAll(".domain").attr({ display: (this.config.yAxisShowDomain ? "block" : "none")});
    this.legendGroup.attr({
      transform: [
        "translate(",
        (this.width - this.legendSize[0])/2,
        (this.height - this.config.margin - this.legendSize[1]),
        ")"
      ].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
    this.xAxisGroup.attr({
      "transform": "translate(0," + this.yScale.range()[0] + ")",
      display: this.config.xAxisShow ? "block" : "none"
    });
    this.yAxisGroup.attr({
      "transform": "translate(" + (this.config.margin + this.yAxisWidth) + ",0)",
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.lines.transition("morph").duration(500).attr({
      x1: function(it) { return that.xScale(it[0].order); },
      x2: function(it) { return that.xScale(it[1].order); },
      y1: function(it) { return that.yScale(it[0].value); },
      y2: function(it) { return that.yScale(it[1].value); },
      "stroke-width": 2
    });
    this.lines.style({
      stroke: function(it) {
        if(isNaN(it[0].value) || isNaN(it[1].value)) return 0;
        return that.cScale(that.parsed.group[it[0].group].name);
      }
    });
    this.dots.transition("morph").duration(500).attr({
      cx: function(it) { return that.xScale(it.order); },
      cy: function(it) { return that.yScale(it.value); },
      r: this.circleSize[0]/2,
      "stroke-width": this.circleSize[1],
      display: function(d,i) {
        if(isNaN(d.value)) return "none";
        return (that.config.nodeShow ? "block" : "none");
      }
    });
    this.dots.filter(function(it) { return it.active; }).attr({
      stroke: function(it) { return that.cScale(that.parsed.group[it.group].name); },
      fill: "#ffffff"
    });
    this.dots.filter(function(it) { return !it.active; }).attr({
      fill: function(it) { return that.cScale(that.parsed.group[it.group].name); },
      stroke: "#ffffff"
    });
    this.lines.transition("opacity").duration(500).attr({
      opacity: function(it) { return (that.activeGroup? (that.activeGroup == that.parsed.group[it[0].group].name ? 1 : 0.2):1); }
    });
    this.dots.transition("opacity").duration(500).attr({
      opacity: function(it) { return (that.activeGroup? (that.activeGroup == that.parsed.group[it.group].name ? 1 : 0.2):1); }
    });
  }
}}});
