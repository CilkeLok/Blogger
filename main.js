(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _services_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/guard.service */ "./src/app/services/guard.service.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]] },
    { path: 'posts', component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"]], children: [
            { path: ':id', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_0__["PostComponent"] }
        ] },
    { path: 'signup', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"] },
    { path: 'signin', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
    { path: 'pagenotfound', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/pagenotfound' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\n    <div class=\"container\">\n        <a href=\"#\" class=\"navbar-brand\">Blogger.com</a>\n        <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n            <ul class=\"navbar-nav ml-auto\">\n                <ng-template [ngIf]=\"authService.authenticated()\">\n                    <li class=\"nav-item\">\n                        <a routerLink=\"/\" class=\"nav-link\">Home</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a routerLink=\"/posts\" class=\"nav-link\">Posts</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" (click)=\"signOut()\">SignOut</a>\n                    </li>\n                </ng-template>\n                <ng-template [ngIf]=\"!authService.authenticated()\">\n                    <li class=\"nav-item\">\n                        <a routerLink=\"/signin\" class=\"nav-link\">SignIn</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a routerLink=\"/signup\" class=\"nav-link\">SignUp</a>\n                    </li>\n                </ng-template>\n            </ul>\n        </div>\n    </div>\n</nav>\n<router-outlet></router-outlet>\n\n<footer id=\"main-footer\" class=\"bg-dark\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col text-center text-white\">\n                <div class=\"py-4\">\n                    <h1 class=\"h3\">Blogger.com</h1>\n                    <p>Copyright &copy; 2018</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyASLap0nTNbASP8hjGH2LQaAJvvZfWJxZ8",
            authDomain: "bloggers-4a18e.firebaseapp.com",
            databaseURL: "https://bloggers-4a18e.firebaseio.com"
        });
    };
    AppComponent.prototype.signOut = function () {
        this.authService.signout();
        this.router.navigate(['/signin']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/guard.service */ "./src/app/services/guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bloggers/bloggers.component */ "./src/app/components/bloggers/bloggers.component.ts");
/* harmony import */ var _components_bloggers_blogger_blogger_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/bloggers/blogger/blogger.component */ "./src/app/components/bloggers/blogger/blogger.component.ts");
/* harmony import */ var _components_add_blogger_add_blogger_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-blogger/add-blogger.component */ "./src/app/components/add-blogger/add-blogger.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/bloggers.service */ "./src/app/services/bloggers.service.ts");
/* harmony import */ var _bloggers_reducers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bloggers.reducers */ "./src/app/bloggers.reducers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _components_bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_12__["BloggersComponent"],
                _components_bloggers_blogger_blogger_component__WEBPACK_IMPORTED_MODULE_13__["BloggerComponent"],
                _components_add_blogger_add_blogger_component__WEBPACK_IMPORTED_MODULE_14__["AddBloggerComponent"],
                _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_15__["PostsComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_16__["PostComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({ bloggers: _bloggers_reducers__WEBPACK_IMPORTED_MODULE_21__["bloggersReducer"] }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [_services_bloggers_service__WEBPACK_IMPORTED_MODULE_20__["BloggersService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_guard_service__WEBPACK_IMPORTED_MODULE_1__["GuardService"], _services_post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blogger.ts":
/*!****************************!*\
  !*** ./src/app/blogger.ts ***!
  \****************************/
/*! exports provided: Blogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blogger", function() { return Blogger; });
var Blogger = /** @class */ (function () {
    function Blogger(name, email, about) {
        this.name = name;
        this.email = email;
        this.about = about;
    }
    return Blogger;
}());



/***/ }),

/***/ "./src/app/bloggers.actions.ts":
/*!*************************************!*\
  !*** ./src/app/bloggers.actions.ts ***!
  \*************************************/
/*! exports provided: ADD_BLOGGER, DELETE_BLOGGER, EDIT_BLOGGER, ADD_BLOGGERS, AddBlogger, EditBlogger, DeleteBlogger, AddBloggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BLOGGER", function() { return ADD_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BLOGGER", function() { return DELETE_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_BLOGGER", function() { return EDIT_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BLOGGERS", function() { return ADD_BLOGGERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogger", function() { return AddBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogger", function() { return EditBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogger", function() { return DeleteBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBloggers", function() { return AddBloggers; });
var ADD_BLOGGER = 'ADD_BLOGGER';
var DELETE_BLOGGER = 'DELETE_BLOGGER';
var EDIT_BLOGGER = 'EDIT_BLOGGER';
var ADD_BLOGGERS = 'ADD_BLOGGERS';
var AddBlogger = /** @class */ (function () {
    function AddBlogger(payload) {
        this.payload = payload;
        this.type = ADD_BLOGGER;
    }
    return AddBlogger;
}());

var EditBlogger = /** @class */ (function () {
    function EditBlogger(payload) {
        this.payload = payload;
        this.type = EDIT_BLOGGER;
    }
    return EditBlogger;
}());

var DeleteBlogger = /** @class */ (function () {
    function DeleteBlogger(payload) {
        this.payload = payload;
        this.type = DELETE_BLOGGER;
    }
    return DeleteBlogger;
}());

var AddBloggers = /** @class */ (function () {
    function AddBloggers(payload) {
        this.payload = payload;
        this.type = ADD_BLOGGERS;
    }
    return AddBloggers;
}());



/***/ }),

/***/ "./src/app/bloggers.reducers.ts":
/*!**************************************!*\
  !*** ./src/app/bloggers.reducers.ts ***!
  \**************************************/
/*! exports provided: bloggersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bloggersReducer", function() { return bloggersReducer; });
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloggers.actions */ "./src/app/bloggers.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    bloggers: []
};
function bloggersReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_BLOGGER"]:
            return __assign({}, state, { bloggers: state.bloggers.concat([action.payload]) });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_BLOGGER"]:
            var oldBloggers = state.bloggers.slice();
            oldBloggers.splice(action.payload, 1);
            return __assign({}, state, { bloggers: oldBloggers });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT_BLOGGER"]:
            var beforeEditingBloggers = state.bloggers.slice();
            beforeEditingBloggers[action.payload.index] = action.payload.blogger;
            return __assign({}, state, { bloggers: beforeEditingBloggers });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_BLOGGERS"]:
            return __assign({}, state, { bloggers: action.payload });
        default: return state;
    }
}


