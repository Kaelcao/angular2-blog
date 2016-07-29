"use strict";
var home_component_1 = require("./home.component");
var post_detail_component_1 = require("../posts/post-detail.component");
var post_list_component_1 = require("../posts/post-list.component");
var about_component_1 = require("../about/about.component");
var contact_component_1 = require("../contact/contact.component");
exports.homeRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            { path: 'posts/:id', component: post_detail_component_1.PostDetailComponent },
            { path: 'posts', component: post_list_component_1.PostListComponent },
            { path: 'about', component: about_component_1.AboutComponent },
            { path: 'contact', component: contact_component_1.ContactComponent }
        ]
    }
];
//# sourceMappingURL=home.routes.js.map