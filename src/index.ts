import { MikroORM } from "@mikro-orm/core";
import { title } from "process";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";


const main = async () => {
   const orm = await MikroORM.init({
      entities: [Post],
      dbName: "lereddit",
      type: "postgresql",
      debug: !__prod__,
   });

   const post = orm.em.create(Post, {title: 'my first post'});
   await orm.em.persistAndFlush(post);0
   console.log('-------------- sql 2--------------')
   await orm.em.nativeInsert(Post, {title: 'my first post 2'});
};

main();