/***/ }),

/***/ "./src/app/components/add-blogger/add-blogger.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-blogger/add-blogger.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-blogger/add-blogger.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-blogger/add-blogger.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3 bg-light border\">\n    <div class=\"col-md-8\">\n        <h1>Bloggers job</h1>\n        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem omnis nam cumque assumenda iure repellat.</p>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card text-center bg-success text-white mb-3 m-auto\">\n            <div class=\"card-body\">\n                <h3>Add New Blogger</h3>\n                <h1 *ngIf=\"(bloggersState | async).bloggers?.length>0;else noBloggers\" class=\"display-4\">\n                    <i class=\"fa fa-user-plus\"></i>{{ (bloggersState | async).bloggers.length }}\n                </h1>\n                <a href=\"#\" class=\"btn btn-outline-light btn-sm\" data-toggle=\"modal\" data-target=\"#addblogger\">Add blogger</a>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #noBloggers>\n    <h1 class=\"display-4\">\n        <i class=\"fa fa-user-plus\"></i>0\n    </h1>\n</ng-template>\n<div class=\"modal fade\" id=\"addblogger\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-success text-white\">\n                <h5 class=\"modal-title\">Add New Blogger</h5>\n                <button class=\"close\" data-dismiss=\"modal\">\n        <span>&times;</span>\n      </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #f=\"ngForm\" id=\"addForm\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" ngModel required name=\"name\" #nameBlogger=\"ngModel\">\n                        <span class=\"help-block text-danger\" *ngIf=\"!nameBlogger.valid && nameBlogger.touched\">You must insert Name\n          </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"email\" class=\"form-control\" id=\"email\" ngModel email=\"true\" required name=\"email\" #emailBlogger=\"ngModel\">\n                        <span class=\"help-block text-danger\" *ngIf=\"!emailBlogger.valid && emailBlogger.touched\">You must insert Email\n          </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"about\">About</label>\n                        <textarea name=\"about\" class=\"form-control\" rows=\"5\" value=\"About blogger\" ngModel></textarea>\n                    </div>\n                </form>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button (click)=\"addBlogger()\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\" [disabled]=!f.valid>Add</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-blogger/add-blogger.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-blogger/add-blogger.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddBloggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBloggerComponent", function() { return AddBloggerComponent; });
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/bloggers.service */ "./src/app/services/bloggers.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../bloggers.actions */ "./src/app/bloggers.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddBloggerComponent = /** @class */ (function () {
    function AddBloggerComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    AddBloggerComponent.prototype.ngOnInit = function () {
        this.bloggersState = this.store.select('bloggers');
    };
    AddBloggerComponent.prototype.addBlogger = function (form) {
        var _this = this;
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_5__["AddBlogger"](new _blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"](this.form.value.name, this.form.value.email, this.form.value.about)));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        this.form.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], AddBloggerComponent.prototype, "form", void 0);
    AddBloggerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-blogger',
            template: __webpack_require__(/*! ./add-blogger.component.html */ "./src/app/components/add-blogger/add-blogger.component.html"),
            styles: [__webpack_require__(/*! ./add-blogger.component.css */ "./src/app/components/add-blogger/add-blogger.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bloggers_service__WEBPACK_IMPORTED_MODULE_0__["BloggersService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AddBloggerComponent);
    return AddBloggerComponent;
}());



/***/ }),

/***/ "./src/app/components/bloggers/blogger/blogger.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/bloggers/blogger/blogger.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\r\n    color: black;\r\n    font-size: 25px;\r\n}"

/***/ }),

