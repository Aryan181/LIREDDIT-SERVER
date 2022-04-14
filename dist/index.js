"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const process_1 = require("process");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [Post_1.Post],
        dbName: "lereddit",
        type: "postgresql",
        debug: !constants_1.__prod__,
    });
    const post = orm.em.create(Post_1.Post, process_1.title, {});
};
main();
//# sourceMappingURL=index.js.map