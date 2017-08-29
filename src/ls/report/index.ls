angular.module \ogr
  ..controller \report, <[$scope]> ++ ($scope) ->
    $scope.tab = 0
    $scope.gotab = ->
      $scope.tab = it
      document.body.scrollTop = document.getElementById(\report).getBoundingClientRect!top + document.body.scrollTop
    $scope.toc = do
      handle: (event) ->
        text = Array.from((event.target or event.toElement).childNodes)
          .filter -> it.nodeName == \#text
          .0.textContent.trim!
        item = Array.from($("\#content h2, \#content h3"))
          .filter -> ~$(it).text!indexOf(text)
          .map -> [it, it.getBoundingClientRect!top]
          .filter -> it.1
          .0
        @scrollto item.0

      scrollto: (sel = null, delay=0) ->
        <- setTimeout _, delay
        top = if sel => ( $(sel).offset!top - 60 ) else 0
        $(document.body).animate {scrollTop: top}, '500', 'swing', ->
        $("html").animate {scrollTop: top}, '500', 'swing', ->

