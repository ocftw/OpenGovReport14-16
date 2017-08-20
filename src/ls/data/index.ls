angular.module \ogr
  ..controller \data, <[$scope $http]> ++ ($scope, $http) ->

    chart = do
      radar: plotdb.chart.get 'Radar Chart - OGR Edition'
      column: plotdb.chart.get 'Column Chart'
      gradar: plotdb.chart.get 'grouped radar chart'
      line: plotdb.chart.get 'Line Chart - OGR edition'

    $scope.loading = true
    $scope.score = do
      data: reportScore
      init: ->
        for item in @data => item["您的評分"] = 0
        @get-mine!
          .then ~> @get-mean!
          .then ~> @render!
      render: ->
        chart.line.data @data, true, {value: ["報告分數","社群平均","您的評分"], order: ["id"]}
      update: (values, name) ->
        for k,v of values =>
          obj = @data.filter(->it.id == k).0
          if k == \total or !obj => continue
          obj[name] = v / (if values.total? => (values.total or 1) else 1)
      get-mine: ->
        $http do
          url: \/d/score/
          method: \GET
        .then ~>
          @values = it.data
          if [k for k of @values].length =>
            @update @values, "您的評分"
            @done = true
        .catch ->
      get-mean: ->
        $http do
          url: \/d/score/mean
          method: \GET
        .then ~>
          @mean = it.data
          @update @mean, "社群平均"
        .catch -> console.log it
      mean: null
      set: (name, value) -> @values[name] = if @values[name] == value => 0 else value
      values: {}
      send: ->
        $scope.loading = true
        $http do
          url: \/d/score
          method: \POST
          data: {payload: @values}
        .finally ~> $scope.loading = false
        .then ~>
          @update @values, "您的評分"
          @get-mean!
        .then ~> @render!
        .catch -> alert "您已經填過囉！"


    $scope.clsmap = do
      "政策基礎": "context"
      "資料集": "dataset"
      "影響力": "impact"
    (detail) <- d3.csv \/assets/data/detail.csv, _
    detail = d3.nest!
      .key -> it["資料集類別"]
      .rollup (list) ->
        criteria = [k for k of list.0]
          .filter(-> /^\d+\./.exec(it))
        obj = {}
        for c in criteria =>
          d = c.replace /^\d+\.\s*/, ''
          obj[d] = 0
          for item in list =>
            obj[d] = obj[d] + (+item[c])
        for c in criteria =>
          d = c.replace /^\d+\.\s*/, ''
          obj[d] = Math.round(100 * obj[d] / list.length)
        obj
      .entries detail
    detail.map ->
      it.img = it.key.split ' ' .0
      it.name = it.key.replace /^[0-9. ]+/g, ''
    criteria = [k for k of detail.0.values]
    table = for c in criteria =>
      obj = {name: c}
      for item in detail => obj[item.key] = {value: item.values[c], rank: Math.floor(item.values[c]/33.33)}
      obj
    $scope.$apply ->
      $scope.table = table
      $scope.detail = detail
    (raw) <- d3.csv \/assets/data/score.csv, _
    setTimeout (-> document.querySelector \#visualization .setAttribute \class, 'ld ld-over-full-inverse'), 1000
    palette = do
      danger: \#ff5135
      success: \#00f2c1
      primary: \#00b4ed
      warning: \#ffdc6c
      info: \#e285ff

    obj = d3.nest!
      .key(-> it.Category)
      .key(-> it["Sub-category"])
      .rollup (list) ->
        sum = list.reduce(((a,b)-> a + +b["Weighted Score"]),0)
        sum2 = list.reduce(((a,b) -> a + +(b["Weight"].replace('%',''))), 0)
        {values: list, sum: sum, sum2: sum2, score: Math.round(10000 * sum / sum2) * 0.01}
      .map(raw)
    for k1,v1 of obj =>
      v1.sum = [v2 for k2,v2 of v1].reduce(((a,b) -> a + b.sum),0)
      for k2,v2 of v1 => v2.subscore = 100 * v2.sum / (v1.sum or 1)

    cats = d3.nest!
      .key -> it.Category
      .map raw

    subcats = d3.nest!
      .key -> it["Sub-category"]
      .rollup (list) ->
        sum = list.reduce(((a,b)-> a + +b["Weighted Score"]),0)
        {values: list, sum: sum}
      .entries raw
    for item in subcats => item["總計"] = Math.round(item.values.sum * 100)/100
    $scope.$apply -> $scope.subcats = subcats

    config = do
      gridShow: false
      xAxisShow: true
      yAxisShow: false
      xAxisTickDirection: \vertical
      xAxisHandleOverlap: \none
      xAxisTickSizeInner: 0
      xAxisTickSizeOuter: 0
      fontSoze: 10
      xAxisStroke: \#f92
      fill: \#f92
      labelShow: false

    config-radar = do
      gridStroke: \#ddd
      gridBackground: \none
      gridDashArray: '1 0'
      gridStrokeWidth: 0.5
      margin: 30
      nodeFill: \#fff
      stroke: palette.danger
      nodeSize: 10
      legendShow: true
      palette: {colors: [
        {hex: \#00f2c1, keyword: "政策基礎"},
        {hex: \#ffdc6c, keyword: "資料集"},
        {hex: \#e285ff, keyword: "影響力"},
        {hex: \#e354f0, keyword: "其它"}
      ]}
      aAxisShow: true
      rAxisShow: false

    config-line = do
      palette: {colors: [
        {hex: \#ccc, keyword: "報告分數"},
        {hex: \#f73d7e, keyword: "您的評分"},
        {hex: \#00f2c1, keyword: "社群平均"},
      ]}
      yAxisShowDomain: false
      gridShow: false
      xAxisTickDirection: \vertical
      xAxisHandleOverlap: \none
      xAxisTickCount: 15
      sort: null
    chart.context = chart.column.clone!
    chart.dataset = chart.column.clone!
    chart.impact = chart.column.clone!

    parsed-data = [ <[context 政策基礎]>, <[dataset 資料集]>, <[impact 影響力]> ] .map (map) ->
      [
        map,
        [{k, v} for k,v of obj[map.1]]
          .filter(->it.k!='sum')
          .map(-> it.v.name = it.k; it.v.cat = map.1; return it.v)
      ]
    parsed-data.map -> chart[it.0.0].data(it.1, false, {value: ["score"], order: ["name"]})

    chart.gradar.data(
      parsed-data.reduce(((a,b) -> a ++ b.1), [])
      false
      {radius: ["score"],  name: ["name"], category: ["cat"]}
    )

    chart.gradar.config config-radar
    chart.context.config {} <<< config <<< fill: palette.success, xAxisStroke: palette.success
    chart.dataset.config {} <<< config <<< fill: palette.warning, xAxisStroke: palette.warning
    chart.impact.config {} <<< config <<< fill: palette.info, xAxisStroke: palette.info
    chart.line.config {} <<< config-line
    chart.gradar.attach \#chart-attr
    chart.context.attach \#chart-context
    chart.dataset.attach \#chart-dataset
    chart.impact.attach \#chart-impact
    chart.line.attach \#feedback-line

    setscore = (sel,v) -> document.querySelector sel .innerText = Math.round(v)
    setscore '#sum-context .score', Math.round(100 * obj["政策基礎"].sum / 0.35) * 0.01
    setscore '#sum-dataset .score', Math.round(100 * obj["資料集"].sum / 0.35) * 0.01
    setscore '#sum-impact .score', Math.round(100 * obj["影響力"].sum / 0.30) * 0.01
    setscore '#sum-ttl .score', obj["影響力"].sum + obj["政策基礎"].sum + obj["資料集"].sum

    $scope.$apply -> $scope.loading = false
    $scope.score.init!
      .then ->
