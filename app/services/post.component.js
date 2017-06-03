"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var PostComponent = (function () {
    function PostComponent(_postService) {
        var _this = this;
        this._postService = _postService;
        this._postService.getPosts().subscribe(function (response) {
            _this.posts = response;
        });
    }
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        selector: 'post-service',
        template: "\n \t          <div class=\"container\">\n \t           <h4>My Blog Post</h4>\n \t           <br>\n\t \t           <div>\n\t \t                <label>Title:</label>\n\t \t                \n\t \t                <input class=\"form-control\" type =\"text\" \n\t \t                               [(ngModel)]=\"title\"/><br>\n\t \t                \n\t \t                <label>Body:</label>\n\t \t                \n\t \t                <input class=\"form-control\" type=\"text\" \n\t \t                                [(ngModel)] = \"body\"/><br>\n\t \t                <input class = \"btn btn-primary\" type = \"button\" \n\t \t                          (click)=\"addNewPost()\" value=\"Add Post\"/>\n\t \t           </div>\n\t \t           <br>\n \t           <ul *ngFor = \"let post of posts\">\n \t           <li><b>{{post.title}}</b></li>\n               <li>{{post.body}}</li>\n \t           </ul>\n               </div>  \n \t          "
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map