/***/ "./src/app/components/bloggers/blogger/blogger.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/bloggers/blogger/blogger.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card m-3\">\n    <div class=\"card-header\">\n        <h3 class=\"p-3\">{{ blogger.name }}</h3>\n    </div>\n    <div class=\"card-body\">\n        <h5 class=\"text-muted p-3\">{{ blogger.email }}</h5>\n        <p class=\"p-3\">{{ blogger.about }}</p>\n        <div class=\"d-flex flex-row justify-content-center\">\n            <div class=\"p-4\">\n                <a href=\"https://facebook.com/\">\n                    <i class=\"fa fa-facebook\"></i>\n                </a>\n            </div>\n            <div class=\"p-4\">\n                <a href=\"https://twitter.com/twitter?lang=eng\">\n                    <i class=\"fa fa-twitter\"></i>\n                </a>\n            </div>\n            <div class=\"p-4\">\n                <a href=\"https://instagram.com/\">\n                    <i class=\"fa fa-instagram\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <button class=\"btn btn-block btn-warning\" data-toggle=\"modal\" data-target=\"#changeblogger\" (click)=\"toggleEdit()\">Change</button>\n            </div>\n            <div class=\"col-md-6\">\n                <button class=\"btn btn-block btn-danger\" (click)=\"deleteBlogger()\">Delete</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"changeblogger\" data-backdrop=\"static\" *ngIf=\"editing\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-warning text-white\">\n                <h5 class=\"modal-title\">Change Blogger</h5>\n                <button class=\"close\" data-dismiss=\"modal\">\n          <span>&times;</span>\n        </button>\n            </div>\n            <div class=\"modal-body\">\n                <form #f=\"ngForm\" id=\"changeForm\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"blogger.name\" required name=\"name\" #nameBlogger=\"ngModel\">\n                        <span class=\" help-block text-danger \" *ngIf=\"!nameBlogger.valid && name.Blogger.touched \">You must insert name</span>\n                    </div>\n                    <div class=\"form-group \">\n                        <label for=\"email \">Email</label>\n                        <input type=\"email \" class=\"form-control\" id=\"email\" [(ngModel)]=\"blogger.email\" required email name=\"email\" #emailBlogger=\"ngModel\">\n                        <span class=\"help-block text-danger \" *ngIf=\"!emailBlogger.valid && emailBlogger.touched \">You must insert Email</span>\n                    </div>\n                    <div class=\"form-group \">\n                        <label for=\"about \">About Blogger</label>\n                        <textarea name=\"about\" class=\"form-control\" rows=\"5\" value=\"About blogger\" [(ngModel)]=\"blogger.about\"></textarea>\n                    </div>\n                </form>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"toggleEdit()\">Close</button>\n                    <button (click)=\"changeBlogger(f); \" type=\"submit\" class=\"btn btn-warrning\" data-dismiss=\"modal\" [disabled]=!f.valid>Finish Editing</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/bloggers/blogger/blogger.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/bloggers/blogger/blogger.component.ts ***!
  \******************************************************************/
