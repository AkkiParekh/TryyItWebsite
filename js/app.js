var tryyItApp = angular.module('tryyItApp', ['ngRoute'])
	
tryyItApp.config(["$httpProvider", "$qProvider", "$compileProvider", "$routeProvider", "$locationProvider", 
	function($httpProvider, $qProvider, $compileProvider, $routeProvider, $locationProvider) {
	
	$httpProvider.defaults.headers.common  = {};
	$httpProvider.defaults.headers.post    = {};
	$httpProvider.defaults.headers.put     = {};
	$httpProvider.defaults.headers.patch   = {};
	$httpProvider.defaults.useXDomain      = !0;
	$httpProvider.defaults.withCredentials = !1;
    $qProvider.errorOnUnhandledRejections(!1);
    $compileProvider.debugInfoEnabled(!1);
    window.history && window.history.pushState && $locationProvider.html5Mode({
        enabled: !0,
        requireBase: !0
    }).hashPrefix("!");

    $routeProvider.when('/', {
        controller: 'homeCtrl',
        templateUrl: 'views/home.html'
    });
	$routeProvider.when('/home', {
        controller: 'homeCtrl',
        templateUrl: 'views/home.html'
    });
    // $routeProvider.when('/map', {
    //     controller: 'MappingCtrl',
    //     templateUrl: 'view/mapping/mappingMain.html'
    // });
    // $routeProvider.when('/projects', {
    //     controller: 'ProjectCtrl',
    //     templateUrl: 'view/project/projects.html',
    //     reloadOnSearch: false
    // });
    // $routeProvider.when('/project/:projectId', {
    //     templateUrl: 'view/project/project.html'
    // });
    // // All catalogs -  reloadOnSearch: false  prevents page from reloading after removing the search parameters
    // $routeProvider.when('/catalogs', {
    //     templateUrl: 'view/catalog/catalogs.html',
    //     reloadOnSearch: false
    // });
    // $routeProvider.when('/catalogs/import/create', {
    //     controller: 'CreateImportCtrl',
    //     templateUrl: 'view/catalog/import/createImport.html'
    // });
    // $routeProvider.when('/catalogs/import/addFile', {
    //     controller: 'AddImportFileCtrl',
    //     templateUrl: 'view/catalog/import/addImportFile.html'
    // });
    // $routeProvider.when('/catalogs/import/editFile', {
    //     controller: 'EditImportFileCtrl',
    //     templateUrl: 'view/catalog/import/editImportFile.html'
    // });
    // $routeProvider.when('/catalogs/export/create', {
    //     controller: 'CreateExportCtrl',
    //     templateUrl: 'view/catalog/export/createExport.html',
    //     reloadOnSearch: false
    // });
    // $routeProvider.when('/home', {
    //     controller: 'DashboardCtrl',
    //     templateUrl: 'view/dashboard.html'
    // });
    // $routeProvider.when('/userManager', {
    //     controller: 'UserManagerCtrl',
    //     templateUrl: 'view/admin/userManager.html'
    // });
    // $routeProvider.when('/groupManager', {
    //     controller: 'GroupManagerCtrl',
    //     templateUrl: 'view/admin/groupManager.html'
    // });
    // $routeProvider.when('/roleManager', {
    //     controller: 'AdminRoleCtrl',
    //     templateUrl: 'view/admin/adminRoleAssignments.html'
    // });
    // $routeProvider.when('/superAdmin', {
    //     controller: 'SuperAdminCtrl',
    //     templateUrl: 'view/admin/superAdmin.html'
    // });
    // $routeProvider.when('/bridgeRoles', {
    //     controller: 'BridgeRoleCtrl',
    //     templateUrl: 'view/project/bridgeRoleAssignments.html'
    // });
    // $routeProvider.when('/adminApi', {
    //     controller: 'AdminApiCtrl',
    //     templateUrl: 'view/admin/adminApi.html'
    // });
    $routeProvider.otherwise({redirectTo: '/404'});
}]);	


