angular.module \ogr, <[backend]>
  ..factory \httpRequestInterceptor, <[global]> ++ (global) -> do
    request: (config) ->
      config.headers['X-CSRF-Token'] = global.csrfToken
      config
  ..config <[$compileProvider $httpProvider]> ++ ($compileProvider, $httpProvider) ->
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(blob:|http:\/\/localhost)/)
    $httpProvider.interceptors.push \httpRequestInterceptor
  ..controller \site, <[$scope $http $interval global ldBase ldNotify initWrap]> ++
    ($scope, $http, $interval, global, ldBase, ldNotify, initWrap) ->
    initWrap = initWrap!
    $scope <<< ldBase
    $scope.notifications = ldNotify.queue
    initWrap.run!
    console.log \loaded