/*! exports provided: BloggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggerComponent", function() { return BloggerComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/bloggers.service */ "./src/app/services/bloggers.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../bloggers.actions */ "./src/app/bloggers.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BloggerComponent = /** @class */ (function () {
    function BloggerComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
        this.editing = false;
    }
    BloggerComponent.prototype.ngOnInit = function () {
        this.bloggersState = this.store.select('bloggers');
        this.modalIndex = this.index;
    };
    BloggerComponent.prototype.toggleEdit = function () {
        this.editing = !this.editing;
        this.index = this.modalIndex;
    };
    BloggerComponent.prototype.changeBlogger = function (form) {
        var _this = this;
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__["EditBlogger"]({ index: this.index,
            blogger: new _blogger__WEBPACK_IMPORTED_MODULE_3__["Blogger"](form.value.name, form.value.email, form.value.about) }));
        this.bloggersState.subscribe(function (bloggers) {
            _this.bloggersService.saveBlogger(bloggers.bloggers).subscribe();
        });
        form.reset();
        this.editing = !this.editing;
    };
    BloggerComponent.prototype.deleteBlogger = function () {
        var _this = this;
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_4__["DeleteBlogger"](this.index));
        this.bloggersState.subscribe(function (bloggers) {
            _this.bloggersService.saveBlogger(bloggers.bloggers).subscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", _blogger__WEBPACK_IMPORTED_MODULE_3__["Blogger"])
    ], BloggerComponent.prototype, "blogger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Number)
    ], BloggerComponent.prototype, "index", void 0);
    BloggerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-blogger',
            template: __webpack_require__(/*! ./blogger.component.html */ "./src/app/components/bloggers/blogger/blogger.component.html"),
            styles: [__webpack_require__(/*! ./blogger.component.css */ "./src/app/components/bloggers/blogger/blogger.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bloggers_service__WEBPACK_IMPORTED_MODULE_1__["BloggersService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]])
    ], BloggerComponent);
    return BloggerComponent;
}());



/***/ }),

/***/ "./src/app/components/bloggers/bloggers.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/bloggers/bloggers.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/bloggers/bloggers.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/bloggers/bloggers.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <app-blogger class=\"col-md-6\" [blogger]=\"blogger\" [index]=\"i\" *ngFor=\"let blogger of (bloggersState | async).bloggers;let i=index\">\n    </app-blogger>\n</div>\n\n<app-add-blogger></app-add-blogger>"

/***/ }),

/***/ "./src/app/components/bloggers/bloggers.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/bloggers/bloggers.component.ts ***!
  \***********************************************************/
