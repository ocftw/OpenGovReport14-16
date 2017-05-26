angular.module \main, <[]>
  ..controller \detail, <[$scope]> ++ ($scope) ->
    $scope.loading = true
    $scope.clsmap = do
      "政策基礎": "context"
      "資料集": "dataset"
      "影響力": "impact"
    (detail) <- d3.csv \detail.csv, _
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
    criteria = [k for k of detail.0.values]
    table = for c in criteria =>
      obj = {name: c}
      for item in detail => obj[item.key] = {value: item.values[c], rank: Math.floor(item.values[c]/33.33)}
      obj
    $scope.$apply ->
      $scope.table = table
      $scope.detail = detail
    (raw) <- d3.csv \score.csv, _
    setTimeout (-> document.querySelector \#root .setAttribute \class, 'ld ld-over-full-inverse'), 1000
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
        {values: list, sum: sum}
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

    chart = do
      radar: plotdb.chart.get 'Radar Chart'
      column: plotdb.chart.get 'Column Chart'

    config = do
      gridShow: false
      xAxisShow: true
      yAxisShow: false
      xAxisStroke: \#f92
      fill: \#f92
      labelShow: false

    config-radar = do
      gridStroke: \#ddd
      gridBackground: \none
      gridDashArray: '1 0'
      gridStrokeWidth: 0.5
      palette: colors: [{hex: palette.danger}]
      nodeFill: palette.danger
      stroke: palette.danger
      nodeSize: 10
      legendShow: false
      aAxisShow: true
      rAxisShow: false


    chart.context = chart.column.clone!
    chart.dataset = chart.column.clone!
    chart.impact = chart.column.clone!

    chart.radar.data subcats, false, {radius: ["總計"], order: ["key"]}
    chart.impact.data cats["影響力"], false, {value: ["Raw Score"], order: ["Item"]}
    chart.context.data cats["政策基礎"], false, {value: ["Raw Score"], order: ["Item"]}
    chart.dataset.data cats["資料集"], false, { value: ["Raw Score"], order: ["Item"]}

    chart.radar.config config-radar
    chart.context.config {} <<< config <<< fill: palette.success, xAxisStroke: palette.success
    chart.dataset.config {} <<< config <<< fill: palette.warning, xAxisStroke: palette.warning
    chart.impact.config {} <<< config <<< fill: palette.info, xAxisStroke: palette.info
    chart.radar.attach \#chart-attr
    chart.context.attach \#chart-context
    chart.dataset.attach \#chart-dataset
    chart.impact.attach \#chart-impact

    setscore = (sel,v) -> document.querySelector sel .innerText = Math.round(v)
    setscore '#sum-context .score', obj["政策基礎"].sum
    setscore '#sum-dataset .score', obj["資料集"].sum
    setscore '#sum-impact .score', obj["影響力"].sum

    console.log subcats
    $scope.$apply -> $scope.loading = false