tryyItApp.run(function($rootScope, $route, $location, $timeout) {
    $rootScope.isRouteLoading = !0;

    $rootScope.baseUrl = "",
    
  //   $location.path = function(path, reload) {
  //   	var original = this;
  //       if (reload === !1)
  //           var lastRoute = $route.current, 
		// un 	= $rootScope.$on("$locationChangeSuccess", function() {
  //       	$route.current = lastRoute,
  //       	un()
  //   	});
  //       return original.apply($location, [path])
  //   };
    
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        $rootScope.isRouteLoading = !0;
    });
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
        
    });
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        $timeout(function() {
            $rootScope.isRouteLoading = !1;            
        }, 50)
    });
    
    $rootScope.showMessage = function(message, time, callback) {
        var options = {
            message: is.undefined(message) ? "Something went wrong" : message,
            time: is.undefined(time) ? 2e3 : time,
            callback: is["function"](callback) ? callback : ""
        };
        Materialize.toast(options.message, options.time, "brand-bg white-text center", options.callback)
    };
    $rootScope.enableBtn = function(button) {
        $(button).prop("disabled", !1).removeClass("disabled")
    };
    $rootScope.disableBtn = function(button) {
        $(button).prop("disabled", !0).addClass("disabled")
    };
    $rootScope.goto404 = function() {
        $location.path("/404")
    };
    
    $rootScope.callMaterializeAutoComplete = function(options) {
        var defaults = {
            inputId: null,
            ajaxUrl: !1,
            data: {},
            minLength: 3
        };
        options = $.extend(defaults, options);
        var $input = $("#" + options.inputId);
        if ($input.length) {
            var timeout, liSelected, $autocomplete = $('<ul id="ac" class="autocomplete-content dropdown-content"style="position:absolute"></ul>'), $inputDiv = $input.closest(".input-field"), runningRequest = !1;
            $inputDiv.length ? $inputDiv.append($autocomplete) : $input.after($autocomplete);
            var highlight = function(string, match) {
                var matchStart = string.toLowerCase().indexOf("" + match.toLowerCase())
                  , matchEnd = matchStart + match.length - 1
                  , beforeMatch = string.slice(0, matchStart)
                  , matchText = string.slice(matchStart, matchEnd + 1)
                  , afterMatch = string.slice(matchEnd + 1);
                return string = "<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>"
            };
            $autocomplete.on("click", "li", function() {
                $input.val($(this).text().trim()),
                $input.attr("data-localityId", $(this).attr("data-localityId")),
                $autocomplete.empty()
            }),
            $input.on("keyup", function(e) {
                if (timeout && clearTimeout(timeout),
                13 === e.which)
                    return void liSelected[0].click();
                if (40 === e.which)
                    return void (liSelected ? (liSelected.removeClass("selected"),
                    next = liSelected.next(),
                    liSelected = next.length > 0 ? next.addClass("selected") : $autocomplete.find("li").eq(0).addClass("selected")) : liSelected = $autocomplete.find("li").eq(0).addClass("selected"));
                if (38 === e.which)
                    return void (liSelected ? (liSelected.removeClass("selected"),
                    next = liSelected.prev(),
                    liSelected = next.length > 0 ? next.addClass("selected") : $autocomplete.find("li").last().addClass("selected")) : liSelected = $autocomplete.find("li").last().addClass("selected"));
                if (9 !== e.which && 16 !== e.which && 17 !== e.which && 18 !== e.which && 20 !== e.which && 35 !== e.which && 36 !== e.which && 37 !== e.which && 39 !== e.which) {
                    if (27 === e.which)
                        return void $autocomplete.empty();
                    var val = $input.val().toLowerCase();
                    $autocomplete.empty(),
                    val.length > options.minLength && (timeout = setTimeout(function() {
                        runningRequest = !0,
                        userProfileService.getInfo("getAddressLocalities", {
                            locality_term: val,
                            city_id: parseInt($("select.userCity").val() || 4)
                        }).then(function(response) {
                            if (_.has(response.data, "errors"))
                                Materialize.toast(response.data.errors[0], 2500, "brand-bg white-text center");
                            else {
                                if (response.data.data.result.length) {
                                    var appendList = "";
                                    $(response.data.data.result).each(function(key, value) {
                                        if ("" != value.name) {
                                            var li = "";
                                            li += "<li data-localityId=" + value.id + "><span>" + highlight(value.name, val) + "</span></li>",
                                            appendList += li
                                        }
                                    }),
                                    $autocomplete.append(appendList)
                                }
                                runningRequest = !1
                            }
                        })
                    }, 250))
                }
            }),
            $(document).click(function(e) {
                $(e.target).closest($autocomplete).length || $autocomplete.empty()
            })
        }
    };
    
    angular.element(window).bind("resize", function() {
        
    });

    angular.element(window.document.body).ready(function() {
        
    });    

    tryy.initialize();
});