/*! exports provided: BloggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersComponent", function() { return BloggersComponent; });
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../bloggers.actions */ "./src/app/bloggers.actions.ts");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/bloggers.service */ "./src/app/services/bloggers.service.ts");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BloggersComponent = /** @class */ (function () {
    function BloggersComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    BloggersComponent.prototype.ngOnInit = function () {
        this.bloggersState = this.store.select('bloggers');
    };
    BloggersComponent.prototype.addBlogger = function (form) {
        var _this = this;
        this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_0__["AddBlogger"](new _blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"](form.value.name, form.value.email, form.value.about)));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        form.reset();
    };
    BloggersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-bloggers',
            template: __webpack_require__(/*! ./bloggers.component.html */ "./src/app/components/bloggers/bloggers.component.html"),
            styles: [__webpack_require__(/*! ./bloggers.component.css */ "./src/app/components/bloggers/bloggers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bloggers_service__WEBPACK_IMPORTED_MODULE_1__["BloggersService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], BloggersComponent);
    return BloggersComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: black;\r\n    color: white;\r\n}\r\n\r\nnavbar {\r\n    border-bottom: #008ed6 3px solid;\r\n    opacity: 0.8;\r\n}\r\n\r\n#home-section {\r\n    background: url('background.jpeg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px;\r\n}\r\n\r\n#home-section .dark-overlay {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 700px;\r\n}\r\n\r\n.info-header {\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: 1px #ddd solid;\r\n}"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n    <div class=\"dark-overlay\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 text-center mx-auto text-white\">\n                    <h1 class=\"display-2 mt-5 pt-5\">\n                        Find All About Our Bloggers\n                    </h1>\n                    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quas.</p>\n                    <a href=\"#bloggers\" class=\"btn btn-outline-secundary btn-lg text-white\">\n                        <i class=\"fa fa-arrow-right\">Read More</i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<section id=\"bloggers\" class=\"my-5\">\n    <div class=\"container\">\n        <div clas=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"info-header mb-5 text-center\">\n                    <h1 class=\"text-primary pb-3\">\n                        Meet The Bloggers\n                    </h1>\n                    <p class=\"lead pb-3\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui enim blanditiis nisi laboriosam corporis magni.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-bloggers></app-bloggers>\n</section>"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../bloggers.actions */ "./src/app/bloggers.actions.ts");
/* harmony import */ var _services_bloggers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/bloggers.service */ "./src/app/services/bloggers.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getAllBlogers();
    };
    MainComponent.prototype.getAllBlogers = function () {
        var _this = this;
        this.bloggersService.getAllBloggers()
            .subscribe(function (bloggers) {
            _this.store.dispatch(new _bloggers_actions__WEBPACK_IMPORTED_MODULE_0__["AddBloggers"](bloggers));
        });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bloggers_service__WEBPACK_IMPORTED_MODULE_1__["BloggersService"],
            _node_modules_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section {\r\n    background: url('lost.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px;\r\n}\r\n\r\n#home-section .dark-overlay {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 700px;\r\n}\r\n\r\n.info-header {\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: 1px #ddd solid;\r\n}"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n    <div class=\"dark-overlay\">\n    </div>\n</header>\n<section id=\"page-not-found\" class=\"my-5\">\n    <div class=\"container\">\n        <div clas=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"info-header mb-5 text-center\">\n                    <h1 class=\"text-primary pb-3\">\n                        Are you Lost???\n                    </h1>\n                    <p class=\"lead pb-3\">\n                        Use the Navigation!!!\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"condition\" class=\"card m-3 bg-light mt-5\">\n    <div class=\"card-header bg-dark text-white\">\n        <h3>{{ post?.title | uppercase }} </h3>\n    </div>\n    <div class=\"card-body\">\n        <h3 class=\"text-muted\">{{ post?.category }}</h3>\n    </div>\n    <div class=\"card-footer text-dark\">\n        <p>{{ post?.datePosted | date: 'HH:mm dd-MM-yyyy'}}</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = /** @class */ (function () {
    function PostComponent(postService, route, router) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.condition = true;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.postService.getAllPosts()
            .subscribe(function (posts) {
            for (var index in posts) {
                if (posts[index].id == id) {
                    _this.post = posts[index];
                    _this.condition = true;
                    break;
                }
            }
        });
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            console.log(id);
            _this.postService.getAllPosts()
                .subscribe(function (posts) {
                for (var index in posts) {
                    if (posts[index].id == id) {
                        _this.post = posts[index];
                        _this.condition = true;
                        break;
                    }
                }
            });
        });
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/posts.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/posts/posts.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section {\r\n    background: url('posts.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 350px;\r\n}"

/***/ }),

/***/ "./src/app/components/posts/posts.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/posts/posts.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n    <div class=\"dark-overlay\">\n    </div>\n</header>\n<div class=\"bg-light\">\n    <div class=\"container my-4\">\n        <div class=\"row\">\n            <div class=\"col md-6\">\n                <div class=\"card m-3\">\n                    <div class=\"card-header\">\n                        <h4>Posts</h4>\n                    </div>\n                    <table class=\"table table-hover table-bordered text-center\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>Title</th>\n                                <th>Deleting</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let post of posts;let i=index\" [@postAnim]>\n                                <td>{{i+1}}</td>\n                                <td [routerLink]=\"['/posts',post.id]\">{{ post.title }}</td>\n                                <td>\n                                    <button class=\"btn btn-danger btn-block\" (click)=\"deletePost(post.id)\">\n          Delete Post\n        </button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container my-4\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"info-header mb-5 text-center\">\n                <h1 class=\"text-primary pb-3\">\n                    Add New Post\n                </h1>\n                <p class=\"lead pb-3\">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa reiciendis velit eum ea. Eum, eveniet?\n                </p>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 bg-dark text-white mx-auto\">\n            <form [formGroup]=\"addForm\" (ngSubmit)=\"submit()\" class=\"my-4\">\n                <div class=\"form-group\">\n                    <label for=\"title\">Title</label>\n                    <input type=\"text\" id=\"title\" formControlName=\"title\" class=\"form-control\">\n                    <span *ngIf=\"!addForm.get('title').valid && addForm.get('title').touched\">\n            Enter the Title!\n                    </span>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"category\">Category</label>\n                    <input type=\"text\" id=\"category\" formControlName=\"category\" class=\"form-control\">\n                    <span *ngIf=\"!addForm.get('category').valid && addForm.get('category').touched\">\n                    Enter Category!\n                    </span>\n                </div>\n\n                <br>\n                <button class=\"btn btn-outline-secondary btn-block\" type=\"submit\">Save</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.posts = [];
        this.date = new Date();
        setInterval(function () {
            _this.date = new Date();
        }, 1000);
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'title': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'category': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'date': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.postService.getAllPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent.prototype.deletePost = function (id) {
        this.posts = this.posts.filter(function (posts) { return posts.id != id; });
        this.postService.savePosts(this.posts)
            .subscribe();
    };
    PostsComponent.prototype.submit = function () {
        var newPost = {
            id: (this.posts === null ? 0 : this.posts.length + 1), title: this.addForm.value.title,
            category: this.addForm.value.category, datePosted: this.date
        };
        this.posts = this.posts || [];
        this.posts.push(newPost);
        this.postService.savePosts(this.posts)
            .subscribe();
        this.addForm.reset();
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/components/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/components/posts/posts.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('postAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('insert', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        transform: 'translatex(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 0,
                                transform: 'translate(-100px)',
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 0.5,
                                transform: 'translate(-70px)',
                                offset: 0.3
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 0.8,
                                transform: 'translate(-40px)',
                                offset: 0.8
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                                opacity: 1,
                                transform: 'translate(0)',
                                offset: 1
                            })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(900, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 0,
                            transform: 'translate(100px)'
                        }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section {\r\n    background: url('welcome.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px;\r\n}\r\n\r\n#home-section .dark-overlay {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 700px;\r\n}\r\n\r\n.home-inner {\r\n    padding-top: 150px;\r\n}\r\n\r\n.card-form {\r\n    opacity: 0.8;\r\n}"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n    <div class=\"dark-overlay\">\n        <div class=\"container home-inner\">\n            <div class=\"row\">\n                <div class=\"col-md-8 d-none d-md-block text-light\">\n                    <h1 class=\"display-4\">\n                        <strong>Sign In</strong>\n                    </h1>\n                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae id commodi quisquam soluta ad nesciunt accusamus magnam cum nihil enim!</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card bg-success text-center card-form\">\n                        <div class=\"card-body\">\n                            <form (ngSubmit)=\"signin(f)\" #f=\"ngForm\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" placeholder=\"User Name\" id=\"name\" name=\"name\" ngModel class=\"form-control form-control-lg\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\" ngModel class=\"form-control form-control-lg\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" ngModel class=\"form-control form-control-lg\">\n                                </div>\n                                <button class=\"btn btn-outline-light btn-block\" type=\"submit\">Sign In</button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService) {
        this.authService = authService;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.signin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section {\r\n    background: url('welcome.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px;\r\n}\r\n\r\n#home-section .dark-overlay {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 700px;\r\n}\r\n\r\n.home-inner {\r\n    padding-top: 150px;\r\n}\r\n\r\n.card-form {\r\n    opacity: 0.8;\r\n}"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n    <div class=\"dark-overlay\">\n        <div class=\"container home-inner\">\n            <div class=\"row\">\n                <div class=\"col-md-8 d-none d-md-block text-light\">\n                    <h1 class=\"display-4\">\n                        <strong>Sign Up</strong>\n                    </h1>\n                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae id commodi quisquam soluta ad nesciunt accusamus magnam cum nihil enim!</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card bg-warning text-center card-form\">\n                        <div class=\"card-body\">\n                            <form (ngSubmit)=\"signup(f)\" #f=\"ngForm\">\n                                <div class=\"form-group\">\n                                    <input type=\"text\" placeholder=\"User Name\" id=\"name\" name=\"name\" ngModel class=\"form-control form-control-lg\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"email\" placeholder=\"Email\" id=\"email\" name=\"email\" ngModel class=\"form-control form-control-lg\">\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" ngModel class=\"form-control form-control-lg\">\n                                </div>\n                                <button class=\"btn btn-outline-light btn-block\" type=\"submit\">Sign Up</button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.signup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.signupUser = function (email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(email, password)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.authenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.signout = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut();
        this.token = null;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/bloggers.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/bloggers.service.ts ***!
  \**********************************************/
/*! exports provided: BloggersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersService", function() { return BloggersService; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BloggersService = /** @class */ (function () {
    function BloggersService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    BloggersService.prototype.getAllBloggers = function () {
        var token = this.authService.getToken();
        return this.http.get('https://bloggers-4a18e.firebaseio.com/bloggers.json?auth=' + token, {
            headers: this.headers
        });
    };
    BloggersService.prototype.saveBlogger = function (bloggers) {
        var token = this.authService.getToken();
        return this.http.put('https://bloggers-4a18e.firebaseio.com/bloggers.json?auth=' + token, bloggers, {
            headers: this.headers
        });
    };
    BloggersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], BloggersService);
    return BloggersService;
}());



/***/ }),

/***/ "./src/app/services/guard.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/guard.service.ts ***!
  \*******************************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuardService = /** @class */ (function () {
    function GuardService(authService) {
        this.authService = authService;
    }
    GuardService.prototype.canActivate = function (route, state) {
        return this.authService.authenticated();
    };
    GuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    PostService.prototype.getAllPosts = function () {
        var token = this.authService.getToken();
        return this.http.get('https://bloggers-4a18e.firebaseio.com/posts.json?auth=' + token, {
            headers: this.headers
        });
    };
    PostService.prototype.savePosts = function (posts) {
        var token = this.authService.getToken();
        return this.http.put('https://bloggers-4a18e.firebaseio.com/posts.json?auth=' + token, posts, {
            headers: this.headers
        });
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cilic\Desktop\Bloggers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map